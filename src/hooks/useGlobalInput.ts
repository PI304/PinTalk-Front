import { useState } from 'react';
import { setValues } from '@features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@features/hooks';

export default function useGlobalInput(initialValue = '', key: string) {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
    dispatch(setValues({ [key]: value }));
  };
  return { value, onChange };
}
