import styled from 'styled-components';
import Button from '../Button';

const CardContainer = styled.div`
    display: flex;   
    height: 320px;

    background-color: var(--clr-bgNeutral);
    border-radius: 5px;
    text-align: center;
    letter-spacing: -0.015em;
    position: relative;  

`
const CardInnerContainer = styled.div`
margin: 0 auto;
padding-top:30px;

@media (min-width: 560px){
  display: flex;
  flex-direction: column;

  display: flex; 
  flex-direction: column; 
  padding: 20px;
  }
`

const H3Title = styled.h3`
color: ${props => props.fontColor};

font-size: var(--h4-link-fs);
`

const H3Title2 = styled(H3Title)`
  margin-bottom: 6px;
  line-height: 42px; 
  font-size: var(--h4-link-fs);
`

const CardParagraph = styled.p`

`

const CardParagraphContainer = styled.div`
  margin-bottom: 20px; 
  width: 200px;
  height: 100px;
`

const ButtonContainer = styled.div`
  margin-top: 40px;
  bottom:40px; 
  right: 60px;

  @media (min-width: 351px){
    margin-top: 30px;
    bottom:40px; 
    right: 60px;
  }
`


const Card = ({
  titleOne, 
  titleTwo, 
  paragraph, 
  fontColor
}) => {
  return (
  <>
    <CardContainer>
      <CardInnerContainer>
            <H3Title fontColor={fontColor}>{titleOne}</H3Title>

            <H3Title2 fontColor={fontColor}>{titleTwo}</H3Title2>

            <CardParagraphContainer>
              <CardParagraph>{paragraph}</CardParagraph>
            </CardParagraphContainer>
            
            <ButtonContainer>
              <Button>learn more</Button>
            </ButtonContainer>

        </CardInnerContainer>

    </CardContainer>
    </>
  )
}

export default Card