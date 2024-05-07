import React from "react";
import * as Fa from "./style"

import selfie from "../../assets/selfie.svg"

//images
import wpp from "../../assets/icons/wpp.png"
import insta from "../../assets/icons/insta.png"
import linkedin from "../../assets/icons/linkedin.png"
import email from "../../assets/icons/email.png"

export default function ContentHeader(){
    return(
        <div className="cont">
            <img className="myphoto" src={selfie} alt="my photo" />
            <h1 className="name">Caio Bindella</h1>
            <h3 style={{color: "#000000"}}>Junior Software Engineer - Nova Friburgo, RJ</h3>
            <Fa.TopSide>
                <a href="https://contate.me/caiobindella" target="_blank" rel="noopener noreferrer">
                    <Fa.Images src={wpp} alt="" />
                </a>
                <a href="https://www.instagram.com/b.caiioo/" target="_blank" rel="noopener noreferrer">
                    <Fa.Images src={insta} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/caio-bindella/" target="_blank" rel="noopener noreferrer">
                    <Fa.Images src={linkedin} alt="" />
                </a>
                <a href="mailto:caionogueirabindella@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Fa.Images src={email} alt="" />
                </a>
            </Fa.TopSide>
        </div>
    )
}