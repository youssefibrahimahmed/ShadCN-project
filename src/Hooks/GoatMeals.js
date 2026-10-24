const Base_UI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat"

const goat = await fetch(Base_UI);
export const goatData = await goat.json();
console.log(goatData.meals);