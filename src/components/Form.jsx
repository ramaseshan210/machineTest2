// FormComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from './InputField';
import { resetForm, submitFormData } from '../features/form/formSlice';

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(submitFormData(form)); //apicall
    dispatch(resetForm());
  };

  return (
    <form onSubmit={handleSubmit} className='w-[400px] h-[400px] flex  flex-col  gap-4 justify-center items-center border border-white/25 rounded-xl'>
      <h1 className='flex justify-center'>Login</h1>
      {/* <InputField field='name' placeholder='Enter Name' style={{ display: 'block', marginBottom: 10 }} /> */}
      <div className='flex flex-col justify-center items-center '>
      <InputField field='email' type='email' placeholder='Enter Email'  label="label" />

      <InputField field='password' type='password' placeholder='Enter Password'  label="label" />
      </div>
    
      <button type='submit' className='border w-[80px] h-[40px] border-white/25 '>Submit</button>
    </form>
  );
};

export default Form;