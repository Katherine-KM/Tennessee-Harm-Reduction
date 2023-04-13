import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const MainProgramContainer = styled.div`
    width: 100%;
    height: 200px;
    // background-color: red;
`

const InnerProgramContainer = styled.div`
    width: 50%;
    height: 100px;
    margin: 10rem auto;
    // background-color: green;
`

const ProgramWorksContainer = () => {
  return (
    <>
        <MainProgramContainer>
            <InnerProgramContainer>
                <h2 style={{
                    fontSize: 'var(--h1-fs)',
                    textAlign: 'center',
                    marginTop: '20px'
                    }}>Here’s how our program works:</h2>
            </InnerProgramContainer>
        </MainProgramContainer>
    </>
  )
}

export default ProgramWorksContainer