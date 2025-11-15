import { use, useState } from "react";
import Plant from "./Plant";

const Plants = ({ plantsPromise }) => {
  const [visitedPlants, setVisitedPlants] = useState([]);

  const handleVisitedPlants = (plant) => {
    const newVisitedPlants = [...visitedPlants, plant];
    setVisitedPlants(newVisitedPlants);
  };

  const plantsData = use(plantsPromise);
  const plants = plantsData.plants;

  return (
    <div className="space-y-8">

      {/* 🌈 Fancy Stats Box */}
      <div
        className="flex justify-between items-center py-6 px-10
        bg-linear-to-r from-green-200 via-green-100 to-green-50
        rounded-3xl shadow-xl border border-green-300"
      >
        {/* Total Plants */}
        <div className="text-left">
          <h4 className="text-gray-600 font-semibold tracking-wider text-xs">
            TOTAL PLANTS
          </h4>
          <p className="text-5xl font-extrabold text-green-700 drop-shadow-md">
            {plants.length}
          </p>
          <div className="w-14 h-1 bg-green-500 mt-2 rounded-full"></div>
        </div>

        {/* Divider Line */}
        <div className="h-16 w-0.5 bg-green-400/60 rounded-full"></div>

        {/* Visited Plants */}
        <div className="text-right">
          <h4 className="text-gray-600 font-semibold tracking-wider text-xs">
            VISITED
          </h4>
          <p className="text-5xl font-extrabold text-green-700 drop-shadow-md">
            {visitedPlants.length}
          </p>
          <div className="w-14 h-1 bg-green-500 mt-2 rounded-full ml-auto"></div>
        </div>
      </div>

      {/* 🌿 Animated Visited Card List */}
      <ol className="flex gap-4 flex-wrap">
        {visitedPlants.map((plant) => (
          <div
            key={plant.id}
            className="flex items-center gap-3 p-4 bg-white rounded-2xl 
            shadow-lg border border-green-300 hover:scale-105 
            transition-all duration-300"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="w-12 h-12 rounded-xl object-cover border shadow"
            />
            <div>
              <h4 className="font-bold text-green-700">{plant.name}</h4>
              <p className="text-sm text-gray-500">{plant.category}</p>
            </div>
          </div>
        ))}
      </ol>

      {/* 🌱 Plants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            plant={plant}
            handleVisitedPlants={handleVisitedPlants}
          />
        ))}
      </div>
    </div>
  );
};

export default Plants;
