import {
  HeroImage,
  MainTopSectionContainer,
  InnerTopContainer,
  AboutUsMainContainer,
  AboutUsLeftContainer,
  AboutUsOrangeTitle,
  AboutUsBlackTitle,
  AboutUsParagraph,
  AboutUsRightContainer,
  AboutUsBoldText,
  TopContainer,
  FormContainer,
  Form,
  FormTitle,
  FirstLastNamesField,
  EmailAddressField,
  MessageField,
  FlexFirstLastWrapper,
  RegionMainContainer,
  RegionTopContainer,
  RegionBoldText,
  RegionNormalText,
  OrangeMapImage,
  RegionLeftContainer,
  RegionRightContainer,
  ReigionBottomContainer,
  RedMapImage,
  RedMapContainer,
  SixImagesContainer,
  SixImages,
  NamesFieldSpaceSpan,
  FacebookImage,
  InstagramImage,
  TwitterImage,
  LinkedInImage,
  MailImage,
} from "./Contact.styles";

import { ButtonComponent } from "../Button";
import PressRelease from "../PressSlate/PressComponent";
import HowWeHelp from "../HowWeHelp/HowWeHelp";
import WeCanMakeADifferenceComponent from "../WeCanMakeADifferenceComponent/WeCanMakeADifferenceComponent";
import DonationComponent from "../DonationComponent/DonationComponent";

const Contact = () => {
  return (
    <>
      <MainTopSectionContainer>
        <HeroImage
          src={"/ContactImgs/ContactHero.png"}
          width={3293}
          height={3277}
        ></HeroImage>
        <TopContainer>
          <InnerTopContainer>
            <AboutUsMainContainer>
              <AboutUsLeftContainer>
                <AboutUsOrangeTitle>About</AboutUsOrangeTitle>
                <AboutUsBlackTitle>us</AboutUsBlackTitle>

                <AboutUsBoldText>
                  With love and care from Tennessees
                </AboutUsBoldText>
              </AboutUsLeftContainer>

              <AboutUsRightContainer>
                <FacebookImage
                  src={"/ContactImgs/ContactFacebook.png"}
                  width={3293}
                  height={3277}
                ></FacebookImage>


                <InstagramImage
                  src={"/ContactImgs/ContactInstagram.png"}
                  width={3293}
                  height={3277}
                ></InstagramImage>

                <TwitterImage
                  src={"/ContactImgs/ContactTwitter.png"}
                  width={3293}
                  height={3277}
                ></TwitterImage>

                <LinkedInImage
                  src={"/ContactImgs/ContactLinkedIn.png"}
                  width={3293}
                  height={3277}
                ></LinkedInImage>

                <MailImage
                  src={"/ContactImgs/ContactMail.png"}
                  width={3293}
                  height={3277}
                ></MailImage>

              </AboutUsRightContainer>
            </AboutUsMainContainer>

            <AboutUsParagraph>
              Tennessee Harm Reduction (TNHR) is a community-based organization
              operating at the intersection of drug-user-centric public health
              (harm reduction), drug user advocacy, drug prevention, and drug
              policy reform. We run the first and only syringe exchange in West
              Tennessee outside of Memphis, which was founded in June 2021. We
              hope to obtain official Syringe Services Program (SSP) status,
              which is awarded by the Tennessee Department of Health, before
              Fall 2022. All we need is a local property owner to let us use
              their land for 2-3 hours, one day/week — we can make do with as
              little as 10' x 10'. If you can make this happen, reach out to us!
            </AboutUsParagraph>

            <FormContainer>
              <Form>
                <FormTitle>Any Question? Leave a message</FormTitle>
                <FlexFirstLastWrapper>
                  <FirstLastNamesField placeholder="First name"></FirstLastNamesField>

                  <NamesFieldSpaceSpan />

                  <FirstLastNamesField placeholder="Last name"></FirstLastNamesField>
                </FlexFirstLastWrapper>

                <EmailAddressField placeholder="Email address"></EmailAddressField>

                <MessageField></MessageField>

                <ButtonComponent>Submit</ButtonComponent>
              </Form>
            </FormContainer>
          </InnerTopContainer>
        </TopContainer>
      </MainTopSectionContainer>

      <PressRelease></PressRelease>
      <HowWeHelp></HowWeHelp>

      <RegionMainContainer>
        <RegionTopContainer>
          <RegionLeftContainer>
            <RegionBoldText>
              Host our region's only syringe exchange.
            </RegionBoldText>

            <RegionNormalText>
              We run non-Memphis West Tennesse's first and only syringe
              exchange, which was founded in June 2021. Constantly improve our
              website. Ever year, hundreds of Tennesseans reach out to us for
              help -- and tens of thousands of folks visit our website to learn
              about harm reduction
            </RegionNormalText>

            <RegionBoldText>
              Offer supply-by-mail to Tennesseans.
            </RegionBoldText>

            <RegionNormalText>
              We help Tennesseans access naloxone (aka NARCAN), fentanyl test
              strips, syringes, and safe injection supplies through our
              supply-by-mail program.
            </RegionNormalText>
          </RegionLeftContainer>

          <RegionRightContainer>
            <OrangeMapImage
              src={"/ContactImgs/ContactMap.png"}
              width={3293}
              height={3277}
            ></OrangeMapImage>
          </RegionRightContainer>
        </RegionTopContainer>

        <ReigionBottomContainer>
          <RegionBoldText>
            Host our region's only syringe exchange.
          </RegionBoldText>

          <RegionNormalText>
            We run non-Memphis West Tennesse's first and only syringe exchange,
            which was founded in June 2021. Constantly improve our website. Ever
            year, hundreds of Tennesseans reach out to us for help -- and tens
            of thousands of folks visit our website to learn about harm
            reduction
          </RegionNormalText>

          <RegionBoldText>Offer supply-by-mail to Tennesseans.</RegionBoldText>

          <RegionNormalText>
            We help Tennesseans access naloxone (aka NARCAN), fentanyl test
            strips, syringes, and safe injection supplies through our
            supply-by-mail program.
          </RegionNormalText>

          <RegionBoldText>Offer supply-by-mail to Tennesseans.</RegionBoldText>

          <RegionNormalText>
            We help Tennesseans access naloxone (aka NARCAN), fentanyl test
            strips, syringes, and safe injection supplies through our
            supply-by-mail program.
          </RegionNormalText>
        </ReigionBottomContainer>

        <RedMapContainer>
          <RedMapImage
            src={"/ContactImgs/ContactMap2.png"}
            width={3293}
            height={3277}
          ></RedMapImage>
        </RedMapContainer>

        <SixImagesContainer>
          <SixImages
            src={"/ContactImgs/ContactLogos.png"}
            width={3293}
            height={3277}
          ></SixImages>
        </SixImagesContainer>
      </RegionMainContainer>

      <WeCanMakeADifferenceComponent />
      <DonationComponent />
    </>
  );
};

export default Contact;
