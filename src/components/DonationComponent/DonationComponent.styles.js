import styled from "styled-components";
import { ButtonComponent } from "../Button";
import Image from "next/image";

const DonationComponentContainer = styled.section`
    max-width: 90%;
    margin: auto; 
    min-height: 49rem;
    display: flex;
    align-items: center; 
    flex-direction: column-reverse; 

    @media (min-width: 1060px) {
        align-items: center;
        flex-direction: row; 
    }
`

const RightWrapper = styled.div` 
    width: 100%;

    @media (min-width: 800px) {
        width: 70%;
    }

    @media (min-width: 1060px) {
        min-height: inherit; 
        width: 48%;
    }
`



const LeftWrapper = styled.div`
    text-align: center; 
    width: 100%;

    @media (min-width: 800px) {
        width: 80%;
    }

    @media (min-width: 1060px) {
        text-align: left; 
        width: 52%;
    }
`

const WrapperDetails = styled.div`
    padding-right: 2rem; 
`

const WrapperPayment = styled.div`
    width: 98%; 
    text-align: center; 
    position: relative; 

    @media (min-width: 1060px) {
        text-align: right; 
    }
`

const StyledTitle = styled.h3`
    margin-bottom: 3rem; 
`

const StyledColoredTitle = styled.h3`
    color: var(--clr-primary-200);
    margin-bottom: 0.5rem; 
`

const StyledP = styled.p`
    font-weight:700;
    margin: 3rem 0;
`

const StyledInput = styled.input`
    width: 15rem;
    height: 5rem;
    margin-right: 1.2rem; 
    padding: 0 2.8rem; 
    font-size: 1.6rem; 
`

const StyledSpan = styled.span`
    position: absolute; 
    inset: calc(50% - 1rem) 25.4rem 0 0;
    font-size: 1.6rem; 
`

const StyledButton = styled(ButtonComponent)`
    padding: 0.6rem 3.5rem; 
    letter: -1.5%;
`

const ImageWrapper = styled.div` 
    margin: 5.5rem auto; 
`

const StyledImage = styled(Image)`
    display: block; 
    height: 100%; 
    width: 100%; 
    margin: 0 auto; 

    @media (min-width: 1060px) {
        width: 70%;
        max-height: 277px;
        max-width: 393px;
    }
`

export {DonationComponentContainer, RightWrapper, LeftWrapper, WrapperDetails, WrapperPayment, StyledP, StyledColoredTitle, StyledTitle, StyledInput, StyledSpan, StyledButton, ImageWrapper, StyledImage};