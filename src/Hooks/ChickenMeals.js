const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken"

 const chicken= await fetch(Base_UI);
export const chickenData =await chicken.json();
 console.log(chickenData.meals);