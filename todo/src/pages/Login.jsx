import React from 'react'
import { useState } from 'react'

function Login() {
  const [username, setusername] = useState('');
  const [pass, setpass] = useState('');


  return (
    <div className='h-screen w-screen flex'>
      <div className='transition h-4/6 mx-auto p-8 m-auto  border-2 w-4/5 rounded-lg shadow-lg shadow-pink-200 hover:shadow-2xl  hover:shadow-pink-300 lg:w-2/5 md:w-3/5 sm:w-3/5'>
        <input className='rounded-lg w-full border-2 p-3 text-2xl hover:shadow-xl mb-8 mt-12'
          type="text"
          value={username}
          name="pass"
          onChange={e => setusername(e.target.value)}
          placeholder="username"></input>
        <input className='rounded-lg w-full border-2 p-3 text-2xl hover:shadow-xl mb-8'
          type="text"
          value={pass}
          name="pass"
          onChange={e => setpass(e.target.value)}
          placeholder="password"></input>
        <button className='p-3 rounded-lg border-2 bg-green-500 w-full text-2xl mt-14  hover:shadow-xl'>sign-in</button>
      </div>
      


    </div>
  )
}

export default Login