import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";


const PressReleaseContainer = styled.section`
    width: 100%;
    height: 270px;
    background-color: var(--clr-bgNeutral);
    // border: 3px solid red;
`

const PressTitle = styled.h2`
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
`

const PressParagraph = styled.p`
    text-align: center;
    padding-bottom: 1rem;
`

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    @media (min-width: 1060px) {
        display:flex;
        justify-content: center;
    }
`

const MyImage = styled(Image)`
    flex-wrap: wrap;
    width: 60%;
    height: 80%;
    
    @media (min-width: 1060px) {
        width: 15%;
        height: auto;
        margin-right: 2.2rem;
    
        align-self: flex-end;
    }
`
export {PressReleaseContainer, PressTitle, PressParagraph, ImageContainer, MyImage}