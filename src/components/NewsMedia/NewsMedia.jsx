import { NewsMediaContainer, NewsTitleContainer, MainImageTextContainer, ImageTextWrapper, ImageBox , TextBox, TagBox } from "./NewsMedia.styles"

import { BlogArray } from "./NewsMediaBlogArray";

const NewsMedia = () => {
  return (
    <NewsMediaContainer>
        <NewsTitleContainer>
            News & Media
        </NewsTitleContainer>

        <MainImageTextContainer>
            {BlogArray.map((blog, idx) => (
                <ImageTextWrapper>
                <ImageBox>
                    {blog.imgSrc}
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