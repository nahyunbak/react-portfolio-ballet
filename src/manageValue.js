import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  title: '개발자 박나현',
    currentLanguage: 'korean',
    changableLanguage: '영어',
    menu1:'자기소개',
    menu2: '기술',
    menu3: '저장소',
    menu4: '개인 작업',
    menu5: '경력'
};



export const manageValue = createSlice({
  name: 'manager',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeToKorean: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
 
    state.title= '개발자 박나현';
    state.currentLanguage= 'korean';
    state.changableLanguage= '영어';
    state.menu1='자기소개';
    state.menu2= '기술';
    state.menu3= '저장소';
    state.menu4= '개인 작업';
    state.menu5= '경력';
    
    },
    changeToEnglish: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    state.title= 'DEVELOPER NAHYEON.BAK';
    state.currentLanguage= 'english';
    state.changableLanguage= 'KOREAN';
    state.menu1='ABOUT ME';
    state.menu2= 'SKILLS';
    state.menu3= 'ARCHIVE';
    state.menu4= 'PROJECTS';
    state.menu5= 'CAREER'
      
    },
  },

});

export const selectState = (state) => state.manager;

export const { changeToKorean, changeToEnglish } = manageValue.actions;


export default manageValue.reducer;
