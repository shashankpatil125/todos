
import React, { useState } from 'react'
import Tasks from './Tasks'
import axios from 'axios'
function Home() {

  const [task, settask]=useState('')


  axios.post('https://3001-shashankpatil125-todos-paxtchihm6l.ws-us82.gitpod.io/tasks', {
    task: "eat water",
    id: "4",
    prority: "2"
  });


  axios
  .get("https://3001-shashankpatil125-todos-paxtchihm6l.ws-us82.gitpod.io/taskss")
  .then(function (response) {
    console.log(response.data);
  });

  return (
    <div className='h-screen f-screen'>
      <div className='p-10'>
        <p className=' text-6xl'>TASKS</p>
      </div>
      <input className='rounded-lg w-5/6 ml-10  border-2 p-3 text-2xl hover:shadow-xl mb-5 mt-5 sm:ml-10  md:ml-5 md:w-4/6 lg:ml-5 lg:w-4/6'
          type="text"
          value={task}
          name="pass"
          onChange={e => settask(e.target.value)}
          placeholder="username"></input>
      <button className='p-3 rounded-lg border-2 bg-green-500 w-40 ml-10 text-2xl  hover:shadow-xl'>Add Task</button>
      <div className='w-full h-fit  py-10 sm: px-10 sm:grid sm:grid-cols-4 sm:gap-2'>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      </div>
      
    </div>
  )
}

export default Home 