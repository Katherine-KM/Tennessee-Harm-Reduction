import styled from 'styled-components';
import Title from './Title';
import Card from './Card';
import Button from '../Button';


const SectionContainer = styled.section`
  width: 100%;
  height: 561px;
  background-color: #fff;
`

const FlexContainerRow = styled.div`
  display:flex;

`

const HowWeHelp = () => {
  return (
    <SectionContainer>
      <Title></Title>
      <FlexContainerRow>
        {/* this div contains all of the card components */}
        <div style={{display: 'flex', margin: '0 auto'}} >
      <Card 
      titleOne='Provide' 
      titleTwo='Supplies'
      fontColor='blue'
      paragraph='A demand-driven or a participant-driven model travel around Tennessee doing outreach harm reduction supply'
      ></Card>

      <Card 
      titleOne='Supplies By' 
      titleTwo='Mail' 
      paragraph='Sending free NARCAN kits, syringes, and fentanyl test strips by mail within whole United state .'
      ></Card>

      <Card 
      titleOne='Treatment' 
      titleTwo='Program' 
      paragraph='Connect with different supporting programs and committee around Tennessee regarding harm reduction support.'
      ></Card>

      <Card 
      titleOne='Information' 
      titleTwo='Centre'  
      paragraph='Getting the most update information, including getting resources on safer drug use and knowing how to respond in the event of an overdose.'
      ></Card>
      </div>
      </FlexContainerRow>
    </SectionContainer>
  )
}

export default HowWeHelp