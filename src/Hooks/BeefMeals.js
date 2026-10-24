const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"

 const beef= await fetch(Base_UI);
export const beefData =await beef.json();
 console.log(beefData.meals);