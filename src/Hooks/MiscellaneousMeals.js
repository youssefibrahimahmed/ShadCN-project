const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous"

 const miscellaneous= await fetch(Base_UI);
export const miscellaneousData =await miscellaneous.json();
 console.log(miscellaneousData.meals);