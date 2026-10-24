const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork"

 const pork= await fetch(Base_UI);
export const porkData =await pork.json();
 console.log(porkData.meals);