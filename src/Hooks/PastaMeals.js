const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta"

 const pasta= await fetch(Base_UI);
export const pastaData =await pasta.json();
 console.log(pastaData.meals);