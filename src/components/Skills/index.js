import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import { SkillsContainer, SkillsItem, SkillsImage} from "./styled"


const  Skills= () => (
    <>
        <Wrapper>
            <Content>
                <h1>Skills</h1>
                <p></p>
                <SkillsContainer>
                    <WorkItens/>
                </SkillsContainer>
            
            </Content>
        </Wrapper>
    </> 
)

const WorkItens = () => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "skills"}}) {
          edges {
            node {
              childImageSharp {
                id
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
      
    return (
        <SkillsItem>
          {data.allFile.edges.map((image, key) => (
                <a  target="_blank" rel="noopener noreferrer">
                    <SkillsImage
                        key={key}
                        fluid={image.node.childImageSharp.fluid}
                    />
                </a>
            ))}
        </SkillsItem>
      )

}

export default Skills
