const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegeterian"

 const vegeterian= await fetch(Base_UI);
export const vegeterianData =await vegeterian.json();
 console.log(vegeterianData.meals);