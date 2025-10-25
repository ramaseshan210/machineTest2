// formSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const submitFormData = createAsyncThunk(
    
  'form/submitFormData',
  async (formData, thunkAPI) => {
    
    try {
        // console.log(formData,"hihi");
      const res = await fetch('https://machine-test-lgix.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        withCredentials:true,
        locked:false,
        
      });
    
      return await res.json();
    } catch (err) {
     
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState: {
    email:"",
    password:""
  },
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
     
    },
    resetForm: (state) => {
      Object.keys(state).forEach(key => state[key] = '');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.fulfilled, (state, action) => {
        state.response = action.payload;
      })
      .addCase(submitFormData.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const { setField, resetForm } = formSlice.actions;
export default formSlice.reducer;