import styled from "styled-components";

const WeCanMakeADifferenceContainer = styled.section`
    background-color: var(--clr-bgNeutral);
    width: 100%; 
    min-height: fit-content; 
    margin: 2.5rem auto; 
`

const ContentWrapper = styled.div`
    margin: auto; 
    width: 95%; 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 
    padding: 2rem 0; 
    @media (min-width: 1260px) {
        justify-content: space-between; 
    }
`

const StyledH4 = styled.h4`
    color: rgba(0, 0, 0, 0.25);
    text-align: center; 
    padding: 0.7rem 1rem; 
    @media (min-width: 1260px) {
        padding: 0 1rem; 
    }
`

const StyledSpan = styled.span`
    color: var(--clr-primary-200);
`

export {WeCanMakeADifferenceContainer, StyledH4, StyledSpan, ContentWrapper}; 