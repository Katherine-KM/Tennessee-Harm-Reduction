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

const InnerTextContainerH1 = styled.h1`
  margin-bottom: 20px;
`

const InnerTextContainerP = styled.p`
  margin-bottom: 40px;
  font-size: var(--p-md-fs);
`

const InnerImageContainerComponent = ({h1Text, pText, buttonSize, buttonBgColor, buttonFontColor, buttonText, buttonText2}) => {
  return (
    <InnerImageContainer>
      <TextContainer>
        <InnerTextContainer>
          <InnerTextContainerH1>
          {h1Text}
          </InnerTextContainerH1>

          <InnerTextContainerP>
          {pText}
          </InnerTextContainerP>
          
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
