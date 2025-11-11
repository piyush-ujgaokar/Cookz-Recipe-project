import React, { createContext, useState } from 'react'

export const recipecontext=createContext(null)

const RecipeContext = (props) => {
    const [data, setData] = useState([

        {
  id: 1,
  title: "Classic Margherita Pizza",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
  ],
  instruction: [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],
  image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  chef:"Piyush ujgaokar",
  category:"Dinner",
  desc:"Pizza is a beloved Italian dish made with a crispy, golden crust topped with rich tomato sauce and melted cheese.     Perfect for parties, casual dinners, or late-night cravings, pizza never disappoints."
}
    ])


    console.log(data);
    
  return (
    <div>
        <recipecontext.Provider value={{data,setData}}>
            {props.children}
        </recipecontext.Provider>
    </div>
  )
}

export default RecipeContext