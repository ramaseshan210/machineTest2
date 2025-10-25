import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../features/form/formSlice';

const InputField = ({field, type,placeholder,label}) => {
    const dispatch = useDispatch();
    // const value = useSelector(state => state.form[field]|| '');


    const handleChange = useCallback((e)=> {
        const val = e.target.value;

        dispatch(setField({field,value:val}))
    },[dispatch, field, type])
  

    return (
        <div className='flex w-[280px] h-12 justify-cente items-center  gap-2  '>
        {!label && <label className='w-full text-[12px] font-light   tracking-wide' for={field}>{field}</label>}
            

            <input
                className='h-[35px]  pl-2 rounded text-[12px] w-[200px] bg-[#111C2D] bg-opacity-90  border border-white/25 flex-auto'
                field={field}
                type={type}
                placeholder={placeholder} 
                onChange ={handleChange}/>
        </div>
    );
}

export default InputField;



