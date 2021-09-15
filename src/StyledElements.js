import styled, {css} from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaExchangeAlt, FaLink } from "react-icons/fa";
import { Link } from "react-scroll";



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
`
export const HeaderWrapper = styled.div`

  width: 1800px;
  height: 170px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1800px) {
    width:100%;
    border-radius: 50px;
    background-color: #4a4a4a;
    padding: 10px;
    padding-left: 100px;
    z-index: 3;
    
  };
`

export const TitleWrapper = styled(Link)`
  display: block;
  color: #4a4a4a;
  font-size: 6rem;
  font-weight: bold;
  margin-left: -30px;
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

/* 모바일에서만 보이는 메뉴 */
export const MobileMenuWrapper = styled.div`
@media screen and (min-width: 1800px){
    display: none
  }
  display: ${({value})=>(value? 'block': 'none')};
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        
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

  width:100%;
  height: 600px;
  z-index: 2;
 margin-top: -100px;
 margin-bottom: 300px;
 

  
  
`

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




`


/*

<MobileMenuWrapper>
        <MobileMenuItem>ABOUT ME</MobileMenuItem>
        <MobileMenuItem>SKILLS</MobileMenuItem>
        <MobileMenuItem>ARCHIVE</MobileMenuItem>
        <MobileMenuItem>PROJECTS</MobileMenuItem>
        <MobileMenuItem>CAREEER</MobileMenuItem>
        </MobileMenuWrapper>



*/