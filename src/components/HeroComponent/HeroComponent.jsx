import { LgButtonComponent } from "../Button";
import { HeroComponentContainer, LeftWrapper, HeroDetailsContainer, StyledSpan, StyledHeroPText, RightWrapper, StyledImg } from "./HeroComponent.styles";

const HeroComponent = (
  {
    coloredText,
    h1Text,
    pText,
    imgSrc,
    imgAltText,
    imgHeight,
    imgWidth,
    buttonText,
}) => {
  return (
    <HeroComponentContainer imgSrc={imgSrc}>
      <LeftWrapper>
        <HeroDetailsContainer>
          <h1>
            <StyledSpan> {coloredText} </StyledSpan>
            {h1Text}
          </h1>
          <StyledHeroPText
            className='p-lg'
          >
            {pText}
          </StyledHeroPText>
          <LgButtonComponent> 
            {buttonText}
          </LgButtonComponent>
        </HeroDetailsContainer>
      </LeftWrapper>
      <RightWrapper>
        <StyledImg
          src={imgSrc}
          alt={imgAltText}
          height={imgHeight}
          width={imgWidth}
        />
      </RightWrapper>
    </HeroComponentContainer>
  );
};

export default HeroComponent;
