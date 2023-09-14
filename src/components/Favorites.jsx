import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Tooltip from "@mui/material/Tooltip";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Favorites = ({ favorites, handleAddToFav }) => {
  return (
    <div className="fave-container">
      {favorites.length > 0 ? (
        <div className="meals-container">
          {favorites &&
            favorites.map((meal) => {
              return (
                <div className="meal-card fav-card" key={meal.idMeal}>
                  <div className="meal-img">
                    <img id="mealImg" src={meal.strMealThumb} alt="" />
                  </div>
                  <div id="mealName">
                    <strong>{meal.strMeal}</strong>
                  </div>
                  <div className="btn-container-fav">
                    <Tooltip title="Go to Recipe">
                      <Link className="btn-go-to-recipe" to={`/recipe-details/${meal.idMeal}`}>
                        <Button variant="outlined">
                          <RestaurantMenuIcon />
                        </Button>
                      </Link>
                    </Tooltip>
                    <Tooltip title="Remove from favorites" placement="right">
                      <RemoveCircleIcon
                        className="remove-icon"
                        onClick={() => {
                          handleAddToFav(meal);
                        }}
                      ></RemoveCircleIcon>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div>
          <h1>You don't have favorites.</h1>
          <div className="link-add">
            <Link to="/recipes">Click to Add</Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Favorites;
