import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";

const NewsMediaContainer = styled.section`
    max-width: 100%;
    // margin: auto; 
    min-height: 49rem;
    // display: flex;
    // align-items: center; 
    // flex-direction: column-reverse; 
    border: 3px solid blue;
    
    @media (min-width: 1060px) {
        
    }
`

const NewsTitleContainer = styled.h2`
    text-align: center;
    border: 3px solid red;
    width: 25%;
    margin: 50px auto;
`

const MainImageTextContainer = styled.section`
    width: 1300px;
    height: 400px;
    border: 4px solid purple;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    gap: 50px;
`

const ImageTextWrapper = styled.div`
    width: 226px;
    height: 400px;
    border: 2px solid green;
`

const ImageBox = styled.div`
    width: 226px;
    height: 185px;
    border: 2px solid orange;
    margin-bottom: 20px;
`
const TextBox = styled.div`
    width: 226px;
    height: 145px;
    border: 2px solid red;
    margin-bottom: 10px;
`

const TagBox = styled.div`
    width: 226px;
    height: 30px;
    border: 2px solid blue;
`

export { NewsMediaContainer, NewsTitleContainer, MainImageTextContainer,ImageTextWrapper, ImageBox, TextBox, TagBox }