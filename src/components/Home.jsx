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

const Home = () => {

  const randomurl = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: randomurl,
    }).then((response) => {
      console.log(response.data);
      setMeal(response.data.meals[0]);
    });
  }, []);

  return (
    <div className="typewriter">
      <div>
        <Tooltip title="credits to the owner of the logo hehe.." placement="top">
          <img id="mainLogo" src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png" alt="" />
        </Tooltip>
      </div>
      <h1>Welcome to ReciPeeks</h1>
      <h2>
        Taste
        <Tooltip title="WTH? Where's The Food?">
          <span style={{ color: "orange" }}>food</span>
        </Tooltip>
        around the
        <Tooltip title="Site developed by: Meeco Arcilla" placement="right">
          <span style={{ color: "blue" }}> Globe</span>.
        </Tooltip>
      </h2>
      <div></div>
      <div><h3>TRY IT OUT!</h3></div>
      <div>
      
      <div className="meal-card" key={meal.idMeal}>
                  <div className="meal-img">
                    <img id="mealImg" src={meal.strMealThumb} alt="" />
                  </div>
                  <div id="mealName" className="mealNameRecipe">
                  {meal.strMeal}
                  </div>
                  <div className="btn-container-recipe">
                    <Tooltip title="Go to Recipe" placement="right">
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
      </div>
    </div>
  );
};

export default Home;
