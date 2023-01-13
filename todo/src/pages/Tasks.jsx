import React, { useState } from 'react'

function Tasks() {
    // const [prority, setprority]=useState('high')
    // const [c,setc]=useState('');
    // if(prority=='high'){
    //     setc(' bg-red ')
    // }
  return (
    <div className='text-center border-2 mb-2 rounded-xl  w-full  '>
        <p className=' text-2xl'>Task Task Task Task Task Task Task </p>
        <p>Time</p>
        <p className='bg-green-500 m-2 rounded-xl p-2'>Prority</p>
    </div>
  )
}

export default Tasks