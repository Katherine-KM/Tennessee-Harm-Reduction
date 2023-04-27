import { PressReleaseContainer, PressTitle, PressParagraph, ImageContainer, MyImage } from "./PressRelease.styles"

import { PressImageArray } from "./PressImageArray"

const PressRelease = () => {
  return (
    <PressReleaseContainer>
        <PressTitle>
            Press Release
        </PressTitle>

        <PressParagraph>
        related to Tennessee harm reduction, click in to learn more
        </PressParagraph>

        <ImageContainer>
            {PressImageArray.map((image, idx) => (
            
                    <MyImage 
                    src={image.imgSrc} 
                    width={1000}
                    height={100}>

                    </MyImage>
            ))}
            

        </ImageContainer>
    </PressReleaseContainer>
  )
}

export default PressRelease