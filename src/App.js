import React, { useState } from "react";
import {
  AboutMeArea,
  AboutMeWrapper,
  ArchiveArea,
  ArchiveImg,
  ArchiveItem,
  ArchiveLi,
  ArchiveLink,
  ArchiveP,
  ArchiveUl,
  ArchiveWrapper,
  CoverWrapper,
  DIV,
  ExchangeIcon,
  FlowerOne,
  FlowerTwo,
  HeaderWrapper,
  HrCover,
  InfoTitle,
  InfoWrapper,
  ItemWrapper,
  LanguageToggleWrapper,
  LanguageType,
  LineWrapper,
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
  SkillImg,
  SkillImgBack,
  SkillImgCertificate,
  SkillImgDeploy,
  SkillImgFront,
  SkillImgVersion,
  SkillItemArea,
  SkillItemTitle,
  SkillItemWrapper,
  SkillWrapper,
  StyledImg,
  StyledTitle,
  TitleIconLeft,
  TitleIconRight,
  TitleWrapper,
  TypoLine,
  TypoWrapper,
  Wrapper,
} from "./StyledElements";

import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { changeToEnglish, changeToKorean, selectState } from "./manageValue";
import { Parallax } from 'react-parallax';
import imgSrc from './img/aboutme.png';
import frontEnd from './img/frontend.png'
import backEnd from './img/backend.png'
import certificate from './img/certificate.png'
import version from './img/version.png'
import deployment from './img/deploy.png'
import github from './img/github.png'
import velog from './img/velog.png'

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
          <MobileMenuItem
          to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >{state.menu2}</MobileMenuItem>
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
            <StyledImg src={imgSrc} />
            <StyledTitle>{state.menu1}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper
          
          to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >
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
          <CoverWrapper>
          <HrCover/>
            <LineWrapper>
              <FlowerOne/>
              <FlowerTwo/>
              <FlowerOne/>
            </LineWrapper>
            <TypoWrapper>
            <TypoLine> 안녕하세요.</TypoLine>
            <TypoLine> 자바스크립트를 사랑하는 프론트엔드 개발자입니다. </TypoLine>
            <TypoLine> 빠른 손, 유창한 영어 구사력, 개발을 향한 무한한 애정이 제 장점입니다.</TypoLine>
            <TypoLine> 항상 어제보다 나은 개발자가 되고자 노력합니다.</TypoLine>
            <TypoLine> 인생을 전부 산 건 아니지만, 노력이 사람을 어디까지 바꿔놓을 수 있는지 알기 때문입니다.</TypoLine>
            </TypoWrapper>
            <LineWrapper>
              <FlowerOne/>
              <FlowerTwo/>
              <FlowerOne/>
            </LineWrapper>
          </CoverWrapper>
          <AboutMeWrapper name="aboutme">
            <InfoTitle>
              <TitleIconLeft /> {state.menu1} <TitleIconRight />
            </InfoTitle>
            <AboutMeArea >
              <ProfileWrapper>
                <ProfileName />
                <ProfileText>
                  <ProfileTitle >이름</ProfileTitle>
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
          <SkillWrapper name="skills">
          <InfoTitle>
              <TitleIconLeft /> {state.menu2} <TitleIconRight />
            </InfoTitle>
          <SkillItemArea>
          <SkillItemWrapper>
            <SkillItemTitle>Front-end</SkillItemTitle>
            <SkillImgFront src={frontEnd}/>
          </SkillItemWrapper>
          <SkillItemWrapper>
            <SkillItemTitle>Back-end</SkillItemTitle>
            <SkillImgBack src={backEnd}/>
          </SkillItemWrapper>
          <SkillItemWrapper>
            <SkillItemTitle>Version Control</SkillItemTitle>
            <SkillImgVersion src={version}/>
          </SkillItemWrapper>
          
          <SkillItemWrapper>
            <SkillItemTitle>Deployment</SkillItemTitle>
            <SkillImgDeploy src={deployment}/>
          </SkillItemWrapper>
          <SkillItemWrapper>
            <SkillItemTitle>Certificate</SkillItemTitle>
            <SkillImgCertificate src={certificate}/>
          </SkillItemWrapper>
     
          
          </SkillItemArea>
          
          
          
          </SkillWrapper>
          <ArchiveWrapper>
          <InfoTitle>
              <TitleIconLeft /> {state.menu3} <TitleIconRight />
            </InfoTitle>
          <ArchiveArea>
          <ArchiveItem>
          <ArchiveImg src={github}/>
          <ArchiveP> <strong>소스 코드 저장소</strong>입니다.</ArchiveP>
          <ArchiveLink href="https://github.com/nahyunbak/">https://github.com/nahyunbak/</ArchiveLink>
          <ArchiveUl>
          <ArchiveLi>✔ 개인 프로젝트를 기록하고 있습니다.</ArchiveLi>         
          <ArchiveLi>✔ 알고리즘을 연습하고 있습니다.</ArchiveLi>         
          <ArchiveLi>✔ 다양한 오픈소스 프로젝트에 참여할 계획을 세우고 있습니다.</ArchiveLi>         
          </ArchiveUl>
          </ArchiveItem>

          <ArchiveItem>
          <ArchiveImg src={velog}/>
          <ArchiveP> <strong>개인 공부용 블로그</strong>입니다.</ArchiveP>
          <ArchiveLink href="https://velog.io/@nahyunbak">https://velog.io/@nahyunbak</ArchiveLink>
          <ArchiveUl>
          <ArchiveLi>✔ 자바스크립트 중심의 개인 기술 블로그입니다.</ArchiveLi>         
          <ArchiveLi>✔ 책과 강의, 공식문서, 디버깅 회고록, 개인 프로젝트를 기록하고 있습니다.</ArchiveLi>               
          </ArchiveUl>
          </ArchiveItem>

          </ArchiveArea>
          
          </ArchiveWrapper>



        </InfoWrapper>
        
      
      </Wrapper>
    </>
  );
};

export default App;
