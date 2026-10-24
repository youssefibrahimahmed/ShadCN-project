const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb"

 const lamb= await fetch(Base_UI);
export const lambData =await lamb.json();
 console.log(lambData.meals);