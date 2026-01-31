

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
   

     
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to Your Amazing Website
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Build something extraordinary with TypeScript, React, and Tailwind CSS
        </p>
        <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-50 transition">
          Get Started
        </button>
      </main>

    
      <section className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Fast</h3>
            <p>Optimized for speed and performance with modern frameworks.</p>
          </div>
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Responsive</h3>
            <p>Looks perfect on all devices, from mobile to desktop.</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
            <h3 className="text-2xl font-bold mb-4">Secure</h3>
            <p>Built with best practices to keep your data safe and private.</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
