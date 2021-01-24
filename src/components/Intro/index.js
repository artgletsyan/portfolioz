import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageContainer, IntroContainer} from "./styled"

const Intro = () => (
    <>
    <Wrapper>
      <ImageContainer>
          <Image/>
      </ImageContainer>
      <IntroContainer>
        <header>
          <h1>Hi. I'm Artak </h1>
          <h2>I'm a Java Developer I spend most of my day, experimenting with Java. I enjoy coding and the challenge of learning something new everyday.</h2>
        
        </header>
       
      </IntroContainer>
    </Wrapper>
    </> 
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 386) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}


export default Intro
