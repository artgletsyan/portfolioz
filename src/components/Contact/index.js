import React from "react"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import ContactImage from "../../images/contact/contact.png"

import { ContactWrapper, ImageWrapper, InfosWrapper} from "./styled"

const Contact= () => (
    <>
        <Wrapper>
            <Content>
                <ContactWrapper>
                    <InfosWrapper>
                        <h1>Contact</h1>
                        <p>If you are looking to get ahold of me, you can send me an email at artakjvdp@gmail.com</p>
                    
                    </InfosWrapper>
                    <ImageWrapper>
                        <img src={ContactImage} alt="" />
                    </ImageWrapper>
                </ContactWrapper>
            </Content>
        </Wrapper>
    </> 
)

export default Contact
