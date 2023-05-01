import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";

const MainTopContainer = styled.div`
// border: 4px solid purple;
// postion: relative;
marin-top: 50px;
width: 100%;
min-height: 650px;


`;


const ImageTextContainer = styled.div`
// border: 6px solid green;
display: inline-block;
width: auto;
position: relative;

`

const ImageContainer = styled.div`
    width: 614px;
    height: 311px;
    background-color: red;
    
`

const MyImage = styled(Image)`
width: 100%;
height: 100%;
`

const TextContainer = styled.div`
    width: 556px;
    height: 332px;
    background-color: var(--clr-bgNeutral);
    margin: 0 auto;
    position: absolute;
    top: 260px;
    left: 30px;   
`
const InnerTextContainer = styled.div`
    // border: 4px solid red;
    width: 90%;
    height: 90%;
    margin: 0 auto;
`

const H2TitleContainer = styled.h2`
text-align: center;
margin-bottom: 20px;
margin-top: 20px;

`

const ParagraphContainer = styled.p`
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 30px;
`
//ButtonContainer2

const FlexButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    margin: 0 auto;
`

const ButtonContainer1 = styled(ButtonComponent)`
margin-bottom: 5px;
`

const ButtonContainer2 = styled(ButtonComponent)`

`
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 80px;
    // margin-left: 60px;
   
    
`

const ImageTextWrapper = styled.div`
    // border: 4px solid skyblue;
    width: 600px;
    height: 400px;
    margin: 0 auto;
`




export {MainTopContainer, ImageContainer, TextContainer, ImageTextContainer, GridContainer, MyImage, InnerTextContainer, H2TitleContainer, ParagraphContainer,
ButtonContainer1, ButtonContainer2, FlexButtonsContainer,
ImageTextWrapper }