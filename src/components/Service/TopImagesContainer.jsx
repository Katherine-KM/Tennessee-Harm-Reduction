import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";
import InnerImageContainerComponent from "./InnerImageContainerComponent";

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
    background-color: #766c93;
    margin: 90px auto;
    position: relative;
`

const TextContainer = styled.div`
    width: 90%;
    min-height: 360px;
    background-color: #664db3;
    margin: 0 auto;
    
    position: absolute;
    top: 300px;
    left:30px;   
`

const InnerTextContainer = styled.div`
    text-align:center;
    padding: 50px;
`

const TopImagesContainer = ({
    h1Text1,
    paraText1,
    buttonText1,
    buttonText2,

    buttonText,
    buttonSize,
    buttonBgColor,
    buttonFontColor,

    h1Text2,
    paraText2,

}) => {
  return (
    <>
  
    <MainTopContainer>
        <LeftHalfContainer>
        <InnerImageContainerComponent
                h1Text='Provide Supplies'
                pText="A demand-driven or a participant-driven model travel around  Tennessee doing outreach harm reduction supply"
                buttonSize='xl'
                buttonBgColor='orange'
                buttonFontColor='white'
                buttonText='FREE access of Syringes'
                buttonText2='FREE access of Naloxone'
            />
        </LeftHalfContainer>

        <RightHalfContainer>
            <InnerImageContainerComponent
                h1Text = 'Supply by Mail'
                pText = "Sending free NARCAN kits, syringes, and fentanyl test strips by mail within whole United state to improving the health and welfare of Tennesseans who use drugs."
                buttonSize='xl'
                buttonBgColor='orange'
                buttonFontColor='white'
                buttonText='Basic Packages'
                buttonText2=''
            />
        </RightHalfContainer>
    </MainTopContainer>

    </>
  )
}

export default TopImagesContainer