import {
  MainMidSectionContainer,
  InnerMidSectionContainer,
  LabelRowContainer,
  InnerLabelRowContainer,
  InnerSpan,
  InnerImagesContainer,
  ResourcesCard,
  ImageContainer,
  TextWrapper,
  BoldSpan1,
  BoldSpan2,
  Paragraph,
  MyImage,
  FentanylWrapper,
  FentanylSpan
} from "./Resources.styles";

import { ResourcesCardArray } from "./ResourcesArray";

const Resources = () => {
  return (
    <>
      <MainMidSectionContainer>
        <InnerMidSectionContainer>
          <LabelRowContainer>
            <InnerLabelRowContainer>
              <InnerSpan>All</InnerSpan>
              <InnerSpan>Syringe</InnerSpan>
              <InnerSpan>Naloxone</InnerSpan>
              <InnerSpan>Treatment</InnerSpan>
              <InnerSpan>Policy</InnerSpan>
              <FentanylWrapper>
                <FentanylSpan>Fentanyl</FentanylSpan>
                <FentanylSpan>Test</FentanylSpan>
                <FentanylSpan>Strips</FentanylSpan>
              </FentanylWrapper>
              
              <InnerSpan>Guides</InnerSpan>
              <InnerSpan>Media</InnerSpan>
              <InnerSpan>Blog</InnerSpan>
            </InnerLabelRowContainer>
          </LabelRowContainer>

          <InnerImagesContainer>
            {ResourcesCardArray.map((Card, idx) => (
              <>
                <ResourcesCard>
                  <ImageContainer>
                    <MyImage
                      key={idx}
                      className="ImageClass"
                      src={Card.imgSrc}
                      width={Card.width}
                      height={Card.height}
                    ></MyImage>
                  </ImageContainer>
                  <TextWrapper>
                    <BoldSpan1>Sed ut perspiciatis</BoldSpan1>

                    <BoldSpan2>unde omnis</BoldSpan2>

                    <Paragraph>
                      sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet.
                    </Paragraph>
                  </TextWrapper>
                </ResourcesCard>
              </>
            ))}
          </InnerImagesContainer>
        </InnerMidSectionContainer>
      </MainMidSectionContainer>
    </>
  );
};

export default Resources;
