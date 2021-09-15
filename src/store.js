import { configureStore } from '@reduxjs/toolkit';
import manageValue from './manageValue';
//리듀서 함수 수정하기이 


export const store = configureStore({
  reducer: {
    manager: manageValue,
  },
});
