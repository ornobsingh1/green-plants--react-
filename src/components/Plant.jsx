import { useState } from "react";

const Plant = ({ plant, handleVisitedPlants }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedPlants(plant);
  };

  const { name, image, category, description } = plant;

  return (
    <div
      className={`rounded-3xl shadow-xl overflow-hidden 
      transition-all duration-300 border backdrop-blur-sm
      ${visited ? "border-green-500 bg-green-100/60 scale-[1.03]" : "border-pink-300 bg-white"} 
      hover:shadow-2xl hover:scale-[1.03]`}
    >
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt="" className="h-72 w-full object-cover" />

        {/* Floating Badge */}
        <span
          className="absolute top-4 left-4 px-4 py-1 bg-white/70 
          backdrop-blur-md text-pink-700 font-semibold text-sm 
          rounded-full shadow"
        >
          {category}
        </span>
      </div>

      {/* Details */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

        <p className="text-gray-600 mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <button
          onClick={handleVisited}
          className={`w-full py-2 mt-4 font-semibold rounded-full shadow-md 
          transition-all duration-300 
          ${visited 
            ? "bg-green-600 text-white hover:bg-green-700" 
            : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          {visited ? "Visited 🌿" : "Mark as Visited"}
        </button>
      </div>
    </div>
  );
};

export default Plant;
