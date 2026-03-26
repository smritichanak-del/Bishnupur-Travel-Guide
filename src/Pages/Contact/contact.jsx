import Nav from "../../Components/navbar";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <Nav />
      
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-700">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-2">
          Journey through Bishnupur’s majestic temples and the enduring beauty of its architectural heritage.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-lg">
        
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We assist travelers in exploring Bishnupur’s renowned terracotta temples, historic monuments, and rich artistic traditions. 
            Connect with us for expert travel guidance and cultural insights.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Bishnupur, Bankura, West Bengal</p>
            <p>📞 03211244615</p>
            <p>✉️ SS@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
