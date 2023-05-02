import styled from "styled-components";
import Image from "next/image";

// Section container that wraps everything in middle
const MainMidSectionContainer = styled.section`
  width: 100%;
  min-height: 1200px;
  
`;

// Inner section container
const InnerMidSectionContainer = styled.div`
  width: 80%;
  min-height: 1200px;
  margin: 8rem auto;
  
`;

// section that contains the labels above cards
const LabelRowContainer = styled.section`
  width: 100%;
  min-height: 100px;
  margin: 0 auto;
  
`;

// container that turns cards into grid
const InnerImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 40px 20px;
  

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 40px 20px;
  }
`;

// Image itself
const MyImage = styled(Image)`
  width: 100%;
  height: 100%;
  
`;
// Another container for label
const InnerLabelRowContainer = styled.div`
  width: 80%;
  
  min-height: 50px;
  font-size: var(--h4-link-fs);
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-bottom: 60px;
  }
`;

// Container for each label word above cards 
const InnerSpan = styled.span`

// border: 5px solid red;
  &:hover {
    color: orange;
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    margin-right: 40px;

    &:hover {
      color: orange;
      cursor: pointer;
      border-bottom: 1px solid orange;
    }
  }
`;

// Container for each label word above cards
const FentanylWrapper = styled.div`
font-size: var(--h4-link-fs);
font-weight: bold;
padding: 0px;
margin-right: 40px;

&:hover {
    color: orange;
    cursor: pointer;
  }

  @media (min-width: 1200px) {


    &:hover {
      color: orange;
      cursor: pointer;
      border-bottom: 1px solid orange;
    }
  }
`

const FentanylSpan = styled.span`
  padding-right: 10px;

 
`

const ResourcesCard = styled.div`
  border: 3px solid black;
  @media (min-width: 351px) {
    margin: 0px;
    width: 300px;
    height: 500px;
    border: 2px solid black;
  }

  @media (min-width: 1200px) {
    width: 300px;
    height: 500px;
    border: 2px solid black;
  }
`;

const ImageContainer = styled.div`
  background-color: blue;
  width: 100%;
  height: 40%;
`;

const TextWrapper = styled.section`
  display: block;
  padding: 30px;
`;

const BoldSpan1 = styled.span`
  display: block;
  font-size: var(--p-md-fs);
  font-weight: bold;
`;

const BoldSpan2 = styled.span`
  display: block;
  font-size: var(--p-md-fs);
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: var(--p-md-fs);
  line-height: 20px;
  margin-top: 10px;
`;

export {
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
};
