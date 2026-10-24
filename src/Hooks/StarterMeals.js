const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter"

 const starter= await fetch(Base_UI);
export const starterData =await starter.json();
 console.log(starterData.meals);