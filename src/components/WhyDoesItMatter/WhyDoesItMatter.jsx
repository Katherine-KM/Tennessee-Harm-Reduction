import styled from 'styled-components';
import Image from 'next/image';

const SectionContainer = styled.section`
  width: 100%;
  // height: fit-content;
  // min-height: 561px;
  height: 561px;
  background-color: green;
//   margin-top:300px;
  display:flex;
`

const LeftContainer = styled.div`
  width: 50%;
  height: 561px;
  background-color: #F7D5BA;
  display: flex;
  font-family: 'Montserrat', sans-serif;
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

const RightContainer = styled.div`
  width: 50%;
  height: 561px;
  background-color: red;
  // display: none;
`

const StyledImg = styled(Image)`
  width: 100%;
  height: 100%;
`
const WhyDoesItMatter = ({
  imgSrc,
  imgAltText,
  imgHeight,
  imgWidth,
  }) => {
  return (
    <>
    <SectionContainer>
        <LeftContainer>
            {/* This div contains the entire "Why does it matter" container */}
            <div style={{width: '100%', display: 'flex', flexDirection: 'column',marginLeft: '30px'}}>
            <h2 style={{fontSize: 'var(--h2-sm-fs)', padding: '60px', fontSize: 'var(--h2-lg-fs)'}}>Why does it <span style={{color: 'var(--clr-primary-400)'}}>matter</span></h2>
          
            {/* This div contains all of the "00 People" tags */}
           <div style={{width: '100%', display: 'flex', marginTop: '10px', marginLeft: '60px'}}>
            {/* Box for left side 00 People */}
           <LeftPeopleBox>
                <h3 style={{color: 'var(--clr-primary-400)', fontSize: 'var(--h2-sm-fs)', }}>00 People</h3>
                <p style={{color: 'var(--clr-primary-400)', marginBottom: '40px', fontSize: '18px'}}>use drugs every year</p>

                <h3 style={{fontSize: 'var(--h2-sm-fs)'}}>00 People</h3>
                <p style={{fontSize: '18px'}}>use drugs every year</p>
            </LeftPeopleBox>

             {/* Box for right side 00 People */}
            <RightPeopleBox>
                <h3 style={{fontSize: 'var(--h2-sm-fs)'}}>00 People</h3>
                <p style={{marginBottom: '40px', fontSize: '18px'}}>use drugs every year</p>

                <h3 style={{color: 'var(--clr-primary-400)', fontSize: 'var(--h2-sm-fs)'}}>00 People</h3>
                <p style={{color: 'var(--clr-primary-400)', fontSize: '18px'}}>use drugs every year</p>
            </RightPeopleBox>
           </div>
            </div>
        </LeftContainer>

        <RightContainer>
          <StyledImg
            src={imgSrc}
            alt={imgAltText}
            height={imgHeight}
            width={imgWidth}
           >
          </StyledImg>
        </RightContainer>
    </SectionContainer>
    
    
    
    </>
  )
 
}

export default WhyDoesItMatter