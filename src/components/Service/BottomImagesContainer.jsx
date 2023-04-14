import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";
import InnerImageContainerComponent from "./InnerImageContainerComponent";

const MainTopContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  // background-color: blue;
  // border: 6px blue solid;

  margin-bottom: 80px;
  padding: 40px;
`;

const LeftHalfContainer = styled.div`
  width: 50%;
  min-height: 500px;
  // background-color: red;
`;

const RightHalfContainer = styled.div`
  width: 50%;
  min-height: 500px;

  // background-color: green;
`;

const InnerImageContainer = styled.div`
  width: 90%;
  min-height: 400px;
  background-color: red;
  margin: 90px auto;
  position: relative;
`;

const TextContainer = styled.div`
  width: 90%;
  min-height: 360px;
  background-color: green;
  margin: 0 auto;

  position: absolute;
  top: 300px;
  left: 30px;
`;

const InnerTextContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const BottomImagesContainer = ({
  h1Text3,
  paraText3,
  buttonText1,
  buttonText2,

  buttonText,
  buttonSize,
  buttonBgColor,
  buttonFontColor,

  h1Text4,
  paraText4,
}) => {
  return (
    <>
      <MainTopContainer>
        <LeftHalfContainer>
          <InnerImageContainerComponent
            h1Text="Treatment Program"
            pText="Sending free NARCAN kits, syringes, and fentanyl test strips by mail within whole United state to improving the health and welfare of Tennesseans who use drugs."
            buttonSize="xl"
            buttonBgColor="orange"
            buttonFontColor="white"
            buttonText="Mat Treatment"
            buttonText2="Other Harm Reduction Programs"
          />
        </LeftHalfContainer>

        <RightHalfContainer>
          <InnerImageContainerComponent
            h1Text="Information Center"
            pText="Getting the most update information, including getting resources on safer drug use and knowing how to respond in the event of an overdose."
            buttonSize="xl"
            buttonBgColor="orange"
            buttonFontColor="white"
            buttonText="Become a Provider"
            buttonText2="Common Questions"
          />
        </RightHalfContainer>
      </MainTopContainer>
    </>
  );
};

export default BottomImagesContainer;
