import styled from 'styled-components';
import Image from 'next/image';

// Main section container
const SectionContainer = styled.section`
  width: 100%;
  background-color: green;
  display:flex;
  flex-direction: column;
  

  @media (min-width: 1060px) {
    display: flex;
    width: 100%;
    flex-direction: row;
}

`
// Inner container with title and 00people
const SectionInnerContainer = styled.div`


  @media (min-width: 351px){
    width: 100%;
    margin-left: 100px;
    margin-top: 100px;
   
    display:flex;
    flex-direction: column;
  }

`
// Outter 50% left container
const LeftContainer = styled.div`

  background-color: var(--clr-bgNeutral);
  font-family: 'Montserrat', sans-serif;
  display: flex;
  width: 100%;
  text-align:center;
  

  @media (min-width: 351px){
    background-color: var(--clr-bgNeutral);
    font-family: 'Montserrat', sans-serif;
    display: flex;
    width: 100%;
    
  }


  @media (min-width: 1060px) {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--clr-bgNeutral);
  
    width: 50%;
    display: flex;
}


`
// Left h2 
const LeftContainerH2 = styled.h2`
  margin-bottom: 50px;

`
// Orange "Matter" word in h2
const LeftContainerSpan = styled.span`
  color: var(--clr-primary-400);
`
// Outter container, containing BOTH Databox below
const MainDataBoxContainer = styled.div`
width: 100%;
display: flex;
margin-top: 10px;
`
// Inner left and right container with h3 and p
const DataBox = styled.div`
  width: 50%;
`
// Innermost container
const DataBoxContainer = styled.div`
  margin-bottom: 50px;
  gap: 10px 20px;
`
// Inner container with only orange text
const OrangeDataBoxContainer = styled(DataBoxContainer)`
color: var(--clr-primary-400);
`
// Outter 50% right container holding the image
const RightContainer = styled.div`
   
  width: 100%;
  background-color: red;

  @media (min-width: 1060px) {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--clr-bgNeutral);
  
    width: 50%;
    display: flex;
}

`
// container for image only on right side
const StyledImg = styled(Image)`

  width: 100%;
  height: 100%;
`

export { SectionContainer, SectionInnerContainer, LeftContainer, LeftContainerH2, LeftContainerSpan, MainDataBoxContainer, DataBox, DataBoxContainer, OrangeDataBoxContainer, RightContainer, StyledImg}

