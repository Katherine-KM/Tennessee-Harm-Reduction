import { LgButtonComponent } from "../Button";

import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const HeroComponentContainer = styled.section`
  background: linear-gradient(100deg, rgba(0,0,0,0.9), rgba(0,0,0,0.15)), no-repeat url(${props => props.imgSrc});
  background-size: cover;
  height: fit-content;
  display: flex; 
  width: 100%;
  // max-height: 500px;
  min-height: 500px;

  @media (min-width: 1060px) {
    background-image: none; 
    background-color: #F7D5BA38;
    min-height: 300px;
  }
`;

const HeroContainer1 = styled.div`
  display: flex;
  width: 100%;
  
  @media (min-width: 1060px) {
    width: 50%;
  }
`

const HeroContainer2 = styled.div`
  display: none; 
  height: 500px;
   
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

const HeroH1 = styled.h1`
  font-size: var(--h1-fs);
  font-weight: 700;
  line-height: clamp(3.2rem, 5vw, 5.1rem);
  display: inline; 
`;



const OrangeSpan = styled.span`
font-size: var(--h1-fs);
font-weight: 700;
line-height: clamp(3.2rem, 5vw, 5.1rem);
  color: #f3b088;

`;

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`
const HeroH2 = styled.h1`
  font-size: var(--h1-fs);
  font-weight: 700;
  line-height: clamp(3.2rem, 5vw, 5.1rem); 
  display: inline;
`

const StyledHeroPText = styled.p`
  margin: 20px 0 25px 0;
  line-height: 24px;
  font-size: var(--p-lg-fs);
`

const ServiceHeroComponent = (
  {
    coloredText,
    h1Text,
    h1Text2,
    pText,
    imgSrc,
    imgAltText,
    imgHeight,
    imgWidth,
    buttonText,
}) => {
  return (
    <HeroComponentContainer imgSrc={imgSrc}>
      <HeroContainer1>
        <HeroDetailsContainer>
          
          <HeroH1>{h1Text}</HeroH1>

          <OrangeSpan> {coloredText} </OrangeSpan>
          <HeroH2>{h1Text2}</HeroH2>
          <StyledHeroPText>{pText}</StyledHeroPText>

          <LgButtonComponent>
            {buttonText}
          </LgButtonComponent>
         
        </HeroDetailsContainer>
      </HeroContainer1>
      <HeroContainer2>
        <StyledImg
          src={imgSrc}
          alt={imgAltText}
          height={imgHeight}
          width={imgWidth}
          
        />
      </HeroContainer2>
    </HeroComponentContainer>
  );
};

export default ServiceHeroComponent;
