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

const H3Title = styled.h3`
color: ${props => props.fontColor}
`

const Card = ({titleOne, titleTwo, paragraph, fontColor}) => {
  return (

    <CardContainer>
        <div style={{display: 'flex', flexDirection: 'column', padding: '30px'}}>
            <H3Title fontColor={fontColor} style={{marginTop: '10px', fontSize: '26px', }}>{titleOne}</H3Title>
            <h3 style={{marginBottom: '10px', fontSize: '26px', lineHeight: '40px'}}>   {titleTwo}</h3>
            <p style={{marginBottom: '20px', fontSize: '14px', }}>{paragraph}</p>

            <Button size="sm">Learn More</Button>
        </div>
    </CardContainer>

  )
}

export default Card