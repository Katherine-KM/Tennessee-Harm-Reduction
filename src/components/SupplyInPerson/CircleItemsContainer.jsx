import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";


const OutterCircleContainer = styled.div`
width: 100%;
height: 1700px;
border: 8px solid blue;

display:flex;
flex-direction: column;
gap: 130px;
`

const CircleItem = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: green;

// stroke: white;
// stroke-width: 5px;

display: flex;
justify-content: center;
align-items: center;

background: url('/SIPImgs/InPersonArrange.png')

`

const InnerCircleItem = styled.div`
width: 170px;
height: 170px;
// border: 3px red solid
border-radius: 50%;
// background: #EB8C5BCC;

`

const CircleItemsContainer = () => {
  return (
    <>
        
            <OutterCircleContainer>
                <CircleItem>
                    <InnerCircleItem></InnerCircleItem>
                </CircleItem>
                <CircleItem></CircleItem>
                <CircleItem></CircleItem>
                
            </OutterCircleContainer>
       
    </>
  )
}

export default CircleItemsContainer