import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const MoreInfoContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--clr-bgNeutral);
    margin-top: 180px;
    color: var(--clr-primary-200);
    font-size: var(--h4-link-fs);
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 200px;
`

const MoreInfoText =styled.span`
    margin-right: 18px;
    // margin-top: 30px;
`

const MoreInfoInnerContainer = styled.div`
  margin-left: 160px;
  // width: 900px;
`
const MoreInformationComp = () => {
  return (
    <>
        <MoreInfoContainer>

          <MoreInfoInnerContainer>
            <MoreInfoText>
            For more information, feel free to
            </MoreInfoText>
              
              <Button
              size='xl'
              bgColor='var(--clr-primary-400)'
              fontColor='white'>
                Contact us
              </Button> 

          </MoreInfoInnerContainer>
          
        </MoreInfoContainer>

          
    </>
  )
}

export default MoreInformationComp