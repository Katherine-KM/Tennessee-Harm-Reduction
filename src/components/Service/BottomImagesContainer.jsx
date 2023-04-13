import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const MainTopContainer = styled.div`
    display:flex;
    width: 100%;
    min-height: 500px;
    // background-color: blue;
    // border: 6px blue solid;

    margin-bottom: 80px;
    padding: 40px;
    
`

const LeftHalfContainer = styled.div`
    width: 50%;
    min-height: 500px;
    // background-color: red;
`

const RightHalfContainer = styled.div`
    width: 50%;
    min-height: 500px;

    // background-color: green;
`

const InnerImageContainer = styled.div`
    width: 90%;
    min-height: 400px;
    background-color: red;
    margin: 90px auto;
    position: relative;
`

const TextContainer = styled.div`
    width: 90%;
    min-height: 360px;
    background-color: green;
    margin: 0 auto;
    
    position: absolute;
    top: 300px;
    left:30px;   
`

const InnerTextContainer = styled.div`
    text-align:center;
    padding: 50px;
`

const BottomImagesContainer = ({
    h1Text3,
    paraText3,
    buttonText1,
    buttonText2,

    buttonText,
    buttonSize,
    buttonBgColor,
    buttonFontColor,

    h1Text4,
    paraText4,

}) => {
  return (
    <>
  
    <MainTopContainer>
        <LeftHalfContainer>
            <InnerImageContainer>
                <TextContainer>
                    <InnerTextContainer>
                    <h1 style={{fontSize: 'var(--h1-fs)',marginBottom: '20px'}}>{h1Text3}</h1>

                    <p style={{fontSize: 'var(--p-md-fs)', marginBottom: '40px'}}>{paraText3}</p>
                        <Button
                       size={buttonSize}
                       BgColor={buttonBgColor}
                       FontColor={buttonFontColor}
                        >fdsfsfds</Button>
                    </InnerTextContainer>
                </TextContainer>
            </InnerImageContainer>
        </LeftHalfContainer>

        <RightHalfContainer>
            <InnerImageContainer>
                <TextContainer>
                <InnerTextContainer>
                    <h1 style={{fontSize: 'var(--h1-fs)',marginBottom: '20px'}}>{h1Text4}</h1>

                    <p style={{fontSize: 'var(--p-md-fs)', marginBottom: '40px'}}>{paraText4}</p>
                        <Button
                       size={buttonSize}
                       BgColor={buttonBgColor}
                       FontColor={buttonFontColor}
                        >fdsfsfds</Button>
                    </InnerTextContainer>
                </TextContainer>
            </InnerImageContainer>
        </RightHalfContainer>
    </MainTopContainer>

    </>
  )
}

export default BottomImagesContainer