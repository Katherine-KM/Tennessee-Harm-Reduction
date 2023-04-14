import styled from "styled-components";
import Button from "../Button";

const InnerImageContainer = styled.div`
  width: 90%;
  min-height: 400px;
  background-color: #766c93;
  margin: 90px auto;
  position: relative;
`;

const TextContainer = styled.div`
  width: 90%;
  min-height: 360px;
  background-color: #664db3;
  margin: 0 auto;

  position: absolute;
  top: 300px;
  left: 30px;
`;

const InnerTextContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const InnerImageContainerComponent = ({h1Text, pText, buttonSize, buttonBgColor, buttonFontColor, buttonText, buttonText2}) => {
  return (
    <InnerImageContainer>
      <TextContainer>
        <InnerTextContainer>
          <h1 style={{ fontSize: "var(--h1-fs)", marginBottom: "20px" }}>
            {h1Text}
          </h1>

          <p style={{ fontSize: "var(--p-md-fs)", marginBottom: "40px" }}>
            {pText}
          </p>
          <Button
            size={buttonSize}
            bgColor={buttonBgColor}
            fontColor={buttonFontColor}
          >
            {buttonText}
          </Button>

          {buttonText2.length > 0 && 
          <Button
            styling = 'display: block; margin: 0.5rem auto; '
            size={buttonSize}
            bgColor={buttonBgColor}
            fontColor={buttonFontColor}
          >
            {buttonText2}
          </Button>}
        </InnerTextContainer>
      </TextContainer>
    </InnerImageContainer>
  );
};

export default InnerImageContainerComponent;
