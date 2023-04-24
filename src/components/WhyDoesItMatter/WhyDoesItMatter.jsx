import styled from 'styled-components';
import Image from 'next/image';

const SectionContainer = styled.section`
  width: 100%;
  background-color: green;
  display:flex;

`

const SectionInnerContainer = styled.div`
  // border: 5px solid purple;
  // max-height: 400px;
  // margin: auto;
  width: 100%;
  margin-left: 100px;
  margin-top: 100px;
 
  display:flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
`

const LeftContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: var(--clr-bgNeutral);

  width: 50%;
  display: flex;
`

const LeftContainerH2 = styled.h2`
  margin-bottom: 50px;

`

const LeftContainerSpan = styled.span`
  color: var(--clr-primary-400);
`

const MainDataBoxContainer = styled.div`
width: 100%;
display: flex;
margin-top: 10px;
`
const DataBox = styled.div`
  width: 50%;
`

const DataBoxContainer = styled.div`
  margin-bottom: 50px;
  // margin-left: 100px;
  gap: 10px 20px;
`

const OrangeDataBoxContainer = styled(DataBoxContainer)`
color: var(--clr-primary-400);
`

const RightContainer = styled.div`
  width: 50%;
  background-color: red;
`

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`
const WhyDoesItMatter = ({
  imgSrc,
  imgAltText,
  imgHeight,
  imgWidth,
  }) => {
  return (
    <>
    
    <SectionContainer>
      
        <LeftContainer>
          <SectionInnerContainer>
            {/* This div contains the entire "Why does it matter" container */}
           
              <LeftContainerH2>
              Why does it <LeftContainerSpan>Matter</LeftContainerSpan>
              </LeftContainerH2>
           
            {/* This div contains all of the "00 People" tags */}
            {/* MainDataBoxContainer */}
            <MainDataBoxContainer>
       
            {/* Box for left side 00 People */}
           <DataBox>
                <OrangeDataBoxContainer>
                <h3>00 People</h3>
                <p className='p-md'>use drugs every year</p>
                </OrangeDataBoxContainer>
               
                <DataBoxContainer>
                <h3>00 People</h3>
                <p className='p-md'>use drugs every year</p>
                </DataBoxContainer>
                
            </DataBox>

             {/* Box for right side 00 People */}
             <DataBox>
                
                <DataBoxContainer>
                <h3>00 People</h3>
                <p className='p-md'>use drugs every year</p>
                </DataBoxContainer>

                <OrangeDataBoxContainer>
                <h3>00 People</h3>
                <p className='p-md'>use drugs every year</p>
                </OrangeDataBoxContainer>
                
              </DataBox>
              </MainDataBoxContainer>
        
          
            </SectionInnerContainer>
        </LeftContainer>

        <RightContainer>
          <StyledImg
            src={imgSrc}
            alt={imgAltText}
            height={imgHeight}
            width={imgWidth}
           >
          </StyledImg>
        </RightContainer>
     
    </SectionContainer>
    
    </>
  )
 
}

export default WhyDoesItMatter