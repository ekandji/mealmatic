//import {Camera, User, Settings, ChefHat, Clock, Users, Flame, Utensils, Wheat, Leaf} from "lucide-react";
import {ChefHat, Clock, Users, Flame, Utensils, Wheat, Leaf} from "lucide-react";
import ReactDOM from 'react-dom';
import React from 'react';

// Access Lucide icons from the global lucide object
//const { Camera, User, Settings, ChefHat, Clock, Users, Flame, Utensils, Wheat, Leaf } = lucide;


const MealOMatic = () => {
  const [currentPage, setCurrentPage] = React.useState('landing');

  const LandingPage = () => (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center items-center mb-8">
          <ChefHat size={48} className="text-green-600 mr-4"/>
          <h1 className="text-4xl font-bold text-gray-800">MealOMatic</h1>
        </div>
       
        <p className="text-xl text-gray-600 mb-8">
          Transform complex recipe websites into clean, easy-to-follow cooking guides
        </p>
       
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Paste your recipe URL here"
            className="w-full p-4 text-lg border-2 border-gray-300"
          />
         
          <button
            onClick={() => setCurrentPage('recipe')}
            className="w-full bg-green-600 hover:bg-green-700 text-white p-4 text-lg"
          >
            Parse My Recipe
          </button>
        </div>
       
        <div className="mt-8 text-sm text-gray-500">
          Supported sites: AllRecipes, Food Network, NYT Cooking, and more!
        </div>
      </div>
    </div>
  );

  const RecipePage = () => (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button
        onClick={() => setCurrentPage('landing')}
        className="mb-4 text-green-600 hover:underline"
      >
        ← Back to URL Input
      </button>
     
      <h1 className="text-3xl font-bold mb-6">Classic Chocolate Chip Cookies</h1>
     
      {/* Recipe Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded">
          <Clock className="text-green-600" />
          <div>
            <p className="font-semibold">Prep Time</p>
            <p>15 mins</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded">
          <Utensils className="text-green-600" />
          <div>
            <p className="font-semibold">Cook Time</p>
            <p>10 mins</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded">
          <Users className="text-green-600" />
          <div>
            <p className="font-semibold">Servings</p>
            <p>24</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded">
          <Leaf className="text-green-600" />
          <div>
            <p className="font-semibold">Diet</p>
            <p>Vegetarian</p>
          </div>
        </div>
      </div>
     
      {/* Ingredients */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {[
              "2 1/4 cups all-purpose flour",
              "1 tsp baking soda",
              "1 tsp salt",
              "1 cup butter, softened",
              "3/4 cup granulated sugar",
              "3/4 cup brown sugar",
              "1 tsp vanilla extract",
              "2 large eggs",
              "2 cups chocolate chips"
            ].map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 bg-gray-50 p-2 rounded"
              >
                <Wheat className="text-green-500 opacity-50" size={20} />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
       
        {/* Nutrition */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nutrition</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded text-center">
              <Flame className="mx-auto mb-2 text-green-600" />
              <p className="font-bold">150</p>
              <p className="text-sm text-gray-600">Calories</p>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <Users className="mx-auto mb-2 text-green-600" />
              <p className="font-bold">2g</p>
              <p className="text-sm text-gray-600">Protein</p>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <Wheat className="mx-auto mb-2 text-green-600" />
              <p className="font-bold">20g</p>
              <p className="text-sm text-gray-600">Carbs</p>
            </div>
            <div className="bg-gray-100 p-4 rounded text-center">
              <Flame className="mx-auto mb-2 text-green-600" />
              <p className="font-bold">7g</p>
              <p className="text-sm text-gray-600">Fat</p>
            </div>
          </div>
        </div>
      </div>
     
      {/* Instructions */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="space-y-4">
          {[
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a bowl.",
            "In another bowl, cream butter and sugars until light and fluffy.",
            "Beat in vanilla and eggs.",
            "Gradually blend in flour mixture.",
            "Stir in chocolate chips.",
            "Drop by rounded tablespoon onto ungreased baking sheets.",
            "Bake for 9 to 11 minutes or until golden brown.",
            "Cool on baking sheets for 2 minutes, then remove to wire racks."
          ].map((step, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded"
            >
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

  return (
    <div>
      {currentPage === 'landing' ? <LandingPage /> : <RecipePage />}
    </div>
  );
};

// Render the app
ReactDOM.render(<MealOMatic />, document.getElementById('root'));
