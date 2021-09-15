import React, { useState } from "react";
import {
  AboutMeArea,
  AboutMeWrapper,
  ExchangeIcon,
  HeaderWrapper,
  InfoTitle,
  InfoTitleWrapper,
  InfoWrapper,
  ItemWrapper,
  LanguageToggleWrapper,
  LanguageType,
  MainWrapper,
  MenuIcon,
  MenuWrapper,
  MobileMenuItem,
  MobileMenuWrapper,
  ProfileBirth,
  ProfileDetail,
  ProfileName,
  ProfileText,
  ProfileTitle,
  ProfileWrapper,
  StyledImg,
  StyledTitle,
  TitleIconLeft,
  TitleIconRight,
  TitleWrapper,
  Wrapper,
} from "./StyledElements";
import aboutMe from "./img/aboutme.png";
import archive from "./img/archive2.png";
import career from "./img/career.png";
import projects from "./img/projects.png";
import skills from "./img/skills.png";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { changeToEnglish, changeToKorean, selectState } from "./manageValue";



const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1800px)" });
  const [value, setValue] = useState("false");
  const [lan, setLan] = useState("korean");
  const state = useSelector(selectState);
  const dispatch = useDispatch();

  const onClickValue = () => {
    setValue(!value);
  };

  const onClickLan = () => {
    if (lan === "korean") {
      setLan("english");
      dispatch(changeToEnglish());
    } else {
      setLan("korean");
      dispatch(changeToKorean());
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <TitleWrapper>{state.title}</TitleWrapper>
          <LanguageToggleWrapper onClick={onClickLan}>
            <ExchangeIcon />
            <LanguageType>{state.changableLanguage}</LanguageType>
          </LanguageToggleWrapper>
          <MenuWrapper onClick={onClickValue}>
            <MenuIcon />
          </MenuWrapper>
        </HeaderWrapper>
        <MobileMenuWrapper value={value}>
          <MobileMenuItem
            to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {state.menu1}
          </MobileMenuItem>
          <MobileMenuItem>{state.menu2}</MobileMenuItem>
          <MobileMenuItem>{state.menu3}</MobileMenuItem>
          <MobileMenuItem>{state.menu4}</MobileMenuItem>
          <MobileMenuItem>{state.menu5}</MobileMenuItem>
        </MobileMenuWrapper>
        <MainWrapper>
          <ItemWrapper name="aboutme">
            <StyledImg src={aboutMe} />
            <StyledTitle>{state.menu1}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src={career} />
            <StyledTitle>{state.menu2}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src={archive} />
            <StyledTitle>{state.menu3}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src={projects} />
            <StyledTitle>{state.menu4}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src={skills} />
            <StyledTitle>{state.menu5}</StyledTitle>
          </ItemWrapper>
        </MainWrapper>
        <InfoWrapper>
          <AboutMeWrapper>
       
              
              <InfoTitle><TitleIconLeft/>  {state.menu1} <TitleIconRight /></InfoTitle>
  
        
            <AboutMeArea>
              <ProfileWrapper>
              <ProfileName/>
              <ProfileText>
              <ProfileTitle>이름</ProfileTitle>
                <ProfileDetail>박나현</ProfileDetail>
              </ProfileText>
              </ProfileWrapper>
              <ProfileWrapper>
              <ProfileBirth/>
              <ProfileText>
              <ProfileTitle>생일</ProfileTitle>
                <ProfileDetail>1995.03.04</ProfileDetail>
              </ProfileText>
              </ProfileWrapper>
              
              
            </AboutMeArea>
          </AboutMeWrapper>
        </InfoWrapper>

        
      </Wrapper>
    </>
  );
};

export default App;
