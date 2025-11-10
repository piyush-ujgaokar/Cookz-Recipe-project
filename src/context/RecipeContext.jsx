import React, { createContext, useState } from 'react'

export const recipecontext=createContext(null)

const RecipeContext = (props) => {
    const [data, setData] = useState([])
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