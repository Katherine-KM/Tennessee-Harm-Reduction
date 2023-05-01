import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";

// Big container with image,text, and other containers
const MainTopContainer = styled.div`
marin-top: 50px;
min-height: 650px;
`;

// Outter container for image to keep its position
const ImageTextContainer = styled.div`
display: inline-block;
width: auto;
position: relative;

`
// inner image container
const ImageContainer = styled.div`
width: 314px;
height: 211px;


    @media (min-width: 640px){
        width: 614px;
        height: 311px;
        background-color: red;
    }
    
`

// Container centers the image with absolute-pos text
const ImageTextWrapper = styled.div`
    // border: 4px solid skyblue;
    width: 600px;
    height: 400px;
    margin: 0 auto;
`

// The image itself
const MyImage = styled(Image)`

width: 100%;
height: 100%;
`

// Outter text container containing title, buttons etc.
const TextContainer = styled.div` 
background-color: var(--clr-bgNeutral);

    @media (min-width: 351px){
    width: 556px;
    height: 332px;
    background-color: var(--clr-bgNeutral);
    margin: 0 auto;
    position: absolute;
    top: 260px;
    left: 30px; 
    }
`
// Inner text container containing title, buttons etc.
const InnerTextContainer = styled.div`
    width: 90%;
    height: 90%;
    margin: 0 auto;
`
// h2 container
const H2TitleContainer = styled.h2`
text-align: center;
margin-bottom: 20px;
margin-top: 20px;

`

// paragraph container
const ParagraphContainer = styled.p`
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 30px;
`

// Outtermost container for both buttons
const FlexButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    margin: 0 auto;
`
// Top button container
const ButtonContainer1 = styled(ButtonComponent)`
margin-bottom: 5px;
`

// Bottom button container. No styles applied
const ButtonContainer2 = styled(ButtonComponent)`

`

// Container that will shift between grid and flex display
const GridContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 80px;

    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        margin-top: 80px;
    
    }
`


export {MainTopContainer, ImageContainer, TextContainer, ImageTextContainer, GridContainer, MyImage, InnerTextContainer, H2TitleContainer, ParagraphContainer,
ButtonContainer1, ButtonContainer2, FlexButtonsContainer,
ImageTextWrapper }