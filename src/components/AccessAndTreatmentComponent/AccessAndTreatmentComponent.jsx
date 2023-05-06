import React from 'react'
import {AccessAndTreatmentContainer, LeftWrapper, WrapperDetails, StyledColorTitle, StyledTitle, StyledP, StyledBoldP, RightWrapper, ImageWrapper, StyledImage} from './AccessAndTreatmentComponent.styles'
import Button from '../Button'

const AccessAndTreatmentComponent = ({coloredTitleText, titleText, styledPText, pText, imageDetails}) => {
  return (
    <AccessAndTreatmentContainer> 
        <LeftWrapper>
            <WrapperDetails>
                <StyledColorTitle>{`${coloredTitleText}`}</StyledColorTitle>
                
                <StyledTitle>{titleText}</StyledTitle>
                <StyledBoldP>{styledPText}</StyledBoldP>
                <StyledP>{pText}</StyledP>
                <Button> learn more </Button>
            </WrapperDetails>
        </LeftWrapper>
        <RightWrapper>
            <ImageWrapper>
                <StyledImage src={imageDetails.URL} width={686} height={311} alt={imageDetails.alt}></StyledImage>
            </ImageWrapper>
        </RightWrapper>
    </AccessAndTreatmentContainer>
  )
}

export default AccessAndTreatmentComponent