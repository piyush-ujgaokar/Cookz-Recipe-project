import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex gap-10 text-3xl mb-10 items-center justify-center'>
        <NavLink className={(e)=> e.isActive ? "text-red-500": ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500": ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500": ""} to="/about">About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500": ""} to="/create-recipe">
            Create Recipe
        </NavLink>
    </div>
  )
}

export default NavBar