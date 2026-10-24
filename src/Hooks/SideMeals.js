const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side"

 const side= await fetch(Base_UI);
export const sideData =await side.json();
 console.log(sideData.meals);