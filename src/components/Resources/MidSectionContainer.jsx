import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

const MainMidSectionContainer = styled.div`
    width: 100%;
    // border: 4px solid red;
    min-height: 1200px;
`

const InnerMidSectionContainer = styled.div`
    width:80%;
    // border: 4px solid blue;
    min-height: 1200px;
    margin: 8rem auto;
`

const LabelRowContainer = styled.div`
width:100%;
min-height: 100px;
margin: 0 auto;
`

const InnerLabelRowContainer = styled.div`
width:80%;
// border: 4px solid red;
min-height: 50px;
font-size: var(--h4-link-fs);
font-weight:bold;
display: flex;
justify-content: space-between;

`

const InnerImagesContainer = styled.div`
width:100%;

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(3, 1fr);
gap: 40px 20px;
`

const ResourcesCard = styled.div`
    width: 300px;
    height: 500px;
    border: 2px solid black; 
`

const MidSectionContainer = () => {
  return (
    <>
    <MainMidSectionContainer>
        <InnerMidSectionContainer>
            <LabelRowContainer>
                <InnerLabelRowContainer>
                    <span style={{marginRight: '40px'}}>All</span>
                    <span style={{marginRight: '40px'}}>Syringe</span>
                    <span style={{marginRight: '40px'}}>Naloxone</span>
                    <span style={{marginRight: '40px'}}>Treatment</span>
                    <span style={{marginRight: '40px'}}>Policy</span>
                    <span style={{marginRight: '10px'}}>Fentanyl</span>
                    <span style={{marginRight: '10px'}}>Test</span>
                    <span style={{marginRight: '40px'}}>Strips</span>
                    <span style={{marginRight: '40px'}}>Guides</span>
                    <span style={{marginRight: '40px'}}>Media</span>
                    <span style={{marginRight: '40px'}}>Blog</span>
                </InnerLabelRowContainer>
            </LabelRowContainer>


            <InnerImagesContainer>
                <ResourcesCard>
                    <div style={{backgroundColor: 'blue',width: '100%', height: '40%'}}></div>
                    

                    <div style={{
                            display:'block',
                            padding: '30px'
                            }}>
                        <span style={{
                            display:'block',
                            fontSize: 'var(--p-md-fs)',
                            fontWeight: 'bold'
                            }}> Sed ut perspiciatis </span>
                        <span style={{
                            display:'block',
                            fontSize: 'var(--p-md-fs)',
                            fontWeight: 'bold'
                            }}> unde omnis </span>
                        <p style={{
                            fontSize: 'var(--p-md-fs)',
                            lineHeight: '20px',
                            marginTop: '10px'
                            }}>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                    </div>
                </ResourcesCard>
                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>

                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>

                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>
                <ResourcesCard></ResourcesCard>
            </InnerImagesContainer>
        </InnerMidSectionContainer>
    </MainMidSectionContainer>
    </>
  )
}

export default MidSectionContainer