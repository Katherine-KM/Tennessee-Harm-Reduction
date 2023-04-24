import styled from "styled-components";
import { ButtonComponent } from "../Button";

const DonationComponentContainer = styled.section`
    max-width: 90%;
    margin: auto; 
    height: 49rem;
    display: flex;
    align-items: center; 
`

const RightWrapper = styled.div`
    width: 48%; 
`

const LeftWrapper = styled.div`
    width: 52%; 
`

const WrapperDetails = styled.div`

`

const WrapperPayment = styled.div`
    width: 98%; 
    text-align: right; 
    position: relative; 
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

export {DonationComponentContainer, RightWrapper, LeftWrapper, WrapperDetails, WrapperPayment, StyledP, StyledColoredTitle, StyledTitle, StyledInput, StyledSpan, StyledButton};