import {useEffect, useState} from 'react';
import IngredientList from './IngredientList';
import styles from './fooddetails.module.css';

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "4b2b65ddd390447094f0d8c3f2627480";
    useEffect(() => {
        async function fetchRecipe() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchRecipe();
    }, [foodId]);
    return(
        <div className={styles.recipeCard}>
            <div>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image}/>
            </div>
            <div className={styles.recipeDetails}>
                <span>
                    <strong>⏲️{food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                    <strong>👨🏻‍👩🏾‍🧒🏼‍👧🏽 Serves {food.servings}</strong>
                </span>
                <span><strong>{food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}</strong></span>
                <span><strong>{food.vegan ? "🐮 Vegan" : ""}</strong></span>
            </div>
            <div>
                <span><strong>$ {(food.pricePerServing / 100).toFixed(2)} Per Serving</strong></span>
            </div>
            <div>
                <h2>Ingredients</h2>
                <IngredientList isLoading={isLoading} food={food}/>
            </div>
            <div>
                <h2>Instructions</h2>
                <div className={styles.recipeInstructions}>
                    <ol>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            food.analyzedInstructions[0].steps.map(step =>
                                <li key={step.number}>{step.step}</li>
                            )
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}