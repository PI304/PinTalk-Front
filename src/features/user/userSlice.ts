import { createSlice } from '@reduxjs/toolkit';
import { userState } from 'types/userState';

const initialState: userState = {
  id: 0,
  email: '',
  password: '',
  codeValid: false,
  data: {
    accessKey: '',
    accessToken: '',
    createdAt: '',
    description: '',
    email: '',
    id: 0,
    isDeleted: false,
    profileImage: null,
    profileName: '',
    secretKey: '',
    serviceDomain: '',
    serviceExpl: '',
    serviceName: '',
    updatedAt: '',
    uuid: '',
  },
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setId: (state, action) => ({
      ...state,
      id: action.payload,
    }),
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

export const { setId, setEmail, setPassword, setValues, setCodeValid, setData } = userSlice.actions;
export default userSlice.reducer;
