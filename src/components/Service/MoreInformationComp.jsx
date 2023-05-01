import styled from "styled-components";
import Button from "../Button";

const MoreInfoContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--clr-bgNeutral);
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
    
`

const MoreInfoInnerContainer = styled.div`
  
  @media (min-width: 351px){
    margin-left: 160px;
  }
`
const MoreInformationComp = () => {
  return (
    <>
        <MoreInfoContainer>
          <MoreInfoInnerContainer>
            <MoreInfoText>
            For more information, feel free to
            </MoreInfoText>
              
              <Button>
                contact us
              </Button> 
          </MoreInfoInnerContainer>  
        </MoreInfoContainer> 
    </>
  )
}

export default MoreInformationComp