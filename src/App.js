// import axios from "axios";
// react router
import "./App.css";
import { Routes, BrowserRouter, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
//components
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";
import RecipeByCategory from "./components/RecipeByCategory";
function App() {
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFav = (meal) => {
    // alert(id)
    // Check if the meal is already in favorites
    const isMealInFavorites = favorites.some((fav) => fav.idMeal === meal.idMeal);
    setIsFavorite(!isFavorite);
    if (isMealInFavorites) {
      // If the meal is in favorites, remove it
      const updatedFavorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
      setFavorites(updatedFavorites);
    } else {
      // If it's not in favorites, add it
      setIsFavorite(true);
      setFavorites([...favorites, meal]);
    }
  };

  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="recipes"
            element={<Recipes favorites={favorites} handleAddToFav={handleAddToFav} isFavorite={isFavorite} />}
          ></Route>
          <Route path="recipe-details/:id" element={<RecipeDetails />}></Route>
          <Route path="favorites" element={<Favorites handleAddToFav={handleAddToFav} favorites={favorites} />}></Route>
          <Route path="recipes-by-category" element={<RecipeByCategory handleAddToFav={handleAddToFav} favorites={favorites} />}></Route>

        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
