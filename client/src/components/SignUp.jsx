import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = form;

    console.log(name, email, password, confirmPassword);

    if (password !== confirmPassword) {
      toast.error('Password does not match')
      
    }
    else if(password.length < 6){
      toast.error('Password length should be more than 6');
    }
    else {

      axios.post('http://localhost:4000/signup', {
        name: name,
        email: email,
        password: password,
      }).then(response => {
        if(response.data.msg === 'User saved'){
          navigate('/home');
        }
        else if(response.data.msg === 'User exists'){
          toast.error('Email Id already exists')
        }
      }).catch(error=>{
        console.log(error);
      })
    }

  }

  return (
    <>
    <div><Toaster/></div>

      <div className='h-screen w-screen bg-gradient-to-r from-indigo-400 to-cyan-400'>
        <div className='flex flex-col max-w-[600px] p-4 m-auto h-screen justify-center'>
          <form onSubmit={handleFormSubmit} className='bg-white p-6 rounded-lg flex flex-col gap-6 items-center w-full'>
            <h1 className='text-4xl font-semibold'>Sign Up</h1>
            <TextField type='text' name='name' value={form.name} id="outlined-basic" label="Name" variant="outlined" className='w-full' onChange={(e) => handleFormChange(e)} />
            <TextField type='email' name='email' value={form.email} required id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e) => handleFormChange(e)} />
            <TextField type='password' name='password' value={form.password} required id="outlined-basic" label="Password" variant="outlined" className='w-full' onChange={(e) => handleFormChange(e)} />
            <TextField type='password' name='confirmPassword' value={form.confirmPassword} required id="outlined-basic" label="Confirm Password" variant="outlined" className='w-full' onChange={(e) => handleFormChange(e)} />
            <Button type='submit' variant="contained">Sign Up</Button>
            <div className=' w-full self-start flex justify-between gap-4'>
              <Link className='text-blue-500 text-decoration-line: underline' to={'/'}>Login</Link>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
