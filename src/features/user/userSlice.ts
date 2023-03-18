import { createSlice } from '@reduxjs/toolkit';

interface userState {
  email: string;
  password: string;

  // [key: string]: any;
}
const initialState: userState = {
  email: '',
  password: '',
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

    setValues: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setEmail, setPassword, setValues } = userSlice.actions;
export default userSlice.reducer;
