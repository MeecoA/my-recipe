import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import GradeIcon from "@mui/icons-material/Grade";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Tooltip from "@mui/material/Tooltip";

const RecipeByCategory = ({favorites, handleAddToFav,}) => {

  const [meals, setMeals] = useState([]);
  const [category, setCategory] = useState("Seafood");
  const [categories, setCategories] = useState([]);

  const categoryUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category,
    }).then((response) => {
      setMeals(response.data.meals);
    });
  }, [category]);

  useEffect(() => {
    axios({
      method: "GET",
      url: categoryUrl,
    }).then((response) => {
      console.log(response.data);
      setCategories(response.data.meals);
    });
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

    return(
        <>
        <div>
        <div className="select-container">
          <Box sx={{ minWidth: 120 }}>
            <FormControl>
              <InputLabel id="country-label">Select Category</InputLabel>
              <Select
                label="Country"
                labelId="country-label"
                onChange={handleChange}
                id="country-select"
                defaultValue={category}
                value={category}
              >
                {categories.map((item) => {
                  return (
                    <MenuItem value={item.strCategory} key={item.strCategory}>
                      {item.strCategory}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="meals-container">
          {meals &&
            meals.map((meal) => {
              return (
                <div className="meal-card" key={meal.idMeal}>
                  <div className="meal-img">
                    <img id="mealImg" src={meal.strMealThumb} alt="" />
                  </div>
                  <div id="mealName" className="mealNameRecipe">
                    <strong>{meal.strMeal}</strong>
                    <Tooltip
                      title={
                        favorites.some((fav) => fav.idMeal === meal.idMeal) ? "Remove to Favorites" : "Add to Favorites"
                      }
                      placement="right-start"
                    >
                      <GradeIcon
                        style={{
                          color: favorites.some((fav) => fav.idMeal === meal.idMeal) ? "orange" : "black",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleAddToFav(meal);
                        }}
                      />
                    </Tooltip>
                  </div>
                  <div className="btn-container-recipe">
                    <Tooltip title="Go to Recipe">
                      <Link to={`/recipe-details/${meal.idMeal}`}>
                        <Button variant="outlined">
                          <div className="go-to-link">
                            <RestaurantMenuIcon />
                          </div>
                        </Button>
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
        </>
    )
}

export default RecipeByCategory