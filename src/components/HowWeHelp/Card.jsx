import styled from 'styled-components';
import Button from '../Button';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 249.9px;
    height: 309px;
    margin: 15px;
    background-color: #F7D5BA;
    border-radius: 5px;
    text-align: center;
    letter-spacing: -0.015em;
    // background: rgba(247, 213, 186, 0.22);
`

const Card = ({titleOne, titleTwo, paragraph}) => {
  return (

    <CardContainer>
        <h3 style={{marginTop: '30px'}}>{titleOne}</h3>
        <h3 style={{marginBottom: '20px'}}>{titleTwo}</h3>
        <p style={{marginBottom: '20px', fontSize: '14px'}}>{paragraph}</p>
        <Button 
        size="sm"
        > Learn More</Button>
    </CardContainer>

  )
}

export default Card