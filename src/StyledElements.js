import styled, { css } from "styled-components";
import { GiHamburgerMenu, GiCurledLeaf } from "react-icons/gi";
import { FaExchangeAlt, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-scroll";

import { BsFillPersonFill, BsCalendar } from "react-icons/bs";
import {
  IoLocationSharp,
  IoCall,
  IoFlowerOutline,
  IoFlower,
} from "react-icons/io5";
import {
  AiFillMail,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { SiGithub, SiLinkedin, SiFacebook} from "react-icons/si";



export const Wrapper = styled.div`
  width: 100vw;
  height: 1000vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*user select시 파랗게 드래그되는 효과 배제*/
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;
export const HeaderWrapper = styled.div`
  width: 1500px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1800px) {
    width: 100%;
    border-radius: 50px;
    background-color: #4a4a4a;
    padding: 10px;
    padding-left: 140px;
    z-index: 3;
  } ;
`;

export const TitleWrapper = styled(Link)`
  display: block;
  color: #4a4a4a;
  font-size: 4rem;
  font-weight: bold;
  margin-left: -30px;
  @media screen and (max-width: 1800px) {
    font-size: 3.5rem;
    color: white;
  }

  @media screen and (max-width: 760px) {
    font-size: 3.5rem;
    margin-left: 20px;
  } ;
`;

export const LanguageToggleWrapper = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1800px) {
    display: none;
  } ;
`;

export const LanguageType = styled.span`
  width: 100px;
  height: 30px;
  color: #4a4a4a;
  font-size: 2rem;
  margin-left: 10px;
  @media screen and (max-width: 1800px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 700px) {
    display: none;
  } ;
`;

const IconStyle = css`
  font-size: 2.2rem;
  margin-top: 5px;
  @media screen and (max-width: 1800px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  } ;
`;

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
  }
  @media screen and (max-width: 760px) {
    width: 80px;
    height: 80px;
    border: 4px solid #e6e6e6;
  } ;
`;
export const MenuStyle = css`
  font-size: 5rem;
  @media screen and (max-width: 760px) {
    font-size: rem;
  } ;
`;
export const ExchangeIcon = styled(FaExchangeAlt)`
  ${IconStyle};
`;

export const MenuIcon = styled(GiHamburgerMenu)`
  ${MenuStyle};
`;

//Main

export const MainWrapper = styled.div`
  width: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1800px) {
    display: none;
  } ;
`;

export const ItemWrapper = styled(Link)`
  display: block;
  width: 1800px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  filter: brightness(40%);
  transition: all 0.5s linear;
  &:hover {
    filter: brightness(100%);
    transform: scale(1.1);
  }

  @media screen and (max-width: 1800px) {
    width: 300px;
    height: 600px;
    margin-bottom: 150px;
    filter: brightness(40%);
    transition: all 0.5s linear;
    &:hover {
      filter: brightness(100%);
      transform: scale(1.1);
    }

    @media screen and (max-width: 963px) {
      margin-bottom: 150px;
      filter: brightness(40%);
      transition: all 0.5s linear;
      &:hover {
        filter: brightness(100%);
        transform: scale(1.1);
      }
    }
  }
`;

export const StyledImg = styled.img`
  width: 300px;
  height: 600px;
`;

export const StyledTitle = styled.div`
  font-size: 2.2rem;
  color: #4a4a4a;
  &:hover {
  }
`;

/* 모바일에서만 보이는 메뉴 */
export const MobileMenuWrapper = styled.div`
  @media screen and (min-width: 1800px) {
    display: none;
  }
  display: ${({ value }) => (value ? "block" : "none")};
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(101px);
      transform: translateY(101px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(101px);
      transform: translateY(101px);
    }
  }

  width: 100%;
  height: 600px;
  z-index: 2;
  margin-top: -100px;
  margin-bottom: 300px;
`;

export const MobileMenuItem = styled(Link)`
  display: block;
  width: 100%;
  height: 120px;
  font-size: 45px;
  text-align: center;
  border-bottom: 4px solid grey;
  line-height: 120px;
  background-color: white;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    background-color: #fceceb;
  }
`;

//info 공통
export const InfoWrapper = styled.div`
  width: 100%;
  height: 500px;
`;

export const InfoTitle = styled.div`
  font-size: 5rem;
  text-align: center;
  border-bottom: 1px solid grey;
  width: 600px;
  padding: 20px;
  margin-bottom: 100px;
`;

export const infoIconStyle = css`
  font-size: 3rem;
  color: black;
`;

export const TitleIconLeft = styled(GiCurledLeaf)`
  ${infoIconStyle}
`;

export const TitleIconRight = styled(GiCurledLeaf)`
  ${infoIconStyle}
  transform: rotateY(180deg);
`;

//info 창- cover

/**
 * <CoverWrapper>
            <LineWrapper>
              <FlowerOne/>
              <FlowerTwo/>
              <FlowerOne/>
            </LineWrapper>
            <TypoWrapper></TypoWrapper>
            <LineWrapper>
              <FlowerOne/>
              <FlowerTwo/>
              <FlowerOne/>
            </LineWrapper>
          </CoverWrapper>
 * 

          IoFlowerOutline, IoFlower 
 */

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  height: 600px;
  padding: 100px;
  @media screen and (max-width: 1800px) {
    margin-top: -100px;
  } ;
`;

export const HrCover = styled.hr`
  width: 600px;
  color: grey;
  margin-bottom: 100px;
  @media screen and (max-width: 1800px) {
    display: none;
  } ;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlowerOne = styled(IoFlowerOutline)`
  font-size: 2.2rem;
`;

export const FlowerTwo = styled(IoFlower)`
  font-size: 2rem;
`;

export const TypoWrapper = styled.div`
  margin: 50px;
  height: 300px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const TypoLine = styled.div`
  text-align: center;
  letter-spacing: 2px;
`;
// info 창-aboutMe

export const AboutMeWrapper = styled(Link)`
  display: block;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8e8;
`;

export const AboutMeArea = styled.div`
  width: 1660px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1600px) {
    width: 1200px;
    height: 1000px;
  }
  @media screen and (max-width: 1200px) {
    width: 600px;
    height: 1800px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 550px;
  height: 240px;
`;

const aboutMeImg = css`
  font-size: 5rem;
`;
export const ProfileName = styled(BsFillPersonFill)`
  ${aboutMeImg}
`;

export const ProfileBirth = styled(BsCalendar)`
  ${aboutMeImg}
`;

export const ProfileLocation = styled(IoLocationSharp)`
  ${aboutMeImg}
`;

export const ProfileCall = styled(IoCall)`
  ${aboutMeImg}
`;

export const ProfileMail = styled(AiFillMail)`
  ${aboutMeImg}
`;
export const ProfileStudy = styled(FaPencilAlt)`
  ${aboutMeImg}
`;
export const ProfileText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 340px;
  height: 120px;
`;
export const ProfileTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ProfileDetail = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const SkillWrapper = styled(Link)`
  display: block;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  height: auto;

  background-color: #ffeae8;
  flex-direction: column;

  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const SkillItemArea = styled.div`
  display: flex;
  align-items: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  width: 1600px;
  height: 1500px;
  
  @media screen and (max-width: 1800px) {
    width: 1000px;
    height: 2000px;
  }
  @media screen and (max-width: 700px) {
    width: 400px;
    height: 3000px;
  }


`;
export const SkillItemWrapper = styled.div`
  padding: 22px;
  border-radius: 15px;
  background-color: white;
  width: 400px;
  margin-top: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(30px);
  }
`;
export const SkillItemTitle = styled.div`
  padding: 15px;
  border-bottom: 1px solid grey;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const SkillImgFront = styled.img`
  width: 400px;
  height: 800px;
`;

export const SkillImgBack = styled.img`
  width: 400px;
  height: 533px;
`;

export const SkillImgVersion = styled.img`
  width: 400px;
  height: 400px;
`;

export const SkillImgCertificate = styled.img`
  width: 400px;
  height: 106px;
`;

export const SkillImgDeploy = styled.img`
  width: 400px;
  height: 420px;
`;

//Archive

export const ArchiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #e2edd8;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ArchiveArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  padding: 100px;
  align-items: center;
  

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ArchiveItem = styled.div`
  padding: 35px;
  border-radius: 20px;
  background-color: white;
  padding: 45px;
  width: 500px;
  height: 340px;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    transform: translateY(20px);
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 100px;
  }
`;
export const ArchiveImg = styled.img`
  width: 250px;
  height: 80px;
  margin-bottom: 30px;
`;

export const ArchiveP = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const ArchiveLink = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const ArchiveUl = styled.ul`
  font-size: 1.5rem;
  margin-top: 20px;
`;
export const ArchiveLi = styled.li`
  font-size: 1.5rem;
  margin-bottom: 10px;
  line-height: 120%;
`;

//project

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #edcdad;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const ProjectArea = styled.div`
width: 1600px;


  padding: 100px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    transform: translateY(20px);
  }

  @media screen and (max-width: 1800px) {
      width: 70%;
  } ;


`;

export const ProjectTitle = styled.h1`
  font-size: 3rem;
  color: black;
  margin-bottom: 50px;
  font-weight: 700;
`;

export const ProjectPeriod = styled.p`
  color: grey;
  font-size: 1.8rem;
  margin-bottom: 100px;
`;

export const ProjectContentsArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 1600px;
  padding-bottom: 200px;
  @media screen and (max-width: 1800px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    
  } ;
`;

export const ProjectImgArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: 800px;
  @media screen and (max-width: 1800px) {
    margin-bottom: 50px;
    
  } ;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProjectArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  margin-top: 50px;
  @media screen and (max-width: 1800px) {
    margin-top: 50px;
    
  } ;
`;

export const ProjectRightArrow = styled(AiOutlineArrowRight)`
  font-size: 2rem;
  cursor: pointer;
`;

export const ProjectLeftArrow = styled(AiOutlineArrowLeft)`
  font-size: 2rem;
  cursor: pointer;
`;

export const ProjectImgNumbers = styled.p`
  font-size: 2rem;
`;

export const ProjectTextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 800px;
`;

export const ProjectUpperText = styled.p`
  font-size: 1.7rem;
  padding: 15px 15px 0px 15px;
  letter-spacing: 2px;
  line-height: 130%;
`;

export const ProjectHr = styled.hr`
  width: 800px;
  margin: 50px auto;
`;

export const ProjectInfoArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 400px;
`;

export const ProjectInfoItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 800px;
  height: 300px;
  font-size: 1.7rem;
`;

export const ProjectInfoTitle = styled.div`
  width: 160px;

  font-weight: bold;
`;

export const ProjectInfoDetail = styled.div`
  width: 600px;
  letter-spacing: 2px;
  line-height: 140%;
`;

export const ProjectInfoDetailURL = styled.a`
  cursor: pointer;
`;

export const CareerWrapper = styled.div`
  background-color: #bad2db;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

export const CareerArea = styled.div`

  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1800px;

  padding: 100px 50px;

  background-color: white;
  border-radius: 40px;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover {
    transform: translateY(20px);
  }
  @media screen and (max-width: 1800px) {
      width: 100%;
      flex-direction: column;
      align-items: center;

  } ;
`;

export const CareerImgArea = styled.div`
  display: flex;
  padding: 80px 60px 0 0;
  margin-left: -50px;
  width: 300px;

  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-right: 1px solid #cfcfcf;
  @media screen and (max-width: 1800px) {
      align-items: center;
      padding: 0;
      margin-top: 200px;
      border-right: none;
      

      margin-left: 0px;

  } ;
`;
export const CareerImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const CareerName = styled.div`
  width: 150px;
  height: 100px;
  font-size: 3rem;
  font-weight: 700;
  margin-top: 50px;
  margin-left: 54px;
  @media screen and (max-width: 1800px) {


      margin-left: 0px;


  } ;
`;

export const CareerDetail = styled.div`
  width: 900px;


  
  @media screen and (max-width: 900px) {
    width: 80%;




} ;


`;

export const CareerDetailItem = styled.div`
  width: 1000px;
  margin-top: 90px;
  padding-bottom: 90px;
  @media screen and (max-width: 900px) {





} ;
`;
export const CareerJob = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const CareerPeriod = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 40px;
  margin-left: 7px;
`;

export const CareerText = styled.p`
  font-size: 1.7rem;
  letter-spacing: 2px;
  line-height: 130%;
  margin-bottom: 5px;
`;

export const CareerLine = styled.div`
  width: 1000px;
  height: 1px;
  border-bottom: 1px solid #cfcfcf;
`;

export const FooterWrapper = styled.div`

  padding: 100px;
  background-color: black;
`

export const FooterArea = styled.div`
    display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
  
`
export const FooterImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 30px;
  width: 350px;

`

export const FooterText = styled.p`
  font-size: 1.7rem;
  
`

export const FooterGitHub = styled(SiGithub)`
  font-size: 5rem;
  cursor: pointer;
`

export const FooterLinkedIn = styled(SiLinkedin)`
  font-size: 5rem;
  cursor: pointer;
`


export const FooterFacebook = styled(SiFacebook)`
  font-size: 5rem;

`
export const FooterLink = styled.a`
  color: white;
  &:click{
    color: white;
  }

  
`

/**
 * 
 * <FooterWrapper>
          <FooterArea>
          <FooterImgWrapper>
          <FooterGitHub/>
          <FooterLinkedIn/>
          <FooterFaceBook/>
          <FooterVelog/>
          
          </FooterImgWrapper>
          <FooterText></FooterText>
          
          
          </FooterArea>
 * 
 */
