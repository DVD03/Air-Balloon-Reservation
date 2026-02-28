require("dotenv").config();
import("./mongoose/mongoose.js");
const express = require("express");
const app = express();

const cors = require("cors");
const Pilot = require("./models/pilot");
const router = require("./routes/pilot.route.js");
const CustomerRouter = require("./routes/customer.route.js");
const { generateEmailHTML, sendEmail } = require("./utils/sendEmail.js");
const BookingRouter = require("./routes/booking.route.js");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

app.use(express.json());
app.use(cors());
app.use("/users", router);
app.use("/bookings", BookingRouter);
app.use("/customer", CustomerRouter);


app.post("/checkout", async (req, res) => {
  try {
    const items = req.body.items;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: "LKR",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


app.get("/checkout-success", async (req, res) => {
  try {
    const sessionId = req.query.session_id;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
      const items = lineItems.data.map((lineItem) => ({
        name: lineItem.description,
        quantity: lineItem.quantity,
        price: lineItem.amount_total / 100,
        email: session.customer_details.email,
      }));

      const emailHtml = generateEmailHTML({
        username: session.customer_details.email.split("@")[0],
        items,
        total: items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
        orderId: session.id,
        date: new Date().toLocaleDateString(),
      });

      await sendEmail(session.customer_details.email, "Your Receipt from SkyHigh Balloons", emailHtml);
      console.log("Email sent after successful payment.");
    }

    res.send("Payment verified and email sent.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to verify payment.");
  }
});


// Endpoint to create a new pilot
app.post("/users", async (req, res) => {
  try {
    const newPilot = new Pilot(req.body);

    await newPilot.save();
    res.status(201).json(newPilot);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/users/:pilotId", async (req, res) => {
  try {
    const pilot = await Pilot.findOne({ pid: req.params.pilotId });
    if (!pilot) return res.status(404).json({ message: "Pilot not found" });
    res.json(pilot);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
