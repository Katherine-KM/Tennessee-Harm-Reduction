import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%; 
    background-color: var(--clr-bgNeutral);
    min-height: 25rem;
    display: flex; 
    align-items: center; 
    padding-top: 2.5rem;
    padding-bottom: 2.5rem; 
`

const WhyDoesItMatterContainer = styled.div`
    margin: 0 auto; 
    width: 80%; 
    display: flex;
    flex-direction: column; 
`;

const StyledTitle = styled.h2`
    white-space: pre;
`;

const StyledColorTitle = styled(StyledTitle)`
  color: var(--clr-primary-400);
`;

const HeadingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: center; 
    margin-bottom: 2.5rem; 

    @media (min-width: 1060px) {
        justify-content: start;
      }
`;

const DetailsWrapper = styled.div``;

const StyledUl = styled.ul`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center;

    @media (min-width: 600px) {
        justify-content: space-between;
    }
`;

const StyledListItem = styled.li`
    list-style-type: none; 
    padding-right: 1rem;
    margin-bottom: 2rem;
`;

const StyledH3 = styled.h3`
color: ${props => props.detailColor === 'orange' ? 'var(--clr-primary-400)' : 'black'};
`;

const StyledP = styled.p`
color: ${props => props.detailColor === 'orange' ? 'var(--clr-primary-400)' : 'black'};
`;

export {
  Wrapper, 
  WhyDoesItMatterContainer,
  StyledTitle,
  StyledColorTitle,
  DetailsWrapper,
  StyledListItem,
  StyledH3,
  StyledP,
  StyledUl,
  HeadingWrapper
};
