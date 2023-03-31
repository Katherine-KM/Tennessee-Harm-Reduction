import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 100%;
  height: 561px;
  background-color: green;
`

const LeftContainer = styled.div`
  width: 50%;
  height: 561px;
  background-color: #F7D5BA;
  display: flex;
`
const RightContainer = styled.div`
  width: 40%;
  height: 561px;
  background-color: #000;
`

const LeftPeopleBox = styled.div`
  width: 50%;
  height: 261px;
//   background-color: #000;
  border: 3px solid black
`

const RightPeopleBox = styled.div`
width: 50%;
height: 261px;
//   background-color: #000;
border: 3px solid black
`
const WhyDoesItMatter = () => {
  return (
    <>
    <SectionContainer>
        <LeftContainer>
            <h2 style={{width: '100%'}}>Why Does It Matter</h2>
            <LeftPeopleBox>
                <h3>00 People</h3>
                <p>use drugs every year</p>

                <h3>00 People</h3>
                <p>use drugs every year</p>
            </LeftPeopleBox>

           
         
            <RightPeopleBox>
                <h3>00 People</h3>
                <p>use drugs every year</p>

                <h3>00 People</h3>
                <p>use drugs every year</p>
            </RightPeopleBox>
       
        </LeftContainer>
        {/* <RightContainer></RightContainer> */}
    {/* <div>WhyDoesItMatter</div> */}
    </SectionContainer>
    
    </>
  )
 
}

export default WhyDoesItMatter