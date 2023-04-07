import styled from 'styled-components';
import Button from '../Button';

const CardContainer = styled.div`
    display: flex;
    // flex-direction: column;
    // width: 260px;
    
    height: 320px;
    // margin-right: 38px;
    background-color: var(--clr-bgNeutral);
    border-radius: 5px;
    text-align: center;
    letter-spacing: -0.015em;
    // background: rgba(247, 213, 186, 0.22);
    position: relative;
    

    
`

const H3Title = styled.h3`
color: ${props => props.fontColor};
font-size: 26px;
`
const H3Title2 = styled(H3Title)`

`


const Card = ({titleOne, titleTwo, paragraph, fontColor}) => {
  return (

    <CardContainer>
        <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>

            <H3Title fontColor={fontColor} style={{marginTop: '10px', fontSize: 'var(--h4-link-fs)' }}>{titleOne}</H3Title>

            <H3Title2 fontColor={fontColor} style={{marginBottom: '6px', lineHeight: '40px', fontSize: 'var(--h4-link-fs)'}}>{titleTwo}</H3Title2>

            <p style={{marginBottom: '20px', fontSize: 'var(--p-sm-fs)' }}>{paragraph}</p>

            <div style={{  bottom:'40px', right: '60px' }}>
            <Button size="sm" bgColor='var(--clr-primary-400)' fontColor='white'>learn more</Button>
            </div>
        </div>
    </CardContainer>

  )
}

export default Card