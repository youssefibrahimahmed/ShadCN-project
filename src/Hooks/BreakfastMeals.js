const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"

 const breakfast= await fetch(Base_UI);
export const breakfastData =await breakfast.json();
 console.log(breakfastData.meals);