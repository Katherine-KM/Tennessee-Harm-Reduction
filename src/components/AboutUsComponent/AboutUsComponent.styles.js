import styled from "styled-components";

const AboutUsContainer = styled.section`
    width: 90%; 
    margin: 2.5rem auto; 
    min-height: fit-content; 
`

const TitleWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const TitleRContainer = styled.div`

`

const TitleLContainer = styled.div`

`

const DetailsWrapper = styled.div`

`
const StyledColoredTitle = styled.h3`
color: var(--clr-primary-200);
display: inline-block;  
`
const StyledTitle = styled.h3`
display: inline-block; 
color: black; 
`

export {AboutUsContainer, TitleWrapper, TitleRContainer, TitleLContainer, DetailsWrapper, StyledColoredTitle, StyledTitle}; 