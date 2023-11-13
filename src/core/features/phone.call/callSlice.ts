import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CallState = {
  isCalling: boolean;
};

const initialState: CallState = {
  isCalling: false,
};

const callSlice = createSlice({
  name: 'call',
  initialState,
  reducers: {
    activate: (state, action: PayloadAction<PhoneState>) => {
      return { isCalling: true };
    },
    desactivate: (state) => {
      return initialState;
    },
  },
});

export default callSlice.reducer;
export const actions = callSlice.actions;
