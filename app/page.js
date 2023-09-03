"use client"
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, {title, desc}]);
    setTitle("");
    setDesc("");
  }

  const delete_handler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2 className='font-bold text-center text-2xl'>No Task Available</h2>

  if(mainTask.length > 0){
    renderTask = mainTask.map((t, i) => {
      return(
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-x1 font-semibold'>{t.title}</h5>
          <h5 className='text-lg font-medium'>{t.desc}</h5>
          </div>
          <button 
          onClick={()=>{
            delete_handler(i)
          }}
          className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      );
    })
  }

  return (
    <>
     <h1 className='bg-black text-white p-5 text-5xl text-center'>Abhijit's ToDoList</h1>
     <form onSubmit={submitHandler} class="form">
      <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
      placeholder='Enter Title Here'
      value={title}
      onChange={(e) => {
        setTitle(e.target.value)
      }}
      />

      <input type='text' className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2 '
      placeholder='Enter Task Here'
      value={desc}
      onChange={(e) => {
        setDesc(e.target.value)
      }}
      />

      <button className='bg-black text-white px-4 py-2 font-bold rounded m-5'>Add Task</button>
     </form>
     <hr />
     <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
     </div>
    </>
  )
}

export default Page
