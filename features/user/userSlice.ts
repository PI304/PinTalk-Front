import { createSlice } from '@reduxjs/toolkit';

interface userState {
  name: string;
  password: string;
  [key: string]: any;
}
const initialState: userState = {
  name: '',
  password: '',
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setName: (state, action) => ({
      ...state,
      name: action.payload,
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

export const { setName, setPassword, setValues } = userSlice.actions;
export default userSlice.reducer;
