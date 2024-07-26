import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';


const LogIn = () => {
  const[form,setForm] = useState({});

  const handleFormChange = (event)=>{
    setForm({...form,
      [event.target.name] : event.target.value
    })
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(form.email);
    console.log(form.password);

    axios.get('http://localhost:4000/jap').then((response)=>{
      console.log(response);
    })
  }

  return (
    <>
      <div className='h-screen w-screen bg-gradient-to-r from-indigo-400 to-cyan-400'>
        <div className='flex flex-col max-w-[600px] p-4 m-auto h-screen justify-center'>
          <form onSubmit={handleFormSubmit} className='bg-white p-6 rounded-lg flex flex-col gap-6 items-center w-full'>
            <h1 className='text-4xl font-semibold'>Login</h1>
            <TextField type='email' name='email' value={form.email} required id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>handleFormChange(e)}/>
            <TextField type='password' name='password' value={form.password} required id="outlined-basic" label="Password" variant="outlined" className='w-full' onChange={(e)=>handleFormChange(e)}/>
            <Button type='submit' variant="contained">Login</Button>
          <div className=' w-full self-start flex justify-between gap-4'>
            <Link className='text-blue-500 text-decoration-line: underline' to={'/signUp'}>Sign Up</Link>
            <Link className='text-blue-500 text-decoration-line: underline' to={'/forgotpassword'}>Forgot Password?</Link>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn
