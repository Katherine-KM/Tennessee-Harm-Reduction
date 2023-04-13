import styled from 'styled-components';


const HelpTitle = styled.div`
  color: black;
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
`

const HelpSpan = styled.span`
  color: orange;
  font-size: 1.5rem;
  display: inline;
`

const HelpParagraph = styled.div`
  color: black;
  font-size: 1rem;
  word-wrap: break-word;
  text-align:center;
`




const Title = () => {
  return (
    <>
        {/*style={{fontSize: 'var(--h2-sm-fs)'}}  */}
    <HelpTitle>
        <h2 style={{
          fontSize: 'var(--h2-sm-fs)', 
          marginTop: '50px', 
          marginBottom: '10px'
          }}>How <HelpSpan style={{fontSize: 'var(---h2-sm-fs)'}}>We</HelpSpan> Help</h2>
    </HelpTitle>

        <HelpParagraph>
            <p style={{
              fontSize: 'var(--p-sm-fs)'
              }}>In Tennessee, we offer efficient services and programmes that benefit the</p>
            <p style={{
              marginBottom: '30px', 
              lineHeight: '26px', 
              fontSize: 'var(--p-sm-fs)'
              }}>vulnerable and frequently ignored members of society.</p>
        </HelpParagraph>

        
    </>
  )
}

export default Title