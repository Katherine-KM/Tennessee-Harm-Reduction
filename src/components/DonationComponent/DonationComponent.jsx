import { DonationComponentContainer, RightWrapper, LeftWrapper, WrapperDetails, WrapperPayment, StyledP, StyledColoredTitle, StyledTitle, StyledInput, StyledSpan, StyledButton, ImageWrapper, StyledImage} from "./DonationComponent.styles"

const DonationComponent = ({text}) => {
  return (
    <DonationComponentContainer>
        <LeftWrapper>
            <WrapperDetails>
                 <StyledColoredTitle>Support Access</StyledColoredTitle>
                <StyledTitle> To Harm Reduction Services</StyledTitle>
                <p className="p-md">We make an effort to make it as simple as possible to support our work.</p>
                <StyledP className="p-md">Every dollar you donate, no matter how small or large, supports our aim to those impacted by drug use both individually and collectively.</StyledP>
            </WrapperDetails> 
            <WrapperPayment>
                <StyledInput type='number' min={0}/>
                <StyledSpan>$</StyledSpan>
                <StyledButton>Donate</StyledButton>
            </WrapperPayment>
        </LeftWrapper>
        <RightWrapper>
            <ImageWrapper>
                <StyledImage src={'/donateimage.png'} width={393} height={277} alt="Woman Holding Heart Pillow"></StyledImage>
            </ImageWrapper>
        </RightWrapper>
    </DonationComponentContainer>
  )
}

export default DonationComponent