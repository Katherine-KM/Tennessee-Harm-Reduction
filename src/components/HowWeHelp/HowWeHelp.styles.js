import styled from "styled-components";

// Outtermost container for cards
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
// Inner Container for all the cards
const CardFlexContainer = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 1.5rem;
    max-width: 90%;
    margin: 0 auto;
    width: 80%;


    @media (min-width:351px){
        display: grid;
        grid-template-columns: 270px 270px;
        justify-content: center;
        margin: 0 auto;
        max-width: 90%;
        column-gap: 2.5rem;
        row-gap: 1.5rem;
    }

    @media (min-width: 1158px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 5rem;
        max-width: 80%;
        grid-column: 1/4;
        grid-row: 1/4;
    }
`;

// Title components start here
const HelpTitle = styled.div`
  color: black;
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
`

const HelpTitleH2 = styled.h2`
  marginTop: 50px;
  marginBottom: 10px;
 
`

const HelpSpan = styled.span`
  color: var(--clr-primary-200);
  display: inline;
  font-size: var(--h2-fs);
  
`

const HelpParagraph = styled.div`
  color: black;
  font-size: 1rem;
  word-wrap: break-word;
  text-align:center;
`

const HelpParagraphTextTop = styled.p`
  margin-top: 15px;
`

const HelpParagraphTextBottom = styled.p`
  margin-bottom: 30px;
`
// Title components ends here


export { SectionContainer, CardFlexContainer, HelpTitle, HelpTitleH2, HelpSpan , HelpParagraph, HelpParagraphTextTop, HelpParagraphTextBottom  }