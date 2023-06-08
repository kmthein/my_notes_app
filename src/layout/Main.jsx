import React, { useContext } from 'react'
import InputForm from '../component/InputForm'
import Card from '../component/Card'
import { useSelector } from 'react-redux'

const Main = () => {

  const tasks = useSelector(state => state.tasks);

  return (
    <div className=' w-[80%] md:w-[70%] mx-auto py-2'>
        <h1 className='text-center text-[40px] text-pink-600 font-bold my-2'>My Notes</h1>
        <InputForm />
            {
                tasks.length == 0 && (
                <div className=' flex justify-center items-center h-[50vh]'>
                    <h1 className='text-2xl text-black/50'>No Task Added Yet.</h1>
                </div>
                )
            }
            {   
                tasks != [] &&
                tasks.map(task => (
                    <Card task={task} key={task.id} />
                ))
            }        
    </div>
  )
}

export default Main