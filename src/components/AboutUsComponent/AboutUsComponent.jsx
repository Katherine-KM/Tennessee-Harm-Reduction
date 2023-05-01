import Button from "../Button"
import { AboutUsContainer, TitleWrapper, TitleRContainer, TitleLContainer, DetailsWrapper, StyledColoredTitle, StyledTitle} from "./AboutUsComponent.styles"

const AboutUsComponent = () => {
  return (
        <AboutUsContainer>
            <TitleWrapper>
                <TitleRContainer>
                    <StyledColoredTitle>About</StyledColoredTitle> <StyledTitle>Us</StyledTitle> 
                    <p className="p-md">With Love and Care from Tennessee Harm Reduction</p>
                </TitleRContainer>
                <TitleLContainer>
                    <Button>learn more</Button>
                </TitleLContainer>
            </TitleWrapper>
            <DetailsWrapper>
                <p>
                    Tennessee Harm Reduction (TNHR) is a community-based organization operating at the intersection of drug-user-centric public health (harm reduction), drug user advocacy, drug prevention, and drug policy reform. We run the first and only syringe exchange in West Tennessee outside of Memphis, which was founded in June 2021. We hope to obtain official Syringe Services Program (SSP) status, which is awarded by the Tennessee Department of Health, before Fall 2022. All we need is a local property owner to let us use their land for 2-3 hours, one day/week — we can make do with as little as 10' x 10'. If you can make this happen, reach out to us!
                </p>
            </DetailsWrapper>
        </AboutUsContainer>
  )
}

export default AboutUsComponent