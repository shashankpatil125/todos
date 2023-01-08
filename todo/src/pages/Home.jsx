import React from 'react'

function Home() {
  return (
    <div className='h-screen f-screen'>
      <div className='p-10'>
        <p className=' text-6xl'>TASKS</p>
      </div>
      <button className='p-3 rounded-lg border-2 bg-green-500 w-40 ml-10 text-2xl  hover:shadow-xl'>Add Task</button>
    </div>
  )
}

export default Home 