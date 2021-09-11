
import React from "react";
import { ExchangeIcon, HeaderWrapper, ItemWrapper, KoreanTitleWrapper, LanguageToggleWrapper, LanguageType, MainWrapper, MenuIcon, MenuWrapper, StyledImg, StyledTitle, TitleWrapper, Wrapper } from "./StyledElements";
import aboutMe from './img/aboutme.png';
import archive from './img/archive2.png';
import  career from './img/career.png';
import projects from './img/projects.png';
import skills from './img/skills.png';
import { useMediaQuery } from 'react-responsive'



const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1800px)' })

  return (
    <>
      <Wrapper>
        
        <HeaderWrapper>
          <TitleWrapper>개발자  박나현</TitleWrapper>
          <LanguageToggleWrapper>
          <ExchangeIcon/>
          <LanguageType>한국어</LanguageType>
          
          
          </LanguageToggleWrapper>
          <MenuWrapper><MenuIcon/></MenuWrapper>
          
        </HeaderWrapper>

        <MainWrapper>
          <ItemWrapper>
            <StyledImg src = {aboutMe} />
            <StyledTitle>ABOUT ME</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {career}/>
            <StyledTitle>SKILLS</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {archive}/>
            <StyledTitle>ARCHIVE</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {projects}/>
            <StyledTitle>PROJECTS</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {skills}/>
            <StyledTitle>CAREEER</StyledTitle>
          </ItemWrapper>
        </MainWrapper>
        
      </Wrapper>
    </>
  );
};

export default App;

