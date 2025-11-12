import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {

   const {id,image,title,desc,chef}=props.recipe
    

  return (
    <Link to={`/recipes/details/${id}`} className='hover:scale-102 duration-100 w-[21vw] mr-5 mb-4 block rounded overflow-hidden'>
        <img className='p-1 w-full h-[15vw] object-cover overflow-hidden' src={image} alt="" />
        <h1 className='  mt-2 text-2xl font-medium'>{title}</h1>
        <small className='text-xl text-red-500'>{chef}</small>
        <p className='text-xl mt-1 '>
            {desc.slice(0,100)}...{" "}
            <small className='text-blue-500'>Show more</small>
        </p>
    </Link>
  )
}

export default RecipeCard