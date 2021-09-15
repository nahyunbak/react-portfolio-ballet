import React, { useState } from "react";
import {
  AboutMeArea,
  AboutMeWrapper,
  ExchangeIcon,
  HeaderWrapper,
  InfoTitle,
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
  ProfileCall,
  ProfileDetail,
  ProfileLocation,
  ProfileMail,
  ProfileName,
  ProfileStudy,
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
          <ItemWrapper
          to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >
            <StyledImg src="../public/aboutme.png" />
            <StyledTitle>{state.menu1}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src="../public/career.png" />
            <StyledTitle>{state.menu2}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src="../public/archive2.png" />
            <StyledTitle>{state.menu3}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src="../public/projects.png" />
            <StyledTitle>{state.menu4}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper>
            <StyledImg src="../public/skills.png" />
            <StyledTitle>{state.menu5}</StyledTitle>
          </ItemWrapper>
        </MainWrapper>
        <InfoWrapper>
          <AboutMeWrapper name="aboutme">
            <InfoTitle>
              <TitleIconLeft /> {state.menu1} <TitleIconRight />
            </InfoTitle>

            <AboutMeArea>
              <ProfileWrapper>
                <ProfileName />
                <ProfileText>
                  <ProfileTitle>이름</ProfileTitle>
                  <ProfileDetail>박나현</ProfileDetail>
                </ProfileText>
              </ProfileWrapper>
              <ProfileWrapper>
                <ProfileBirth />
                <ProfileText>
                  <ProfileTitle>생일</ProfileTitle>
                  <ProfileDetail>1995.03.04</ProfileDetail>
                </ProfileText>
              </ProfileWrapper>
              <ProfileWrapper>
                <ProfileLocation />
                <ProfileText>
                  <ProfileTitle>주소지</ProfileTitle>
                  <ProfileDetail>경기도 안양시</ProfileDetail>
                </ProfileText>
              </ProfileWrapper>
              <ProfileWrapper>
                <ProfileCall />
                <ProfileText>
                  <ProfileTitle>연락처</ProfileTitle>
                  <ProfileDetail>010-9167-5977</ProfileDetail>
                </ProfileText>
              </ProfileWrapper>
              <ProfileWrapper>
                <ProfileMail />
                <ProfileText>
                  <ProfileTitle>이메일</ProfileTitle>
                  <ProfileDetail>nahyunbak@naver.com</ProfileDetail>
                </ProfileText>
              </ProfileWrapper>
              <ProfileWrapper>
                <ProfileStudy />
                <ProfileText>
                  <ProfileTitle>학력</ProfileTitle>
                  <ProfileDetail>경인교육대학교
                  <br/>
                  초등교육학과
                  </ProfileDetail>
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
