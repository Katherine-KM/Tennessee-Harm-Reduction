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
  font-family: 'Montserrat', sans-serif;
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
//   border: 3px solid black
`

const RightPeopleBox = styled.div`
width: 50%;
height: 261px;
//   background-color: #000;
// border: 3px solid black
`
const WhyDoesItMatter = () => {
  return (
    <>
    <SectionContainer>
        <LeftContainer>
            {/* This div contains the entire "Why does it matter" container */}
            <div style={{width: '100%', display: 'flex', flexDirection: 'column',marginLeft: '30px'}}>
            <h2 style={{fontSize: 'var(--h2-sm-fs)', padding: '60px', fontSize: 'var(--h2-lg-fs)'}}>Why does it <span style={{color: 'var(--clr-primary-400)'}}>matter</span></h2>
          
            {/* This div contains all of the "00 People" tags */}
           <div style={{width: '100%', display: 'flex', marginTop: '10px', marginLeft: '60px'}}>
           <LeftPeopleBox>
                <h3 style={{color: 'var(--clr-primary-400)', fontSize: 'var(--h2-sm-fs)', }}>00 People</h3>
                <p style={{color: 'var(--clr-primary-400)', marginBottom: '40px', fontSize: '18px'}}>use drugs every year</p>

                <h3 style={{fontSize: 'var(--h2-sm-fs)'}}>00 People</h3>
                <p style={{fontSize: '18px'}}>use drugs every year</p>
            </LeftPeopleBox>

           
         
            <RightPeopleBox>
                <h3 style={{fontSize: 'var(--h2-sm-fs)'}}>00 People</h3>
                <p style={{marginBottom: '40px', fontSize: '18px'}}>use drugs every year</p>

                <h3 style={{color: 'var(--clr-primary-400)', fontSize: 'var(--h2-sm-fs)'}}>00 People</h3>
                <p style={{color: 'var(--clr-primary-400)', fontSize: '18px'}}>use drugs every year</p>
            </RightPeopleBox>
           </div>
            </div>
           
       
        </LeftContainer>
        {/* <RightContainer></RightContainer> */}
    {/* <div>WhyDoesItMatter</div> */}
    </SectionContainer>
    
    </>
  )
 
}

export default WhyDoesItMatter