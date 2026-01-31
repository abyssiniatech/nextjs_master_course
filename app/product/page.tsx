
const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Pro App Template",
      description: "A fully responsive web template with React and Tailwind CSS.",
      price: "$49",
    },
    {
      id: 2,
      name: "E-commerce Dashboard",
      description: "Professional dashboard for your online store with analytics.",
      price: "$79",
    },
    {
      id: 3,
      name: "Portfolio Template",
      description: "Showcase your work with a modern portfolio template.",
      price: "$29",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-20 pt-24">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Our Products
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md max-w-2xl">
          Explore our range of professional templates and tools designed to help you build amazing web applications faster.
        </p>
      </main>

      {/* Products Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
            >
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="font-bold text-xl">{product.price}</p>
              <button className="mt-4 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default Products;
