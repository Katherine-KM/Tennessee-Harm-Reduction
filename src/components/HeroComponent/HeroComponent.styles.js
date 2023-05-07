import Image from "next/image";
import styled from "styled-components";

const HeroComponentContainer = styled.section`
  background: linear-gradient(100deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.15)),
    no-repeat url(${(props) => props.imgSrc});
  background-size: cover;
  height: fit-content;
  display: flex;
  width: 100%;
  min-height: 500px;
  text-align: center; 

  @media (min-width: 1060px) {
    text-align: left;
    background-image: none;
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : "var(--clr-bgNeutral)"};
    min-height: 300px;
  }
`;

const HeadingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 

    @media (min-width: 1060px) {
      justify-content: start; 
    }
`;

const StyledTitle = styled.h1`
    white-space: pre-wrap;
`;

const StyledColorTitle = styled(StyledTitle)`
  color: var(--clr-primary-400);
`;

const LeftWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1060px) {
    width: 50%;
  }
`;

const RightWrapper = styled.div`
  display: none;

  @media (min-width: 1060px) {
    display: block;
    width: 50%;
  }
`;

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
`;

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StyledHeroPText = styled.p`
  margin: 1rem 0 2.5rem 0;
`;

export {
  HeroComponentContainer,
  LeftWrapper,
  RightWrapper,
  HeroDetailsContainer,
  StyledImg,
  StyledHeroPText,
  HeadingWrapper,
  StyledTitle,
  StyledColorTitle
};
