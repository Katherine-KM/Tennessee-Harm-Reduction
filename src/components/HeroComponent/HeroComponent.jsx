import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const HeroComponentContainer = styled.section`
    background-color: #F7D5BA38;
    display: flex; 
    width: 100%;
`;

const HeroDetailsContainer = styled.div`
    width: 600px;
    margin: auto;
`

const HeroH1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
`;

const ColoredSpan = styled.span`
  color: #f3b088;
  display: block;
`;

const StyledImg = styled(Image)`
    width: 100%;
    height: 100%; 
`

const StyledHeroPText = styled.p`
    margin: 20px 0 25px 0;
    line-height: 24px;
    font-size: 17px;
`

const HeroComponent = ({coloredText, h1Text, pText, buttonText, imgSrc, imgAltText, imgHeight, imgWidth, buttonSize}) => {
  return (
    <HeroComponentContainer>
      <section style={{ width: "50%", display: "flex" }}>
        <HeroDetailsContainer>
          <HeroH1>
            <ColoredSpan> {coloredText} </ColoredSpan>
            {h1Text}
          </HeroH1>
          <StyledHeroPText>
            {pText}
          </StyledHeroPText>
          <Button size={buttonSize}> {buttonText} </Button>
        </HeroDetailsContainer>
      </section>
      <section style={{ width: "50%" }}>
        <StyledImg
          src={imgSrc}
          alt={imgAltText}
          height={imgHeight}
          width={imgWidth}
          layout="intrinsic"
        />
      </section>
    </HeroComponentContainer>
  );
};

export default HeroComponent;
