import styled from 'styled-components';
import Image from 'next/image';


import { SectionContainer, SectionInnerContainer, LeftContainer, LeftContainerH2, LeftContainerSpan, MainDataBoxContainer, DataBox, DataBoxContainer, OrangeDataBoxContainer, RightContainer, StyledImg, } from "./WhyDoesItMatter.styles"


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