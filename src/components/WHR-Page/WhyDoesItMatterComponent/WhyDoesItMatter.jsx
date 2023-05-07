import Details from "./DetailData";
import {
  Wrapper,
  WhyDoesItMatterContainer,
  StyledTitle,
  StyledColorTitle,
  DetailsWrapper,
  StyledListItem,
  StyledH3,
  StyledP,
  StyledUl,
  HeadingWrapper,
} from "./WhyDoesItMatter.styles";

const WhyDoesItMatter = () => {
  return (
    <Wrapper>
      <WhyDoesItMatterContainer>
        <HeadingWrapper>
          <StyledTitle>Why Does It </StyledTitle>
          <StyledColorTitle>Matter?</StyledColorTitle>
        </HeadingWrapper>
        <DetailsWrapper>
          <StyledUl>
            {Details.map((detail, id) => (
              <StyledListItem key={id}>
                <StyledH3 detailColor={detail.color}>
                  {detail.total} People
                </StyledH3>
                <StyledP detailColor={detail.color}>{detail.text}</StyledP>
              </StyledListItem>
            ))}
          </StyledUl>
        </DetailsWrapper>
      </WhyDoesItMatterContainer>
    </Wrapper>
  );
};

export default WhyDoesItMatter;
