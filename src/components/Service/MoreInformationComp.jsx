import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const MoreInfoContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--clr-bgNeutral);
    margin-top: 180px;
    color: var(--clr-primary-200);
    font-size: var(--h4-link-fs)

`

const MoreInformationComp = () => {
  return (
    <>
        <MoreInfoContainer>
            For more information, feel free to
            
            </MoreInfoContainer>
            <Button
            buttonSize='lg'
            buttonBgColor='var(--clr-primary-400)'
            buttonFontColor='white'></Button> 
    </>
  )
}

export default MoreInformationComp