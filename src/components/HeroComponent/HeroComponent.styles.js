import Image from "next/image";
import styled from "styled-components";

const HeroComponentContainer = styled.section`
  background: linear-gradient(100deg, rgba(0,0,0,0.9), rgba(0,0,0,0.15)), no-repeat url(${props => props.imgSrc});
  background-size: cover;
  height: fit-content;
  display: flex; 
  width: 100%;
  min-height: 500px;

  @media (min-width: 1060px) {
    background-image: none; 
    background-color: #F7D5BA38;
    min-height: 300px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  width: 100%;
  
  @media (min-width: 1060px) {
    width: 50%;
  }
`

const RightWrapper = styled.div`
  display: none; 

  @media (min-width: 1060px) {
    display: block; 
    width: 50%; 
  }
`

const HeroDetailsContainer = styled.div`
  width: min(95%, 580px);
  margin: auto;
  color: white;

  @media (min-width: 1060px) {
    color: black; 
  }

  @media (min-width: 400px) {
    width: min(80%, 580px);
  }
`
const StyledSpan = styled.span`
  color: #f3b088;
  display: block;
`;

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`

const StyledHeroPText = styled.p`
  margin: 20px 0 25px 0;
`

export {HeroComponentContainer, LeftWrapper, RightWrapper, HeroDetailsContainer, StyledSpan, StyledImg, StyledHeroPText}