import React from 'react';
import validate from './validateInfo';
import useForm from '../Hooks/useForm';
import './Form.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


//recieving submitForm through prop.
const FormSuccess = ({ submitForm }) => {
  
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
    <Navbar/>
    <div className='form-container'>
       <div className='form-content-left'>
          <img className='form-img' src="https://i.pinimg.com/564x/23/3a/23/233a23f87f7a6284e84ddaa486526a6c.jpg" alt='spaceship' />
        </div>
      <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! 
          </h1>
      
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
       
       <button className='form-input-btn' type='submit'>
       <Link to='/' className='linkbth'>
        butthon
       </Link>
       </button >
      
       <span className='form-input-login'>
        have an account?  <Link to='/signup'>Register</Link>
        </span>
        
        {/* <span className='form-input-login'>
         <button onClick={submitForm()}> Dont have an account? Register</button>
        </span> */}
      </form>
    </div>
    </div>
    </>
  );
};

export default FormSuccess;