import { useQuery } from "@tanstack/react-query";

async function fetchDetelis(mealID) {
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);

    if(!response.ok){throw new Error("Faild To get Meal Details")}

    const data = await response.json();
    const meal =data.meals?.[0];

    if(!meal){throw new Error('faild to get meal details')}

    const ingredients = Array.from(
        {length:20},
        (_,index)=>{
            const name =meal[
                `strIngredient${index+1}`
            ]?.trim();

            const measure=meal[
                `strMeasure${index+1}`
            ]?.trim()

            if(!name) return null

            return {
                name,
                measure:measure||''
            };
        }
    ).filter(Boolean)
    

    return {
        id:meal.idMeal,
        name:meal.strMeal,
        image:meal.strMealThumb,
        category:meal.strCategory,
        country:meal.strCountry,
        area:meal.strArea,
        ingredients,
        instructions:meal.strInstructions,
        youtube:meal.strYoutube
    };
}

export function useMealDetails(mealID){
    return useQuery({
        queryKey:['mealDetails',mealID],
        queryFn:()=>fetchDetelis(mealID),
        enabled:false,
    });
}