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
  CareerArea,
  CareerAreaHr,
  CareerDetail,
  CareerDetailHr,
  CareerDetailItem,
  CareerImg,
  CareerImgArea,
  CareerJob,
  CareerLine,
  CareerName,
  CareerPeriod,
  CareerText,
  CareerWrapper,
  CoverWrapper,
  DIV,
  ExchangeIcon,
  FlowerOne,
  FlowerTwo,
  FooterArea,
  FooterFacebook,
  FooterGitHub,
  FooterImgWrapper,
  FooterLink,
  FooterLinkedIn,
  FooterText,
  FooterWrapper,
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
  ProjectArea,
  ProjectArrowWrapper,
  ProjectContentsArea,
  ProjectHr,
  ProjectImg,
  ProjectImgArea,
  ProjectImgNumbers,
  ProjectInfoArea,
  ProjectInfoDetail,
  ProjectInfoDetailURL,
  ProjectInfoItem,
  ProjectInfoTitle,
  ProjectLeftArrow,
  ProjectPeriod,
  ProjectRightArrow,
  ProjectTextArea,
  ProjectTitle,
  ProjectUpperText,
  ProjectWrapper,
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
import imgSrc from "./img/aboutme.png";
import frontEnd from "./img/frontend.png";
import backEnd from "./img/backend.png";
import certificate from "./img/certificate.png";
import version from "./img/version.png";
import deployment from "./img/deploy.png";
import github from "./img/github.png";
import velog from "./img/velog.png";
import portfolio1 from "./img/portfolio1.png";
import portfolio2 from "./img/portfolio1.png";
import portfolio3 from "./img/portfolio1.png";
import portfolio4 from "./img/portfolio1.png";
import portfolio5 from "./img/portfolio1.png";
import portfolio6 from "./img/portfolio1.png";
import portfolio7 from "./img/portfolio1.png";
import girl from "./img/myphoto.png";

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1800px)" });
  const [value, setValue] = useState("false");
  const [lan, setLan] = useState("korean");
  const [project1Num, setProject1Num] = useState(1);
  let project1Link =`../public/portfolio${project1Num}.png`
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

  // 개인 작업(projects)의 그림 변경하기
  //프로젝트1
  //4는 그림의 개수

  const onClickProject1NumberAdd = () => {
    if (project1Num >= 7) {
      setProject1Num(project1Num - 6);
    } else {
      setProject1Num(project1Num + 1);
    }
  };

  const onClickProject1NumberMinus = () => {
    if (project1Num <= 1) {
      setProject1Num(project1Num + 6);
    } else {
      setProject1Num(project1Num - 1);
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
          >
            {state.menu2}
          </MobileMenuItem>
          <MobileMenuItem
          to="archive"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >{state.menu3}</MobileMenuItem>
          <MobileMenuItem
          to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >{state.menu4}</MobileMenuItem>
          <MobileMenuItem
          to="career"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          >{state.menu5}</MobileMenuItem>
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
          <ItemWrapper
          to="archive"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <StyledImg src="../public/archive2.png" />
            <StyledTitle>{state.menu3}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper
          to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <StyledImg src="../public/projects.png" />
            <StyledTitle>{state.menu4}</StyledTitle>
          </ItemWrapper>
          <ItemWrapper
          to="career"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <StyledImg src="../public/skills.png" />
            <StyledTitle>{state.menu5}</StyledTitle>
          </ItemWrapper>
        </MainWrapper>
        <InfoWrapper
        
        >
          <CoverWrapper>
            <HrCover />
            <LineWrapper>
              <FlowerOne />
              <FlowerTwo />
              <FlowerOne />
            </LineWrapper>
            <TypoWrapper>
              <TypoLine> 안녕하세요.</TypoLine>
              <TypoLine>
                {" "}
                자바스크립트를 사랑하는 프론트엔드 개발자입니다.{" "}
              </TypoLine>
              <TypoLine>
                {" "}
                빠른 손, 유창한 영어 구사력, 개발을 향한 무한한 애정이 제
                장점입니다.
              </TypoLine>
              <TypoLine>
                {" "}
                항상 어제보다 나은 개발자가 되고자 노력합니다.
              </TypoLine>
              <TypoLine>
                {" "}
                인생을 전부 산 건 아니지만, 노력이 사람을 어디까지 바꿔놓을 수
                있는지 알기 때문입니다.
              </TypoLine>
            </TypoWrapper>
            <LineWrapper>
              <FlowerOne />
              <FlowerTwo />
              <FlowerOne />
            </LineWrapper>
          </CoverWrapper>
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
                  <ProfileDetail>
                    경인교육대학교
                    <br />
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
                <SkillImgFront src="../public/frontend.png" />
              </SkillItemWrapper>
              <SkillItemWrapper>
                <SkillItemTitle>Back-end</SkillItemTitle>
                <SkillImgBack src="../public/backend.png" />
              </SkillItemWrapper>
              <SkillItemWrapper>
                <SkillItemTitle>Version Control</SkillItemTitle>
                <SkillImgVersion src="../public/version.png" />
              </SkillItemWrapper>

              <SkillItemWrapper>
                <SkillItemTitle>Deployment</SkillItemTitle>
                <SkillImgDeploy src="../public/deploy.png" />
              </SkillItemWrapper>
              <SkillItemWrapper>
                <SkillItemTitle>Certificate</SkillItemTitle>
                <SkillImgCertificate src={certificate} />
              </SkillItemWrapper>
            </SkillItemArea>
          </SkillWrapper>
          <ArchiveWrapper name="archive">
            <InfoTitle>
              <TitleIconLeft /> {state.menu3} <TitleIconRight />
            </InfoTitle>
            <ArchiveArea>
              <ArchiveItem>
                <ArchiveImg src="../public/github.png" />
                <ArchiveP>
                  {" "}
                  <strong>소스 코드 저장소</strong>입니다.
                </ArchiveP>
                <ArchiveLink href="https://github.com/nahyunbak/">
                  https://github.com/nahyunbak/
                </ArchiveLink>
                <ArchiveUl>
                  <ArchiveLi>✔ 개인 프로젝트를 기록하고 있습니다.</ArchiveLi>
                  <ArchiveLi>✔ 알고리즘을 연습하고 있습니다.</ArchiveLi>
                  <ArchiveLi>
                    ✔ 다양한 오픈소스 프로젝트에 참여할 계획을 세우고 있습니다.
                  </ArchiveLi>
                </ArchiveUl>
              </ArchiveItem>

              <ArchiveItem>
                <ArchiveImg src={velog} />
                <ArchiveP>
                  {" "}
                  <strong>개인 공부용 블로그</strong>입니다.
                </ArchiveP>
                <ArchiveLink href="https://velog.io/@nahyunbak">
                  https://velog.io/@nahyunbak
                </ArchiveLink>
                <ArchiveUl>
                  <ArchiveLi>
                    ✔ 자바스크립트 중심의 개인 기술 블로그입니다.
                  </ArchiveLi>
                  <ArchiveLi>
                    ✔ 책과 강의, 공식문서, 디버깅 회고록, 개인 프로젝트를
                    기록하고 있습니다.
                  </ArchiveLi>
                </ArchiveUl>
              </ArchiveItem>
            </ArchiveArea>
          </ArchiveWrapper>

          <ProjectWrapper name ="projects">
            <InfoTitle>
              <TitleIconLeft /> {state.menu4} <TitleIconRight />
            </InfoTitle>
            <ProjectArea>
              <ProjectTitle>개인 포트폴리오</ProjectTitle>
              <ProjectPeriod>2021.09</ProjectPeriod>
              <ProjectContentsArea>
                <ProjectImgArea>
                  <ProjectImg src= {project1Link}/>
                  <ProjectArrowWrapper>
                    <ProjectLeftArrow onClick={onClickProject1NumberMinus} />
                    <ProjectImgNumbers>{project1Num}/7</ProjectImgNumbers>
                    <ProjectRightArrow onClick={onClickProject1NumberAdd} />
                  </ProjectArrowWrapper>
                </ProjectImgArea>
                <ProjectTextArea>
                  <ProjectUpperText>
                    개인 포트폴리오 용도로 제작한 React.js기반의 웹사이트입니다.
                    자기 소개, 보유 기술, 그간의 기록, 커리어 등을 '발레'와
                    접목시켜일목요연하게 정리하고자 노력했습니다.
                  </ProjectUpperText>
                  <ProjectUpperText>
                    반응형 웹사이트를 리액트로 구현했다는 점, 그리고 다양한
                    써드파티 라이브러리의 기능을 사용했다는 점에서 제게 의미
                    깊은 프로젝트입니다.
                  </ProjectUpperText>
                  <ProjectUpperText>
                    이 사이트를 만들기 직전에 Nest.js와 타입스크립트를 사용하여
                    글쓰기 연습 앱의 백엔드 API를 구현해서 그런가.
                    자바스크립트와 타입스크립트의 차이를 체감하기도 했습니다.{" "}
                  </ProjectUpperText>
                  <ProjectUpperText>
                    결과적으로 이 작업을 마무리지으며 SSR을 염두에 둔다면
                    타입스크립트 기반의 Nest.js를, 그렇지 않는다면 자바스크립트,
                    혹은 타입스크립트 기반의 React.js가 유리하다는 결론을
                    내렸습니다.{" "}
                  </ProjectUpperText>
                  <ProjectHr />
                  <ProjectInfoArea>
                    <ProjectInfoItem>
                      <ProjectInfoTitle>✔ 주요 기능</ProjectInfoTitle>
                      <ProjectInfoDetail>
                        자기소개, 인적 사항, 기술 스택, github/기술블로그 링크,
                        프로젝트 경험
                      </ProjectInfoDetail>
                    </ProjectInfoItem>
                    <ProjectInfoItem>
                      <ProjectInfoTitle>✔ 깃허브</ProjectInfoTitle>
                      <ProjectInfoDetailURL href="https://github.com/nahyunbak/react-portfolio-ballet">
                        <ProjectInfoDetail>
                          https://github.com/nahyunbak/react-portfolio-ballet
                        </ProjectInfoDetail>
                      </ProjectInfoDetailURL>
                    </ProjectInfoItem>
                    <ProjectInfoItem>
                      <ProjectInfoTitle>✔ 도메인</ProjectInfoTitle>
                      <ProjectInfoDetailURL href="#">
                        <ProjectInfoDetail>#</ProjectInfoDetail>
                      </ProjectInfoDetailURL>
                    </ProjectInfoItem>
                    <ProjectInfoItem>
                      <ProjectInfoTitle>✔ 프론트엔드</ProjectInfoTitle>
                      <ProjectInfoDetail>React</ProjectInfoDetail>
                    </ProjectInfoItem>
                    <ProjectInfoItem>
                      <ProjectInfoTitle>✔ 배포</ProjectInfoTitle>
                      <ProjectInfoDetail>Neflify, Github</ProjectInfoDetail>
                    </ProjectInfoItem>
                  </ProjectInfoArea>
                </ProjectTextArea>
              </ProjectContentsArea>
            </ProjectArea>
          </ProjectWrapper>
          <CareerWrapper name="career">
            <InfoTitle>
              <TitleIconLeft /> {state.menu5} <TitleIconRight />
            </InfoTitle>
            <CareerArea>
              <CareerImgArea>
                <CareerImg src={girl} />

                <CareerName>박나현</CareerName>
              </CareerImgArea>

              <CareerDetail>
                <CareerDetailItem>
                  <CareerJob>무원 초등학교</CareerJob>
                  <CareerPeriod>2020.03~2021.02</CareerPeriod>
                  <CareerText>✔ 영어 전담 교사로 1년간 근무</CareerText>
                  <CareerText>
                    ✔ 원격수업 관리. 로고 시안 제작. 작은음악회 영상편집 전담.
                  </CareerText>
                </CareerDetailItem>
                <CareerLine />

                <CareerDetailItem>
                  <CareerJob>프로그래밍 공부</CareerJob>
                  <CareerPeriod>2021.03~2021.09</CareerPeriod>
                  <CareerText>
                    ✔ 커리어 전환의 계기: 나만의 서비스와 그걸 만들 실력을 원함{" "}
                  </CareerText>

                  <CareerText>
                    ✔ 제가 원하는 걸 이루려면 학원이나 부트캠프에 다니는 것보다
                    독학이 유리하다고 판단했습니다.
                  </CareerText>
                  <CareerText>
                    ✔ 첫 두 달은 전공지식을 배우는 데 공을 들이고, 한 달은
                    자바스크립트를 깊이 이해하려고 노력했습니다.{" "}
                  </CareerText>
                  <CareerText>
                    ✔ 비전공자로서 차별받지 않기 위해서는 결국 전공지식을
                    이해해야 하고, 프론트와 백엔드를 둘 다 다루려면 그 뿌리인
                    자바스크립트의 전문가가 되어야 한다고 믿었기 때문입니다.
                  </CareerText>

                  <CareerText>
                    ✔ 전공지식: C언어, 컴퓨터의 구조, 컴퓨터 개론, 이산수학,
                    알고리즘, 데이터베이스 개론
                  </CareerText>
                  <CareerText>
                    ✔ 프로그래밍: HTML, CSS, JS, TS, React, Nest.JS, MonggoDB,
                    MySQL, Git 상편집 전담.
                  </CareerText>
                </CareerDetailItem>
              </CareerDetail>
            </CareerArea>
          </CareerWrapper>
          <FooterWrapper>
          <FooterArea>
          <FooterImgWrapper>
          <FooterLink href = "https://github.com/nahyunbak"><FooterGitHub/></FooterLink>
          <FooterLink href ="https://www.linkedin.com/in/%EB%A6%B0-%EB%A6%AC-7390b21a6/"><FooterLinkedIn/></FooterLink>
          <FooterLink href = "https://www.facebook.com/profile.php?id=100023140757673"><FooterFacebook/></FooterLink>
          
          
          
          
          </FooterImgWrapper>
          <FooterText>© 2021. Choi Deok Gyeong. All rights reserved.</FooterText>
          
          
          </FooterArea>
          



          </FooterWrapper>
        </InfoWrapper>
      </Wrapper>
    </>
  );
};

export default App;
