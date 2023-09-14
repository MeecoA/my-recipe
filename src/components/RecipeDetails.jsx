import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const [mealDetails, setMealDetails] = useState(null);
  const ingredients = [];
  const params = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + params.id,
    }).then((response) => {
      console.log(response);
      setMealDetails(response.data.meals[0]);
    });
  }, [params.id]);

  const getIngredients = () => {
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      if (mealDetails[ingredientKey] && mealDetails[measureKey]) {
        ingredients.push({
          ingredient: mealDetails[ingredientKey],
          measurement: mealDetails[measureKey],
        });
      }
    }
  };

  return (
    <>
      <div>
        {mealDetails ? (
          <div>
            <div className="hover-mouse-title">
              <div>Hover your mouse to scale</div>
            </div>
            <div className="details-card">
              <div className="meal-card" key={mealDetails.idMeal}>
                <div className="meal-img">
                  <img id="mealImg" src={mealDetails.strMealThumb} alt="" />
                </div>
                <div id="mealName">
                  <strong>{mealDetails.strMeal}</strong>
                </div>
                <div id="mealCategory">{mealDetails.strCategory}</div>
              </div>
              <div className="details-wrapper">
                <div className="ingredients-container">
                  {getIngredients()}
                  <h1>Ingredients & Measurements</h1>
                  {ingredients.map((item, index) => (
                    <li key={index}>
                      <strong>{item.ingredient}:</strong> {item.measurement}
                    </li>
                  ))}
                </div>
                <div className="instructions-container">
                  <h1>Instructions</h1>
                  <div className="instructions">{mealDetails.strInstructions} </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default RecipeDetails;
