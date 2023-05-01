import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";



const NewsMediaContainer = styled.section`
    max-width: 100%;
    min-height: 49rem;
`

const NewsTitleContainer = styled.h2`
    text-align: center;
    margin: 50px auto;

    @media (min-width: 351px){
        text-align: center;
        width: 25%;
        margin: 50px auto;
    }
   
`

const MainImageTextContainer = styled.section`
    display: grid;
    padding-bottom: 4rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;


    display: flex;
    flex-direction: column;
 

    @media (min-width: 351px) { 
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        padding-bottom: 4rem;
        margin: auto;
        width: 500px;

    }

    @media (min-width: 1060px) {
        display: flex;
        flex-direction: row;

        width: 1000px;
        height: 400px;
        margin: 0 auto;
        margin-bottom: 50px;
        gap: 50px;
    }
  
`

const ImageTextWrapper = styled.div`
    margin: 0 auto;

    @media (min-width: 351px){
        width: 226px;
        height: 400px;
    }

`

const ImageBox = styled.div`
    width: 226px;
    height: 185px;
    margin-bottom: 20px;
`

 const MyImage = styled(Image)`
    width: 100%;
    height: 100%;
`
const TextBox = styled.div`
    width: 226px;
    height: 110px;
    font-weight: bold;
`

const TagBox = styled.div`
    width: 226px;
    height: 30px;
`

export { NewsMediaContainer, NewsTitleContainer, MainImageTextContainer,ImageTextWrapper, ImageBox, TextBox, TagBox, MyImage }