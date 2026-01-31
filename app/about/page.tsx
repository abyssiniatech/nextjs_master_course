

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
 

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-20 pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md max-w-2xl">
          We are passionate about creating amazing web experiences with modern technologies like TypeScript, React, and Tailwind CSS. Our mission is to empower developers and businesses worldwide.
        </p>
      </main>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To build beautiful, functional, and responsive web applications that delight users and drive business growth.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To become a global leader in web development by embracing innovation, creativity, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member" 
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member" 
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member" 
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Sarah Lee</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;
