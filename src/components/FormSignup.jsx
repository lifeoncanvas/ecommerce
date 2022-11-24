import React from 'react';
import axios from 'axios';
import validate from './validateInfo';
import useForm from '../Hooks/useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


//recieving submitForm through prop.
const FormSignup = ({ submitForm }) => {
  
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

   axios.post('http://localhost:80/api/', values);
   console.log(values);

  return (
    <>
    <Navbar/>
   <div className='form-container'>
       <div className='form-content-left'>
          <img className='form-img' src="https://i.pinimg.com/564x/3d/ed/9b/3ded9bb9bd572b85d0fea68cd06ca1aa.jpg" alt='spaceship' />
        </div>
      <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! 
          </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        <Link to='/login' className='linkbth' >
          button
        </Link>
        </button>
       
        <span className='form-input-login'>
        have an account?  <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
   </div>
   </>
  );
};

export default FormSignup;