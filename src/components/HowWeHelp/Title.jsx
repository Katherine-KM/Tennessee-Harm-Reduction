import styled from 'styled-components';


const HelpTitle = styled.div`
  color: black;
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
`

const HelpTitleH2 = styled.h2`
  marginTop: 50px;
  marginBottom: 10px;
 
`

const HelpSpan = styled.span`
  color: var(--clr-primary-200);
  display: inline;
  font-size: var(--h2-fs);
  
`

const HelpParagraph = styled.div`
  color: black;
  font-size: 1rem;
  word-wrap: break-word;
  text-align:center;
`

const HelpParagraphTextTop = styled.p`
  margin-top: 15px;
`

const HelpParagraphTextBottom = styled.p`
  margin-bottom: 30px;
`

const Title = () => {
  return (
    <>
        {/*style={{fontSize: 'var(--h2-sm-fs)'}}  */}
    <HelpTitle>
      <HelpTitleH2>How <HelpSpan>We</HelpSpan> Help</HelpTitleH2>
       
    </HelpTitle>

        <HelpParagraph>
           <HelpParagraphTextTop className='p-md'>
           In Tennessee, we offer efficient services and programmes that benefit the
           </HelpParagraphTextTop>

            <HelpParagraphTextBottom className='p-md'>
            vulnerable and frequently ignored members of society.
            </HelpParagraphTextBottom>
        </HelpParagraph>

        
    </>
  )
}

export default Title