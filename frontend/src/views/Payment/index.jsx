import { useState } from "react";
import {
  CreditCard,
  ShoppingBag,
  Calendar,
  MinusCircle,
  PlusCircle,
  ChevronLeft,
  Lock,
} from "lucide-react";

export default function Payment() {
  const [selectedPackage, setSelectedPackage] = useState({
    name: "Sunset Hot Air Balloon Ride",
    description:
      "Experience breathtaking views as you soar through the sky during golden hour",
    price: 1000,
    image:
      "https://th.bing.com/th/id/OIP.14N-2FoBvPRpRmsK41OEOAHaHa?cb=iwc2&rs=1&pid=ImgDetMain",
  });
  const itemName = "Book your ride";
  const itemPrice = 1000;

  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(selectedPackage.price);
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1);
      setFinalAmount(selectedPackage.price);
    } else {
      setQuantity(quantity - 1);
      setFinalAmount((quantity - 1) * selectedPackage.price);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    setFinalAmount((quantity + 1) * selectedPackage.price);
  };

  const checkout = async () => {
    try {
      if (!email) {
        setError("Please enter your email address");
        return;
      }
      setIsProcessing(true);

      // setTimeout(async () => {
        try {
          const res = await fetch(`http://localhost:5000/checkout`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify({
              items: [
                {
                  id: 1,
                  quantity: quantity,
                  price: itemPrice,
                  name: itemName,
                  email: email,
                },
              ],
            }),
          });

          console.log(res)

          const data = await res.json();
          window.location = data.url;
        } catch (error) {
          console.log(error);
          setIsProcessing(false);
        }
      // }, 1000);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with breadcrumb */}
        <div className="mb-8">
          <a
            href="/"
            className="flex items-center text-blue-600 hover:text-blue-800 mb-2 text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to packages
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Your Booking
          </h1>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Progress indicator */}
          <div className="bg-blue-800 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-800 font-bold mr-2">
                  1
                </div>
                <span className="text-white font-medium">
                  Package Selection
                </span>
              </div>
              <div className="hidden md:flex items-center">
                <div className="w-12 h-1 bg-blue-400"></div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-800 font-bold mr-2">
                  2
                </div>
                <span className="text-white font-medium">Payment</span>
              </div>
              <div className="hidden md:flex items-center">
                <div className="w-12 h-1 bg-blue-400"></div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-300 text-blue-800 font-bold mr-2">
                  3
                </div>
                <span className="text-blue-200 font-medium">Confirmation</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left column - Order summary */}
            <div className="lg:w-1/2">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-blue-600" />
                  Order Summary
                </h2>

                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={selectedPackage.image}
                        alt={selectedPackage.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-bold text-gray-900">
                        {selectedPackage.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedPackage.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-700">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Select date during checkout</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-700">
                      Number of tickets
                    </h3>
                    <div className="flex items-center">
                      <button
                        onClick={decrement}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        <MinusCircle className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="mx-4 font-semibold text-lg w-6 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={increment}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <PlusCircle className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Price per ticket</span>
                    <span className="font-medium">
                      LKR {selectedPackage.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="py-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">Subtotal</span>
                    <span className="font-medium">
                      LKR {(quantity * selectedPackage.price).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-700">Taxes & fees</span>
                    <span className="font-medium">LKR 0</span>
                  </div>
                </div>

                <div className="py-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-blue-800">
                      LKR {finalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Stripe Payment Integration */}
            <div className="lg:w-1/2 bg-gray-50">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  Payment
                </h2>

                <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-800">
                      Secure Payment with Stripe
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-8 h-5 bg-blue-900 rounded"></div>
                    <div className="w-8 h-5 bg-red-500 rounded"></div>
                    <div className="w-8 h-5 bg-gray-800 rounded"></div>
                  </div>
                </div>

                <div className="mb-6 p-6 border border-gray-200 bg-white rounded-md min-h-40">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    aria-label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p
                    className="text-red-400
"
                  >
                    {error}
                  </p>
                </div>

                <button
                  onClick={checkout}
                  disabled={isProcessing}
                  className={`w-full py-3 px-4 flex items-center justify-center rounded-md font-medium text-white ${
                    isProcessing
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {isProcessing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    `Pay LKR ${finalAmount.toLocaleString()}`
                  )}
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By completing this booking, you agree to our terms of service
                  and cancellation policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-70">
          <div className="flex items-center">
            <Lock className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-700">Secure Payment</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-700">Free Cancellation</span>
          </div>
          <div className="flex items-center">
            <ShoppingBag className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-sm text-gray-700">Instant Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
