import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useToken from '../../Hooks/useToken';
import auth from '../../firebase.init';
import { Loading } from '../Loading/Loading';

const SignIn = ({ header }) => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  header(false)
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user)

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // Sign In with Email And Password 
  const handleSubmit = async e => {
    e.preventDefault()
    if (email.length !== 0 && password.length) {
      await signInWithEmailAndPassword(email, password)
    } else {
      toast.error('Email & Password is empaty.')
    }
  }

  if (token) {
    navigate(from, { replace: true });
    toast.success('User Login Successfullay');
  }

  useEffect(() => {
    if (hookError) {
      toast.error(hookError.message)
    }
  }, [hookError])

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Helmet>
        <title>Login | Rasel Ahmmed Web develoepr</title>
      </Helmet>

      <div className='md:p-20 bg-neutral h-screen'>
        <div className='md:w-2/6 sm:w-4/6 md:h-82 md:mx-auto flex flex-col justify-center bg-slate-100 border-2 rounded-3xl'>
          <div className='text-center my-8'>
            <h2 className='text-4xl text-success'>Rasel Ahmmed</h2>
            <p className='text-neutral'>Please login with your email and Password.</p>
          </div>

          <form className='sm:w-4/4 md:w-3/4 mx-auto mt-4' onSubmit={handleSubmit}>
            <input className='block w-full p-3 rounded-md text-md text-neutral' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input className='block w-full p-3 my-4 rounded-md text-md text-neutral' type="password" placeholder='Password' onBlur={(e) => setPassword(e.target.value)} />
            <button className='w-full bg-success p-3 mb-4 rounded-md text-md text-white'>Login</button>
            <p className='text-center mb-2'> <Link className='underline text-success' to='/reset-password'>Forget Password?</Link></p>

            <p className='text-center text-neutral mb-2'>Don't have Account? <Link className='underline text-success' to='/register'>Create an account.</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;