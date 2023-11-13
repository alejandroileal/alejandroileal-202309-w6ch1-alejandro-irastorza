import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type PhoneState = {
  phoneNumber: string;
};

const initialState: PhoneState = {
  phoneNumber: '',
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PhoneState>) => {
      return action.payload;
    },
    erase: (state) => {
      return initialState;
    },
  },
});

export default phoneSlice.reducer;
export const { add, erase } = phoneSlice.actions;
