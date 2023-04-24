import styled from "styled-components";
import Title from "./Title";
import Card from "./Card";
import Button from "../Button";
import { cardArray } from "./HWHelpCardArray";

const SectionContainer = styled.section`
  background-color: #fff;
  display: grid;

  @media (min-width: 1158px) {
    padding-bottom: 4rem;
    grid-column: 1/4;
    grid-row: 1/4;
    margin: auto;
  }
`;

const CardFlexContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 270px;
  justify-content: center;
  margin: 0 auto;
  max-width: 90%;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  @media (min-width: 1158px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5rem;
    max-width: 80%;
    grid-column: 1/4;
    grid-row: 1/4;
  }
`;

const HowWeHelp = () => {

  return (
    <>
      <Title></Title>
      <SectionContainer>
        <CardFlexContainer>
          {cardArray.map((card) => (
            <Card
              titleOne={card.titleOne}
              titleTwo={card.titleTwo}
              fontColor={card.fontColor}
              paragraph={card.paragraph}
            ></Card>
          ))}
        </CardFlexContainer>
      </SectionContainer>
    </>
  );
};

export default HowWeHelp;
