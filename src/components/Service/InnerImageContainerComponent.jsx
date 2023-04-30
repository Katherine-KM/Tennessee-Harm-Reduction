import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const InnerImageContainer = styled.div`
  width: 90%;
  min-height: 400px;
  background-color: #766c93;
  margin: 90px auto;
  position: relative;
`;

const MyImage = styled(Image)`
width: 100%;
height: 100%;
`

const TextContainer = styled.div`
  width: 90%;
  min-height: 360px;
  background-color: var(--clr-bgNeutral);
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const InnerImageContainerComponent = ({h1Text, pText, buttonText, buttonText2}) => {
  return (
    <InnerImageContainer>
      <MyImage 
      width={300}
      height={300}
      src={'/ServiceImgs/ServicePackage.png'}/>

  
      <TextContainer>
        <InnerTextContainer>
          <InnerTextContainerH1>
          {h1Text}
          </InnerTextContainerH1>

          <InnerTextContainerP>
          {pText}
          </InnerTextContainerP>

          <ButtonContainer>
            <Button>
              {buttonText}
            </Button>
          </ButtonContainer>
          
          <ButtonContainer>
            <Button>
              {buttonText}
            </Button>
          </ButtonContainer>
        </InnerTextContainer>
      </TextContainer>
    </InnerImageContainer>
  );
};

export default InnerImageContainerComponent;
