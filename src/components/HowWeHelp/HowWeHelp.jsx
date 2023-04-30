import Card from "./Card";
import { cardArray } from "./HWHelpCardArray";


import { SectionContainer, CardFlexContainer, HelpTitle, HelpTitleH2, HelpSpan , HelpParagraph, HelpParagraphTextTop, HelpParagraphTextBottom } from "./HowWeHelp.styles"


const HowWeHelp = () => {

  return (
    <>
      <HelpTitle>
        <HelpTitleH2>How <HelpSpan>We</HelpSpan> Help
        </HelpTitleH2>
      </HelpTitle>

        <HelpParagraph>
           <HelpParagraphTextTop className='p-md'>
           In Tennessee, we offer efficient services and programmes that benefit the
           </HelpParagraphTextTop>

            <HelpParagraphTextBottom className='p-md'>
            vulnerable and frequently ignored members of society.
            </HelpParagraphTextBottom>
        </HelpParagraph>

      <SectionContainer>
        <CardFlexContainer>
          {cardArray.map((card,idx) => (
            <Card key={idx}
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
