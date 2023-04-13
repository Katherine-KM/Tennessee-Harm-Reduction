import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";


const OutterContainer = styled.div`
    width: 100%;
    height: 2000px;
    border: 3px solid red;
`

const OutterCircleContainer = styled.div`
width: 100%;
height: 1700px;
border: 3px solid blue;

display:flex;
flex-direction: column;
gap: 130px;
`

const CircleItem = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: green;

stroke: white;
stroke-width: 5px;

`

const InnerCircleItem = styled.div`
width: 150px;
height: 150px;
// border: 3px red solid
border-radius: 50%;
background-color: red;

stroke: white;
stroke-width: 5px;
margin: 23px auto;

`

const CircleItemsContainer = () => {
  return (
    <>
        <OutterContainer>
            <OutterCircleContainer>
                <CircleItem>
                    <InnerCircleItem></InnerCircleItem>
                </CircleItem>
                <CircleItem></CircleItem>
                <CircleItem></CircleItem>
                <CircleItem></CircleItem>
            </OutterCircleContainer>
        </OutterContainer>
    </>
  )
}

export default CircleItemsContainer