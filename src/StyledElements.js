import styled, {css} from "styled-components"

import { GiHamburgerMenu } from "react-icons/gi";
import { FaExchangeAlt } from "react-icons/fa";
export const Wrapper = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeaderWrapper = styled.div`
  width: 1800px;
  height: 200px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1800px) {
    width:100%;
    border-radius: 200px;

    background-color: #4a4a4a;
    padding: 40px;
    padding-left: 100px;

    
  } ;
  
`

export const TitleWrapper = styled.div`

  color: #4a4a4a;
  font-size: 6rem;
  font-weight: bold;
  margin-left: 50px;
  @media screen and (max-width: 1800px) {
    font-size: 4.5rem;
    color: white;
  };

  @media screen and (max-width: 760px) {
    font-size: 3.5rem;
    margin-left: 20px;
  };
`


export const LanguageToggleWrapper = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1800px) {
    display: none;
  };

`


export const LanguageType = styled.span`
  width: 100px;
  height: 30px;
  color: #4a4a4a;
  font-size: 2rem;
  margin-left: 10px;
  @media screen and (max-width: 1800px) {
    font-size: 1.7rem;
  };

  @media screen and (max-width: 700px) {
    display: none;
  };
`

const IconStyle = css`
font-size: 2.2rem;
margin-top: 5px;
@media screen and (max-width: 1800px) {
  font-size: 1.7rem;
};

@media screen and (max-width: 700px) {
  font-size: 1.5rem;
};
`

export const MenuWrapper = styled.div`
width: 100px;
height: 100px;
background-color: white;
margin-right: 100px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 6px solid #e6e6e6;

@media screen and (min-width: 1800px) {
    display: none;
  };

  @media screen and (max-width: 760px) {
    width: 80px;
    height: 80px;
    border: 4px solid #e6e6e6;

  };

`
export const MenuStyle = css`
font-size: 5rem;
@media screen and (max-width: 760px) {
  font-size: rem;

};
`
export const ExchangeIcon = styled(FaExchangeAlt)`
  ${IconStyle};
`

export const MenuIcon = styled(GiHamburgerMenu)`
  ${MenuStyle};
`


//Main 

export const MainWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1800px) {
    display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  } ;

  
`

export const ItemWrapper = styled.div`
  width: 400px;
  height: 800px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  filter: brightness(40%);
  transition: all 0.5s linear;
  &:hover{
    filter: brightness(100%);
    transform: scale(1.1);
    
  }

  @media screen and (max-width: 1800px) {
    width: 300px;
    height: 600px;
    margin-bottom: 150px;
    filter: brightness(40%);
  transition: all 0.5s linear;
  &:hover{
    filter: brightness(100%);
    transform: scale(1.1);
    
  }

  @media screen and (max-width: 963px) {
    margin-bottom: 150px;
    filter: brightness(40%);
  transition: all 0.5s linear;
  &:hover{
    filter: brightness(100%);
    transform: scale(1.1);
    
  }

  }
}
`

export const StyledImg = styled.img`
  width: 400px;
  height: 800px;
  



  
`

export const StyledTitle = styled.div`
  font-size: 2rem;
  color: #4a4a4a;
  &:hover{
    
  }
  
`




/*

import React from "react";
import Main from "./styleComponents/Main/index";

const App = () => {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <TitleWrapper>개발자 박나현</TitleWrapper>
          <LanguageToggleWrapper>
          //한국어면 
          <ExchangeIcon/>
          <LanguageType>한국어</LanguageType>
          
          </LanguageToggleWrapper>
        </HeaderWrapper>

        <MainWrapper>
          <ItemWrapper>
            <StyledImg />
            <StyledTitle>ABOUT ME</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg />
            <StyledTitle>SKILLS</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg />
            <StyledTitle>ARCHIVE</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg />
            <StyledTitle>PROJECTS</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg />
            <StyledTitle>CAREEER</StyledTitle>
          </ItemWrapper>
        </MainWrapper>
        
      </Wrapper>
    </>
  );
};

export default App;



*/