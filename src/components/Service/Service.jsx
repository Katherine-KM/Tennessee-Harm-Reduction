import { MainTopContainer, ImageContainer, TextContainer, ImageTextContainer, GridContainer, MyImage, InnerTextContainer, H2TitleContainer, ParagraphContainer,
ButtonContainer1, ButtonContainer2, FlexButtonsContainer,
ImageTextWrapper  } from "./Service.styles"

import { ServiceArray } from "./ServiceImageArray"
import React from 'react'

const Service = () => {
  return (
    <> 
    <GridContainer>
        {ServiceArray.map((content, idx) => (
            <>
        <MainTopContainer>
            <ImageTextWrapper>
            <ImageTextContainer>
                <ImageContainer>
                    <MyImage 
                    key={idx}
                    src={content.imgSrc} 
                    width={393} 
                    height={277}
                    />
   
                    <TextContainer>
                        <InnerTextContainer>
                            <H2TitleContainer>
                                {content.h2Text}
                            </H2TitleContainer>

                            <ParagraphContainer>
                                {content.paraText}
                            </ParagraphContainer>

                            <FlexButtonsContainer>
                            <ButtonContainer1>
                                {content.buttonText1}
                            </ButtonContainer1>

                            <ButtonContainer2>
                                {content.buttonText2}
                            </ButtonContainer2>
                            </FlexButtonsContainer>
                        </InnerTextContainer>
                    </TextContainer>
                </ImageContainer>
            </ImageTextContainer> 
            </ImageTextWrapper>  
        </MainTopContainer>
            
            </>

        ))}
        
        </GridContainer>
        

    
       

      
    </>
  )
}

export default Service