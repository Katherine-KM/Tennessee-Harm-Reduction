import styled from "styled-components";
import Image from "next/image";

const AccessAndTreatmentContainer = styled.section`
    max-width: 90%;
    margin: 2.5rem auto; 
    height: fit-content;
    display: flex;
    align-items: center; 
    flex-direction: column-reverse; 
    justify-content: space-between;

    @media (min-width: 1060px) {
        flex-direction: row; 
        justify-content: center; 
    }
`

const LeftWrapper = styled.div`
    text-align: center;
    width: 100%; 
    height: 100%;
    @media (min-width: 1060px) {
        width: 50%; 
        margin-right: 2%;
        text-align: left; 
    }
`

const RightWrapper = styled.div`
    display: flex;
    align-self: stretch;
    @media (min-width: 1060px) {
        width: 48%; 
    }
`

const WrapperDetails = styled.div`

`

const StyledColorTitle = styled.h2`
    color: var(--clr-primary-200);
    display: inline-block;  
`

const StyledTitle = styled.h2`
    display: inline-block;
    margin-bottom: 2rem; 
`

const StyledP = styled.p`
    margin-bottom: 2rem; 
`

const StyledBoldP = styled(StyledP)`
    font-weight: 700; 
`

const ImageWrapper = styled.div`
    width: 100%;
    margin: 0 auto 2rem; 

    @media ((min-width:900px) and (max-width: 1060px)) {
        width: 90%;
    }
    
    @media (min-width: 1060px) {
        display: flex;
        align-self: stretch;
        margin: 0 auto; 
    }
    
`

const StyledImage = styled(Image)`
    align-self: stretch;
    height: 100%;
    width: 100%;
`
export {AccessAndTreatmentContainer, LeftWrapper, WrapperDetails, StyledColorTitle, StyledTitle, StyledP, StyledBoldP, RightWrapper, ImageWrapper, StyledImage};