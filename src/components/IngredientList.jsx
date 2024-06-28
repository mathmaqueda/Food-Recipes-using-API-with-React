import Ingredient from './Ingredient';

export default function IngredientList({isLoading, food}) {
    return(
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                food.extendedIngredients.map(ingredient =>
                    <Ingredient key={ingredient.id} ingredient={ingredient}/>
                )
            )}
        </div>
    );
}