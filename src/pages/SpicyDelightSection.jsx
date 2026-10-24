import { categoriesData } from '@/Hooks/categories'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import '../index.css'
import { MealsCard } from '@/components/reusableComponents/MealsCard'
import { chickenData } from '@/Hooks/ChickenMeals'
import { beefData } from '@/Hooks/BeefMeals'
import { dessertData } from '@/Hooks/Dessert'
import { goatData } from '@/Hooks/GoatMeals'
import { vegeterianData } from '@/Hooks/VegeterianMeals'
import { pastaData } from '@/Hooks/PastaMeals'
import { porkData } from '@/Hooks/PorkMeals'
import { sideData } from '@/Hooks/SideMeals'
import { breakfastData } from '@/Hooks/BreakfastMeals'
import { lambData } from '@/Hooks/Lamb'
import { miscellaneousData } from '@/Hooks/MiscellaneousMeals'
import { seafoodData } from '@/Hooks/SeafoodMeals'
import { starterData } from '@/Hooks/StarterMeals'
import { veganData } from '@/Hooks/VeganMeals'
const SpicyDelightSection = ({ meal, id }) => {
  const [cat, setCategory] = useState('Beef')
  const categories = categoriesData.categories;
  const chickens = chickenData.meals
  const beefs = beefData.meals
  const desserts = dessertData.meals
  const goats = goatData.meals
  const vegeterians = vegeterianData.meals
  const pastas = pastaData.meals
  const porks = porkData.meals
  const sides = sideData.meals
  const breakfasts = breakfastData.meals
  const lambs = lambData.meals
  const miscellaneouss = miscellaneousData.meals
  const seafoods = seafoodData.meals
  const starters = starterData.meals
  const vegans = veganData.meals


  const mealsByCategory = {
    Chicken: chickens,
    Beef: beefs,
    Dessert: desserts,
    Goat: goats,
    Vegetarian: vegeterians,
    Pasta: pastas,
    Pork: porks,
    Side: sides,
    Breakfast: breakfasts,
    Lamb: lambs,
    Miscellaneous: miscellaneouss,
    Seafood: seafoods,
    Starter: starters,
    Vegan: vegans,
  };

  const meals = mealsByCategory[cat] ?? []

  console.log("Selected category:", cat);
  console.log("Meals:", mealsByCategory[cat]);
  console.table(
  Object.entries(mealsByCategory).map(([category, data]) => ({
    category,
    isArray: Array.isArray(data),
    count: Array.isArray(data) ? data.length : "Not an array",
  }))
);
  return (
    <section id={id} className="scroll-m-20 my-20 min-h-screen text-white">

      <p className='text-orange-600 text-center  text-lg font-semibold '>SPICY DELIGHTS</p>
      <p className=' text-center text-4xl lg:text-5xl font-extrabold mt-5 '>Our Fiery  <span className='coloring'>Menu</span></p>
      <p className='text-center my-5 text-gray-500 font-normal text-xl '>Dare to taste the heat? Choose your spice level wisely!</p>
      <div className="categories flex-wrap flex gap-2 justify-center">

        {categories.map((category) => (
          <Button
            key={category.strCategory}
            onClick={() => setCategory(category.strCategory)}
            variant="secondary"

            className={`
              rounded-full p-4 border-2  border-orange-800
            transition duration-300 
             hover:-translate-y-1
            ${cat === category.strCategory ?
                'coloringBg'
                :
                'hover:border-orange-500 hover:text-orange-600 hover:bg-[#370000] bg-[#250000] text-gray-500'
              }
            
            `}>
            {category.strCategory}
          </Button>
        ))}
      </div>
      <div className="meals mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] justify-center items-center mx-auto gap-6 ">
        {meals.slice(0, 18).map((meal, index) => (
          <MealsCard
            name={meal.strMeal}
            key={meal.idMeal}
            country={meal.strCountry}
            img={meal.strMealThumb}
            price={`${(index + 1) * 50} EGP`}
            category={cat}
            city={meal.strArea ?? 'Cairo'}
            id={meal.idMeal}
          />

        ))}

      </div>
    </section>
  )
}

export default SpicyDelightSection











// {cAtegories.map((cat) => (
//   <h1>{cat.strCategory}</h1>
// ))}