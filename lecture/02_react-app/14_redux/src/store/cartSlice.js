/*
  1. 슬라이스
    1) 서로 관련 있는 상태(state)와 액션(action)을 하나로 묶은 조각(slice)입니다.
    2) 구성
      (1) 슬라이스 이름
        - 액션 타입의 prefix(접두어)가 됩니다. 
      (2) 초기 상태값
        - 슬라이스가 관리 하는 상태의 초기값입니다. 
        - 원시 타입(숫자, 문자열, 불리언), 객체 타입, 배열 타입, null/undefined 모두 사용할 수 있습니다. 
        - 일반적으로는 객체 타입의 사용을 권장합니다.
      (3) 리듀서
        - 리듀서 함수들을 등록하는 객체입니다. 
        - 상태 변경 함수(상태를 어떻게 변경할지 정의하는 함수)를 작성합니다. 
        - 여기에 정의하는 함수는 자동으로 액션 생성자가 됩니다. 
            키 : 함수명 (액션명 기반이 됨)
            값 : 리듀서 함수 (상태 변경 로직)
    3) createSlice() : 리덕스 툴킷에서 제공하는 액션 타입, 액션 생성자, 리듀서를 한 번에 생성하는 함수
*/

import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      existingItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// console.log(cartSlice);
console.log(cartSlice.actions);
export default cartSlice.reducer;
// cartSlice.js
export const {
  increaseQuantity: INCREASE_QUANTITY,
  decreaseQuantity: DECREASE_QUANTITY,
  removeFromCart,
} = cartSlice.actions;
