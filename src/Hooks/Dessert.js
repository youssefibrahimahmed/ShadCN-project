const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"

 const dessert= await fetch(Base_UI);
export const dessertData =await dessert.json();
 console.log(dessertData.meals);