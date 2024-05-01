import React from "react";
import * as F from "./style"

//images
import wpp from "../../assets/icons/wpp.png"
import insta from "../../assets/icons/insta.png"
import linkedin from "../../assets/icons/linkedin.png"
import email from "../../assets/icons/email.png"

export default function Footer() {
  return (
    <F.Container>
        <F.TopSide>
            <a href="https://contate.me/caiobindella" target="_blank" rel="noopener noreferrer">
                <F.Images src={wpp} alt="" />
            </a>
            <a href="https://www.instagram.com/b.caiioo/" target="_blank" rel="noopener noreferrer">
                <F.Images src={insta} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/caio-bindella/" target="_blank" rel="noopener noreferrer">
                <F.Images src={linkedin} alt="" />
            </a>
            <a href="mailto:caionogueirabindella@gmail.com" target="_blank" rel="noopener noreferrer">
                <F.Images src={email} alt="" />
            </a>
        </F.TopSide>

        <F.DownSide>
            <F.Text>© 2024 Copyright: Caio Bindella</F.Text>
        </F.DownSide>
    </F.Container>
  );
}
