const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan"

 const vegan= await fetch(Base_UI);
export const veganData =await vegan.json();
 console.log(veganData.meals);