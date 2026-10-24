const Base_UI = "https://www.themealdb.com/api/json/v1/1/categories.php"

 const categories= await fetch(Base_UI);
export const categoriesData =await categories.json();
 