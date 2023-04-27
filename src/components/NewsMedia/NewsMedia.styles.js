import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";



const NewsMediaContainer = styled.section`
    max-width: 100%;
    min-height: 49rem;
`

const NewsTitleContainer = styled.h2`
    text-align: center;
    width: 25%;
    margin: 50px auto;
`

const MainImageTextContainer = styled.section`
    display: grid;
    padding-bottom: 4rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
    width: 500px;

    @media (min-width: 1060px) {
        width: 1000px;
        height: 400px;
        margin: 0 auto;
        margin-bottom: 50px;
        display: flex;
        gap: 50px;
    }
  
`

const ImageTextWrapper = styled.div`
// border: 2px solid green;
    width: 226px;
    height: 400px;
`

const ImageBox = styled.div`
// border: 2px solid orange;
    width: 226px;
    height: 185px;
    margin-bottom: 20px;
`

 const MyImage = styled(Image)`
    width: 100%;
    height: 100%;
`
const TextBox = styled.div`
    // border: 2px solid red; 
    width: 226px;
    height: 110px;
    font-weight: bold;
    // margin-bottom: 10px;
`

const TagBox = styled.div`
// border: 2px solid blue;
    width: 226px;
    height: 30px;
`

export { NewsMediaContainer, NewsTitleContainer, MainImageTextContainer,ImageTextWrapper, ImageBox, TextBox, TagBox, MyImage }