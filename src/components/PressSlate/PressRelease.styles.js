import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";


const PressReleaseContainer = styled.section`
    width: 100%;
    height: 270px;
    background-color: var(--clr-bgNeutral);
    margin: 0 auto;

`

const PressReleaseInnerContainer = styled.div`
    width: 95%;
    margin: 0 auto;
`

const PressTitle = styled.h2`
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 1rem;
`

const PressParagraph = styled.p`
    text-align: center;
    padding-bottom: 1rem;
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 0 auto;
    
    margin-top: 5px;

    @media (min-width: 550px){
        width: 70%;

    }

    @media (min-width: 1060px) {
        display:flex;
        justify-content: center;
        margin-bottom: 4.5rem;
    }

`

const MyImage = styled(Image)`
    flex-wrap: wrap;
    width: 90%;
    margin-bottom: 15px;

    @media (min-width: 900px){
        width: 80%;
    }
   
    
    @media (min-width: 1060px) {
       
        margin-right: 2.2rem;
        margin-top: 2rem;
        align-self: flex-end;
        height: 50px;
        width: 220px;
    }
`
export {PressReleaseContainer, PressTitle, PressParagraph, ImageContainer, PressReleaseInnerContainer, MyImage}