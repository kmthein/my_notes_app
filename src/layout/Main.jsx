import React, { useContext } from 'react'
import InputForm from '../component/InputForm'
import Card from '../component/Card'
import { ContextData } from '../store/Context'

const Main = () => {
    const {blogs} = useContext(ContextData);

  return (
    <div className=' w-[80%] md:w-[70%] mx-auto py-2'>
        <h1 className='text-center text-[40px] text-pink-600 font-bold my-2'>My Notes</h1>
        <InputForm />
            {
                blogs.length == 0 && (
                <div className=' flex justify-center items-center h-[50vh]'>
                    <h1 className='text-2xl text-black/50'>No Task Added Yet.</h1>
                </div>
                )
            }
            {   
                blogs != [] &&
                blogs.map(blog => (
                    <Card blog={blog} key={blog.id} />
                ))
            }        
    </div>
  )
}

export default Main