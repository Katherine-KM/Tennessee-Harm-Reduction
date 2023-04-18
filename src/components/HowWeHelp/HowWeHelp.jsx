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
  //   const cardArray = [
  //     {
  //       titleOne:'Provide' ,
  //       titleTwo:'Supplies',
  //       fontColor:'var(--clr-secondary)',
  //       paragraph: 'A demand-driven or a, participant-driven model travel around Tennessee doing outreach harm reduction supply',
  //     },
  //     {
  //         titleOne:'Supplies By',
  //         titleTwo:'Mail',
  //         fontColor:'var(--clr-primary-400)',
  //         paragraph: 'Sending free NARCAN kits, syringes, and fentanyl test strips by mail within whole United state.',
  //       },
  //       {
  //         titleOne:'Treatment',
  //         titleTwo:'Program',
  //         fontColor:'var(--clr-secondary)',
  //         paragraph: 'Connect with different supporting programs and committee around Tennessee regarding harm reduction support.',
  //       },
  //       {
  //         titleOne:'Information',
  //         titleTwo:'Centre',
  //         fontColor:'var(--clr-primary-400)' ,
  //         paragraph: 'Getting the most update information, including getting resources on safer drug use and knowing how to respond in the event of an overdose.',
  //       },
  // ]

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
