import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Users, MapPin, Camera, Star } from 'lucide-react';

// Main component that includes all sections
export default function ImprovedHomepage() {
  return (
    <div className="font-sans text-gray-800">
      <FeaturesSection />
      <BookingPreviewSection />
      <TestimonialsSection />
    </div>
  );
}

// Enhanced Features Section with animations and better icons
function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#19305a] mb-3">Why Choose SkyHigh Balloons?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience the beauty of flight with the region's premier hot air balloon adventure company.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Shield className="w-12 h-12 text-blue-600" />} 
            title="Safety First" 
            description="FAA certified pilots with thousands of flight hours and rigorous safety protocols"
          />
          <FeatureCard 
            icon={<Users className="w-12 h-12 text-blue-600" />} 
            title="Experienced Crew" 
            description="Our team has over 15 years of hot air balloon experience"
          />
          <FeatureCard 
            icon={<MapPin className="w-12 h-12 text-blue-600" />} 
            title="Stunning Locations" 
            description="Fly over breathtaking landscapes and picturesque scenery"
          />
          <FeatureCard 
            icon={<Camera className="w-12 h-12 text-blue-600" />} 
            title="Memorable Experience" 
            description="Champagne toast and flight certificate included with every adventure"
          />
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600 flex flex-col items-center text-center group hover:-translate-y-1 transform transition-transform">
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Enhanced Booking Preview Section with parallax effect
function BookingPreviewSection() {
  return (
    <section className="py-20 bg-cover bg-center relative" style={{
      backgroundImage: "url('/api/placeholder/1200/600')",
      backgroundAttachment: "fixed"
    }}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-xl max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#19305a] mb-4">Ready for Takeoff?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Book your balloon adventure today and create memories that will last a lifetime. Special packages available for couples, families, and private events.
          </p>
          <a href="/viewbooking" className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Services
          </a>
        </div>
      </div>
    </section>
  );
}

// Enhanced Testimonials Section with carousel functionality
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The most amazing experience of my life! Floating above the clouds was surreal and the views were absolutely breathtaking.",
      author: "Sarah M."
    },
    {
      quote: "Our pilot was knowledgeable and fun. The champagne toast at the end made the experience even more special.",
      author: "James T."
    },
    {
      quote: "I proposed to my girlfriend during our balloon flight and it was perfect! The crew helped make it extra special.",
      author: "Michael R."
    },
    {
      quote: "Worth every penny! The sunrise flight gave us incredible photo opportunities and memories to last a lifetime.",
      author: "Emily L."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#19305a] mb-3">What Our Adventurers Say</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="text-5xl text-yellow-400 absolute -top-6 left-6">"</div>
                <div className="mb-6 text-lg text-gray-600 italic pt-4">
                  {testimonials[currentIndex].quote}
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">{testimonials[currentIndex].author}</div>
                    <div className="text-sm text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-blue-800" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6 text-blue-800" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}