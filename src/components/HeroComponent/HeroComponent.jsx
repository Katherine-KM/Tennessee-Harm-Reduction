import { LgButtonComponent } from "../Button";
import {
  HeroComponentContainer,
  LeftWrapper,
  HeadingWrapper,
  StyledTitle,
  StyledColorTitle,
  HeroDetailsContainer,
  StyledHeroPText,
  RightWrapper,
  StyledImg,
} from "./HeroComponent.styles";

const HeroComponent = ({
  bgColor,
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
    <HeroComponentContainer imgSrc={imgSrc} bgColor={bgColor}>
      <LeftWrapper>
        <HeroDetailsContainer>
        <HeadingWrapper>
          <StyledTitle>{coloredText} </StyledTitle>
          <StyledColorTitle>{h1Text}</StyledColorTitle>
        </HeadingWrapper>
          <StyledHeroPText className="p-lg">{pText}</StyledHeroPText>
          <LgButtonComponent>{buttonText}</LgButtonComponent>
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
