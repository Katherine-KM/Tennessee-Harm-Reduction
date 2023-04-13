import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const OutterContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: orange;
`

const InnerContainer = styled.div`
    width: 50%;
    height: 100px;

    font-size: var(--h2-sm-fs);
    font-weight: bold;
    color:white;
    
    text-align: center;
    margin: 3rem auto;
    
    // background-color: blue;
`

const OrangeContainer = () => {
  return (
    <>
        <OutterContainer>
            <InnerContainer>
                <div>
                Open 10am – 11pm, Monday – Sunday
                </div>
            </InnerContainer>
        </OutterContainer>
    </>
  )
}

export default OrangeContainer