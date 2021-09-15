
import React, {useState, useEffect} from "react";
import { ExchangeIcon, HeaderWrapper, ItemWrapper, KoreanTitleWrapper, LanguageToggleWrapper, LanguageType, MainWrapper, MenuIcon, MenuWrapper, MobileMenuItem, MobileMenuWrapper, StyledImg, StyledTitle, TitleWrapper, Wrapper } from "./StyledElements";
import aboutMe from './img/aboutme.png';
import archive from './img/archive2.png';
import  career from './img/career.png';
import projects from './img/projects.png';
import skills from './img/skills.png';
import { useMediaQuery } from 'react-responsive'
import { animateScroll as scroll } from 'react-scroll';



const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1800px)' })
  const [value, setValue] = useState(false);
  const [lan, setLan]= useState('korean');
  const onClickValue = ()=>{
    setValue(!value);
    console.log(value)
  }

  const onClickLan = ()=>{
    setLan(!lan);
    console.log(lan)
  }

  return (
    <>
      <Wrapper>
        
        <HeaderWrapper>
          <TitleWrapper >개발자 박나현</TitleWrapper>
          <LanguageToggleWrapper  onClick={onClickLan}>
          <ExchangeIcon/>
          <LanguageType>한국어</LanguageType>
          </LanguageToggleWrapper>
          <MenuWrapper onClick={onClickValue}><MenuIcon/></MenuWrapper>
        </HeaderWrapper>
        <MobileMenuWrapper value={value}>
        <MobileMenuItem to="aboutme" spy={true} smooth={true} offset={0} duration={500}>ABOUT ME</MobileMenuItem>
        <MobileMenuItem>SKILLS</MobileMenuItem>
        <MobileMenuItem>ARCHIVE</MobileMenuItem>
        <MobileMenuItem>PROJECTS</MobileMenuItem>
        <MobileMenuItem>CAREEER</MobileMenuItem>
        </MobileMenuWrapper>
        <MainWrapper>
          <ItemWrapper name="aboutme">
            <StyledImg src = {aboutMe} />
            <StyledTitle>{lan==='korean'?'자기소개':'ABOUT ME'}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {career}/>
            <StyledTitle>{lan==='korean'?'기술':'SKILLS'}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {archive}/>
            <StyledTitle>{lan==='korean'?'저장소':'ARCHIVE'}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {projects}/>
            <StyledTitle>{lan==='korean'?'포트폴리오':'PROJECTS'}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper >
            <StyledImg src = {skills}/>
            <StyledTitle>{lan==='korean'?'경력':'CAREER'}</StyledTitle>
          </ItemWrapper>
        </MainWrapper>
        
      </Wrapper>
    </>
  );
};

export default App;

