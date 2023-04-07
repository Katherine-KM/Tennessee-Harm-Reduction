import styled from 'styled-components';
import Title from './Title';
import Card from './Card';
import Button from '../Button';


const SectionContainer = styled.section`
background-color: #fff;
display: grid;
// height: 561px;
// border: 5px blue solid;
// margin-top: 4rem;


  @media (min-width: 1158px){
    // display:grid;

    margin: auto;
    grid-column: 1/4;
    grid-row: 1/4;
    padding-bottom: 4rem;
  }
  
  `
  
  const FlexContainerRow = styled.div`
  // display:flex;
  // margin: 0 auto;
  `
  
  const CardFlexContainer = styled.div`
  
  
  // display: flex; 
  display:grid;
  grid-template-columns: 270px 270px;
  justify-content: center;
  margin: 0 auto;
  max-width: 90%;
  // border: 3px solid red;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  @media (min-width: 1158px){
    // display:grid;
    grid-template-columns: repeat(4, 1fr);
    // margin: auto;
    column-gap: 5rem;
    max-width: 80%;
    grid-column: 1/4;
    grid-row: 1/4;
  }
`

const HowWeHelp = () => {
  return (
    <SectionContainer>
      <Title></Title>
      <FlexContainerRow>
        {/* this div contains all of the card components */}
        <CardFlexContainer>
   
      <Card 
      titleOne='Provide' 
      titleTwo='Supplies'
      fontColor='var(--clr-secondary)' 
      paragraph='A demand-driven or a participant-driven model travel around Tennessee doing outreach harm reduction supply'
      ></Card>

      <Card 
      titleOne='Supplies By' 
      titleTwo='Mail' 
      fontColor='var(--clr-primary-400)'
      paragraph='Sending free NARCAN kits, syringes, and fentanyl test strips by mail within whole United state .'
      ></Card>

      <Card 
      titleOne='Treatment' 
      titleTwo='Program'
      fontColor='var(--clr-secondary)' 
      paragraph='Connect with different supporting programs and committee around Tennessee regarding harm reduction support.'
      ></Card>

      <Card 
      titleOne='Information' 
      titleTwo='Centre'
      fontColor='var(--clr-primary-400)'  
      paragraph='Getting the most update information, including getting resources on safer drug use and knowing how to respond in the event of an overdose.'
      ></Card>
      </CardFlexContainer>
      
      </FlexContainerRow>
    </SectionContainer>
  )
}

export default HowWeHelp