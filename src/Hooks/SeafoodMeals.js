const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

 const seafood= await fetch(Base_UI);
export const seafoodData =await seafood.json();
 console.log(seafoodData.meals);