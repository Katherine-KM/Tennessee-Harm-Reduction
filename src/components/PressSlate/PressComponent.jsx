import { PressReleaseContainer, PressTitle, PressParagraph, ImageContainer, MyImage, PressReleaseInnerContainer } from "./PressRelease.styles"

import { PressImageArray } from "./PressImageArray"

const PressRelease = () => {
  return (
    <PressReleaseContainer>
        <PressReleaseInnerContainer>
        <PressTitle>
            Press Release
        </PressTitle>

        <PressParagraph>
        related to Tennessee harm reduction, click in to learn more
        </PressParagraph>

        <ImageContainer>
            {PressImageArray.map((image, idx) => (
            
                    <MyImage className="ImageClass"
                    src={image.imgSrc} 
                    width={image.width}
                    height={image.height}>

                    </MyImage>
            ))}
            

        </ImageContainer>
        </PressReleaseInnerContainer>
    </PressReleaseContainer>
  )
}

export default PressRelease