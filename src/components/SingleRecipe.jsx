import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from './../context/RecipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {

  const navigate=useNavigate()
  const {data,setData}=useContext(recipecontext)
  
  const params=useParams()
  const recipe=data.find(recipe => params.id == recipe.id)

  const deleteHandler=()=>{
    const filterData=data.filter(r=>r.id != params.id )
    setData(filterData)
    toast.error("Recipe Deleted Successfully")
    navigate('/recipes')
  }


    const {register, handleSubmit, reset}=useForm({defaultValues:{
      title:recipe.title,
      chef:recipe.chef,
      image:recipe.image,
      desc:recipe.desc,
      catrgory:recipe.category,
      ingr:recipe.ingredients,
      inst:recipe.instruction
    }})

    const updateHandler=(recipe)=>{

      const index=data.findIndex((recipe)=> params.id == recipe.id)
      const copydata=[...data]
      copydata[index]={...copydata[index], ...recipe}
      setData(copydata)
      toast.success('Recipe Updated !')

     }


  

  return recipe ? (
    <div className='w-full flex '>
        <div className='left  w-1/2 px-10'>
               <h1 className='text-5xl font-bold'>{recipe.title}</h1>
               <img className='h-[25vw] mt-5' src={recipe.image} alt="" />
               <h3 className='text-2xl mt-2'>{recipe.chef}</h3>
               <p className='mt-5 text-xl font-medium text-gray-400'>{recipe.desc}</p>
        </div>


            <form onSubmit={handleSubmit(updateHandler)} className='flex flex-col w-[30%] gap-3'>
            <input className='border-b outline-none p-2' {...register('image')}  type="url" placeholder='Image Url' />
             <small className='text-sm text-red-400'>This is the error</small>

            <input className='border-b outline-none p-2' {...register('title')}  type="text" placeholder='Recipe Title' />
            <input className='border-b outline-none p-2' {...register('chef')}  type="text" placeholder='Chef Name' />

            <textarea className='border-b outline-none p-2' {...register('desc')} placeholder='//Start From here'></textarea>

            <textarea className='border-b outline-none p-2' {...register('ingr')} placeholder='//write Ingredients seperated by comma(,)'></textarea>

            <textarea className='border-b outline-none p-2' {...register('inst')} placeholder='//write Instructions seperated by comma(,)'></textarea>

            <select className=' border-b outline-none ' {...register('categories')}>
            <option className='text-gray-500' value="breakfast">Breakfast</option>
            <option className='text-gray-500' value="dinner">Dinner</option>
            <option className='text-gray-500' value="lunch">Lunch</option>
            <option className='text-gray-500' value="supper">Supper</option>
            </select>

            <div className='flex w-full gap-30'>
                   <button className='px-10 tracking-wider py-2  rounded-lg cursor-pointer mt-5 bg-blue-900 block'>Update</button>
                  <button onClick={deleteHandler} className='px-10 tracking-wider py-2 rounded-lg cursor-pointer mt-5 bg-red-900 block'>Delete</button>
            </div>

            </form>

       
    </div>
  ):(
    "Loading....."
  );
}

export default SingleRecipe