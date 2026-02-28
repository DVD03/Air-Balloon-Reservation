import { useState } from "react";
import {
  Users,
  GraduationCap,
  Heart,
  Calendar,
  Star,
  Clock,
  MapPin,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedPackage, setExpandedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Student Adventure",
      category: "students",
      price: 149,
      priceUnit: "per person",
      discount: "15% off with valid student ID",
      duration: "60 minutes",
      description:
        "Perfect for students looking for an exciting break from studies. Experience the thrill of hot air ballooning at a special student-friendly price.",
      features: [
        "Valid student ID required",
        "Morning flights only (Mon-Fri)",
        "Digital photo package included",
        "Complimentary soft drinks",
        "Option to bring one friend at same rate",
      ],
      recommended: false,
      image:
        "https://th.bing.com/th/id/OIP.hsbQbr4iaKK5wdNiocpLRgHaE8?cb=iwc2&w=964&h=644&rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Family Explorer",
      category: "family",
      price: 499,
      priceUnit: "for family of 4",
      discount: "$50 off for each additional child",
      duration: "75 minutes",
      description:
        "Create unforgettable family memories as you soar through the skies together. This package is designed to be enjoyable and affordable for the whole family.",
      features: [
        "Ideal for families with children (ages 6+)",
        "Family photo opportunity",
        "Educational commentary for kids",
        "Champagne for adults, juice for children",
        "Flexible morning or evening flights",
        "Commemorative flight certificates for all",
      ],
      recommended: true,
      image:
        "https://th.bing.com/th/id/R.bfa8ec912d7505b3bacc388ad71b263b?rik=i9FCH3G5s8rpLA&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Romantic Sunset",
      category: "special",
      price: 299,
      priceUnit: "per person",
      discount: null,
      duration: "90 minutes",
      description:
        "The perfect setting for proposals, anniversaries, or a special date. Watch the sunset from the clouds with your special someone.",
      features: [
        "Sunset flight timing",
        "Private basket section",
        "Premium champagne toast",
        "Professional photography",
        "Gourmet chocolate-covered strawberries",
        "Personalized flight certificate",
      ],
      recommended: false,
      image:
        "https://th.bing.com/th/id/OIP.Fa1XtGZALOtkeA7OvcL8GgHaEJ?cb=iwc2&rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Birthday Celebration",
      category: "special",
      price: 249,
      priceUnit: "per person (min 4 people)",
      discount: "Free flight for birthday person with 5+ guests",
      duration: "75 minutes",
      description:
        "Make your birthday or special occasion truly memorable with a hot air balloon adventure. Includes special celebration elements to mark your important day.",
      features: [
        "Customizable banner option (+$75)",
        "Birthday cake served post-flight",
        "Choice of morning or evening flights",
        "Group photo package",
        "Sparkling wine toast",
        "Birthday announcement during flight",
      ],
      recommended: false,
      image:
        "https://th.bing.com/th/id/OIP.6OABK_ftJOLovZSVGwgHQQHaEK?cb=iwc2&w=1366&h=768&rs=1&pid=ImgDetMain",
    },
    {
      id: 5,
      name: "Exclusive Private",
      category: "special",
      price: 1299,
      priceUnit: "for private balloon (up to 6 people)",
      discount: null,
      duration: "120 minutes",
      description:
        "The ultimate private experience with just your group and the pilot. Perfect for those seeking exclusivity or planning a very special occasion.",
      features: [
        "Private balloon for your group only",
        "Extended flight time",
        "Choice of available flight paths",
        "Premium champagne & gourmet basket",
        "Professional video & photography",
        "Luxury ground transportation",
        "Flight certificate in decorative frame",
      ],
      recommended: true,
      image:
        "https://th.bing.com/th/id/OIP.UpPs9K4jOWdOcURtKKU54AHaE7?cb=iwc2&w=4256&h=2832&rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      name: "Group Adventure",
      category: "students",
      price: 129,
      priceUnit: "per person (min 10 people)",
      discount: "Free organizer ticket with 15+ people",
      duration: "60 minutes",
      description:
        "Perfect for school groups, clubs, or organizations looking for a team experience. Special rates for larger groups make this an accessible adventure.",
      features: [
        "Ideal for school or university groups",
        "Educational commentary",
        "Group photos included",
        "Certificate of participation",
        "Flexible scheduling for groups",
        "Pre-flight STEM demonstration",
      ],
      recommended: false,
      image:
        "https://th.bing.com/th/id/OIP.LYnO-ap8Qh05FLjW-lRK0wHaEK?cb=iwc2&w=1460&h=820&rs=1&pid=ImgDetMain",
    },
  ];

  // Filter packages based on active tab
  const filteredPackages =
    activeTab === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === activeTab);

  // Toggle expanded package details
  const togglePackageDetails = (id) => {
    if (expandedPackage === id) {
      setExpandedPackage(null);
    } else {
      setExpandedPackage(id);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-64 md:h-80"
        style={{
          backgroundImage:
            "url('https://www.traveltips.com.tr/wp-content/uploads/hot-air-balloon-ride-cappadocia.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Our Balloon Packages
          </h1>
          <p className="text-xl text-white text-center max-w-2xl">
            Choose the perfect hot air balloon experience for your adventure
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <TabButton
              active={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              icon={<Info className="w-5 h-5" />}
            >
              All Packages
            </TabButton>
            <TabButton
              active={activeTab === "students"}
              onClick={() => setActiveTab("students")}
              icon={<GraduationCap className="w-5 h-5" />}
            >
              Student
            </TabButton>
            <TabButton
              active={activeTab === "family"}
              onClick={() => setActiveTab("family")}
              icon={<Users className="w-5 h-5" />}
            >
              Family
            </TabButton>
            <TabButton
              active={activeTab === "special"}
              onClick={() => setActiveTab("special")}
              icon={<Heart className="w-5 h-5" />}
            >
              Special Occasions
            </TabButton>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredPackages.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <p className="text-xl">No packages found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isExpanded={expandedPackage === pkg.id}
                  onToggleDetails={() => togglePackageDetails(pkg.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Balloon Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our friendly team is ready to help you choose the perfect package
            for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="#booking"
              className="bg-white hover:bg-gray-200 text-blue-800 px-8 py-3 rounded-full font-bold transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Tab Button Component
function TabButton({ children, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 mx-2 my-1 rounded-full font-medium transition-colors duration-300 ${
        active
          ? "bg-blue-800 text-white"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}

// Package Card Component
function PackageCard({ pkg, isExpanded, onToggleDetails }) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        pkg.recommended ? "ring-2 ring-yellow-500" : ""
      }`}
    >
      {/* Package Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        {pkg.recommended && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Popular Choice
          </div>
        )}
      </div>

      {/* Package Details */}
      <div className="p-6">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-blue-900">{pkg.name}</h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-800">${pkg.price}</p>
            <p className="text-sm text-gray-600">{pkg.priceUnit}</p>
          </div>
        </div>

        {/* Key Info */}
        <div className="flex flex-wrap mb-4">
          <div className="flex items-center mr-4 mb-2">
            <Clock className="w-4 h-4 text-blue-600 mr-1" />
            <span className="text-sm text-gray-700">{pkg.duration}</span>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-4 h-4 text-blue-600 mr-1" />
            <span className="text-sm text-gray-700">Scenic Locations</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{pkg.description}</p>

        {/* Discount if available */}
        {pkg.discount && (
          <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
            <p className="text-green-800 text-sm font-medium">{pkg.discount}</p>
          </div>
        )}

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-bold text-blue-900 mb-2">Package Includes:</h4>
            <ul className="space-y-2">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex flex-col space-y-3">
          <a
            href={`/book/${pkg.id}`}
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md w-full text-center transition-colors duration-300"
          >
            Book This Package
          </a>

          <button
            onClick={onToggleDetails}
            className="flex items-center justify-center text-blue-700 hover:text-blue-900 font-medium transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-5 h-5 ml-1" />
              </>
            ) : (
              <>
                <span>View Details</span>
                <ChevronDown className="w-5 h-5 ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
