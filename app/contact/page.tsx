


const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
    

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-20 pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md max-w-2xl">
          We'd love to hear from you! Fill out the form below and we will get back to you as soon as possible.
        </p>
      </main>

      {/* Contact Form Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Street Name, City, Country</p>
        </div>
      </section>

     
    </div>
  );
};

export default Contact;
