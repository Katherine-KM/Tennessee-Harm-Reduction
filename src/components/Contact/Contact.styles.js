import styled from "styled-components";
import Image from "next/image";

// Hero Image at the top
const HeroImage = styled(Image)`
  width: 100%;
  height: 204px;
  margin-bottom: 40px;
`;

// Contains image, about us section, contact at the top
const MainTopSectionContainer = styled.section`
  width: 100%;
  margin-bottom: 550px;

  @media (min-width: 400px) {
    margin-bottom: 480px;
  }

  @media (min-width: 520px) {
    margin-bottom: 400px;
  }

  @media (min-width: 680px) {
    margin-bottom: 180px;
  }
`;

// contains about us and contact section
const TopContainer = styled.div`
  height: 80rem;

  @media (min-width: 320px) {
  }

  @media (min-width: 769px) {
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    width: 80%;
  }

  margin-bottom: 50px;
`;
// contains and centers top container
const InnerTopContainer = styled.section`
  @media (min-width: 320px) {
  }
  @media (min-width: 769px) {
  }

`;

// Entire about us section container
const AboutUsMainContainer = styled.section`
  display: flex;

  @media (min-width: 320px) {
    text-align: center;
    margin-bottom: 2rem;
    flex-direction: column;
  }

  @media (min-width: 769px) {
    text-align: inherit;
    width: 100%;

    margin-bottom: 2rem;
  }

  @media (min-width: 760px) {
    flex-direction: row;
  }

  width: 100%;

`;

// Only contains title and paragraph for about us section
const AboutUsLeftContainer = styled.div`
  @media (min-width: 320px) {
    width: auto;
  }

  @media (min-width: 703px) {
    width: 703px;
    width: auto;
  }

  @media (min-width: 760px) {
    width: 50%;
  }
  width: 50%;
  height: 100px;
`;

// Social media icon container
const AboutUsRightContainer = styled.div`
  height: 100px;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    width: 10%;
  }

`;

// Circular social media icon - Facebook
const FacebookImage = styled(Image)`
  height: 56px;
  width: 56px;
`;

// Circular social media icon - Instagram
const InstagramImage = styled(Image)`
  height: 56px;
  width: 56px;
`;

// Circular social media icon - Twitter
const TwitterImage = styled(Image)`
  height: 56px;
  width: 56px;
`;

// Circular social media icon - LinkedIn
const LinkedInImage = styled(Image)`
  height: 56px;
  width: 56px;
`;

// Circular social media icon - Mail
const MailImage = styled(Image)`
  height: 56px;
  width: 56px;
`;

// Orange "About" text
const AboutUsOrangeTitle = styled.h3`
  @media (min-width: 320px) {
    text-align: center;
  }

  @media (min-width: 769px) {
  }
  color: orange;
  display: inline;
  margin-right: 10px;
`;

// Black "us" text
const AboutUsBlackTitle = styled.h3`
  color: black;
  display: inline;
`;

// small bold paragraph under "About us" text
const AboutUsBoldText = styled.p`
  font-weight: bold;
`;

// paragraph for "About us" section
const AboutUsParagraph = styled.p`
  margin-bottom: 40px;
  @media (min-width: 320px) {
  }

  @media (min-width: 321px) {
    font-size: var(--p-md-fs);
    width: 100%;
  }

  @media (min-width: 1260px) {
    font-size: var(--p-md-fs);
  }

`;

// Contact form container
const FormContainer = styled.section`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;

    height: 640px;
    border: 3px solid black;
  }
`;
// Centers inner contact form elements
const Form = styled.section`
  @media (min-width: 320px) {
    width: 80%;
    margin: 0 auto;
  }
`;

// Form bold title
const FormTitle = styled.h3`
  margin: 30px 0;
`;

// sets first/last name containers into a row
const FlexFirstLastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row;
    margin-bottom: 10px;
  }
`;

// span to create space in between containers
const NamesFieldSpaceSpan = styled.span`
  @media (min-width: 769px) {
    width: 40px;
  }
`;

// input field for both first/last names
const FirstLastNamesField = styled.input`
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  border: 1px solid black;

  @media (min-width: 769px) {
    margin-bottom: 20px;
  }
`;

// input field for email address
const EmailAddressField = styled.input`
  width: 80%;
  margin: 0 auto;
  height: 40px;
  border: 1px solid black;
  margin-bottom: 20px;

  @media (min-width: 891px) {
    width: 100%;
  }
`;

// main text box for contact form in "About us" section
const MessageField = styled.textarea`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 891px) {
    width: 100%;
  }
  height: 202px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

// Outter container for map section
const RegionMainContainer = styled.section``;

// Outter top container for left map text and right orange map
const RegionTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

// Inner top container for left map text
const RegionLeftContainer = styled.div`
  margin-top: 30px;
  margin-right: 60px;
  width: 55%;
  padding-left: 100px;
`;

// Outter bottom container for bottom map text
const ReigionBottomContainer = styled.div`
  padding-left: 100px;
  width: 80%;
  margin: 0 auto;
`;

// Inner top container for right orange map
const RegionRightContainer = styled.div`
  margin-top: 60px;
  width: 50%;
`;

// All bold paragraph text in map section
const RegionBoldText = styled.p`
  font-size: var(--p-md-fs);
  font-weight: bold;
  margin-bottom: 20px;
`;

// All regular paragraph text in map section
const RegionNormalText = styled.p`
  font-size: var(--p-md-fs);
  line-height: clamp(2.7rem, 5vw, 2.2rem);
  margin-bottom: 20px;
`;

// Orange map image
const OrangeMapImage = styled(Image)`
  width: 300px;
  height: 332px;

  @media (min-width: 400px) {
    width: 487px;
  }
`;

// Red map image
const RedMapImage = styled(Image)`
  width: 757px;
  height: 211px;
`;

// Container for red map image
const RedMapContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
`;

// Contains and centers the six logo images
const SixImagesContainer = styled.div`
  width: 80%;
  display: flex;

  margin: 0 auto;
  margin-bottom: 50px;
`;

// six logo images
const SixImages = styled(Image)`
  width: 100%;
  height: 211px;
`;

export {
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
};
