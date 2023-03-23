import { createSlice } from '@reduxjs/toolkit';

interface userState {
  email: string;
  password: string;
  data: {};
  // [key: string]: any;
}
const initialState: userState = {
  email: '',
  password: '',
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

export const { setEmail, setPassword, setValues, setData } = userSlice.actions;
export default userSlice.reducer;
