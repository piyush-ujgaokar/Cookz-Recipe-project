import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipecontext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const {data,setData}=useContext(recipecontext)
    const navigate=useNavigate()
    const {register, handleSubmit, reset}=useForm()

    const SubmitHandler=(recipe)=>{
        recipe.id=nanoid()
        console.log(recipe);
        
        // const copyData=[...data]
        // copyData.push(recipe)
        // setData(copyData)

        setData([...data,recipe])
        toast.success("New recipe created !")
        navigate("/recipes")

        reset()
        
    }

  return (
    <div className='px-20'>
        <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col w-[30%] gap-3'>
            <input className='border-b outline-none p-2' {...register('image')} type="url" placeholder='Image Url' />
             <small className='text-sm text-red-400'>This is the error</small>

            <input className='border-b outline-none p-2' {...register('title')} type="text" placeholder='Recipe Title' />
            <input className='border-b outline-none p-2' {...register('chef')} type="text" placeholder='Chef Name' />

            <textarea className='border-b outline-none p-2' {...register('desc')} placeholder='//Start From here'></textarea>

            <textarea className='border-b outline-none p-2' {...register('ingr')} placeholder='//write Ingredients seperated by comma(,)'></textarea>

            <textarea className='border-b outline-none p-2' {...register('inst')} placeholder='//write Instructions seperated by comma(,)'></textarea>

            <select className=' border-b outline-none ' {...register('categories')}>
            <option className='text-gray-500' value="breakfast">Breakfast</option>
            <option className='text-gray-500' value="dinner">Dinner</option>
            <option className='text-gray-500' value="lunch">Lunch</option>
            <option className='text-gray-500' value="supper">Supper</option>
            </select>

            <button className='px-4 py-2 rounded-lg cursor-pointer mt-5 bg-gray-900 block'>Create Recipe</button>

        </form>
    </div>
  )
}

export default Create