import styled from "styled-components";
import Image from "next/image";

// Hero Image at the top
const HeroImage = styled(Image)`
  height: 204px;
  margin-bottom: 40px;
  width: 100%;
`;

// Contains image, about us section, contact at the top
const MainTopSectionContainer = styled.section`
  margin: 0 auto;
  `;
  
  // contains about us and contact section
  const TopContainer = styled.div`
  width: 100%;
  height: 80rem;
  margin-bottom: 50px;
`;
// contains and centers top container
const InnerTopContainer = styled.section`
  width: 80%;
  margin: 0 auto;
`;

// Entire about us section container
const AboutUsMainContainer = styled.section`
  display: flex;
`;

// Only contains title and paragraph for about us section
const AboutUsLeftContainer = styled.div`
  width: 50%;
  height: 100px;
`;

// Social media icon container
const AboutUsRightContainer = styled.div`
  width: 50%;
  height: 100px;
  margin-left: 440px;
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
  font-size: var(--p-md-fs);
  line-height: clamp(2.7rem, 5vw, 2.2rem);
  margin-bottom: 40px;
  width: 1138px;
//   border: 5px solid red;
`;

// Contact form container
const FormContainer = styled.section`
  border: 3px solid black;
  width: 1123px;
  height: 520px;
`;
// Centers inner contact form elements
const Form = styled.section`
  margin: 0 auto;
  width: 80%;
`;

// Form bold title
const FormTitle = styled.h3`
  margin: 30px 0;
`;

// sets first/last name containers into a row
const FlexFirstLastWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

// span to create space in between containers
const NamesFieldSpaceSpan = styled.span`
  width: 40px;
`;

// input field for both first/last names
const FirstLastNamesField = styled.input`
  width: 50%;
  height: 40px;
  border: 1px solid black;
`;

// input field for email address
const EmailAddressField = styled.input`
  width: 891px;
  height: 40px;
  border: 1px solid black;
  margin-bottom: 20px;
`;

// main text box for contact form in "About us" section
const MessageField = styled.textarea`
  width: 891px;
  height: 202px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

// Outter container for map section
const RegionMainContainer = styled.section``;

// Outter top container for left map text and right orange map
const RegionTopContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
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
  width: 487px;
  height: 332px;
`;

// Red map image
const RedMapImage = styled(Image)`
  width: 757px;
  height: 211px;
  //   border: 3px solid blue;
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
  //   border: 6px solid red;
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
