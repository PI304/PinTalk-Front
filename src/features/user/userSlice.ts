import { createSlice } from '@reduxjs/toolkit';
import { userState } from 'types/userState';

const initialState: userState = {
  email: '',
  password: '',
  codeValid: false,
  data: {},
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setEmail: (state, action) => ({
      ...state,
      email: action.payload,
    }),
    setPassword: (state, action) => ({
      ...state,
      password: action.payload,
    }),
    setCodeValid: (state, action) => ({
      ...state,
      codeValid: action.payload,
    }),
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setValues: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setEmail, setPassword, setValues, setCodeValid, setData } = userSlice.actions;
export default userSlice.reducer;
