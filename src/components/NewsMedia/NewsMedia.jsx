import { NewsMediaContainer, NewsTitleContainer, MainImageTextContainer, ImageTextWrapper, ImageBox , TextBox, TagBox, MyImage } from "./NewsMedia.styles"

import { BlogArray } from "./NewsMediaBlogArray";

const NewsMedia = ({
    ImgSrc
}) => {

  return (
    <NewsMediaContainer>
        <NewsTitleContainer>
            News & Media
        </NewsTitleContainer>

        <MainImageTextContainer>
            {BlogArray.map((blog, idx) => (
                <ImageTextWrapper>
                <ImageBox>
                    <MyImage src={blog.imgSrc} width={393} height={277}></MyImage>
                </ImageBox>
                <TextBox>
                    {blog.paragraph}
                </TextBox>
                <TagBox>
                    {blog.tag}
                </TagBox>
            </ImageTextWrapper>
            ))}
            

        </MainImageTextContainer>
    </NewsMediaContainer>
  )
}

export default NewsMedia