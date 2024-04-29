import React from "react";

import selfie from "../../assets/selfie.svg"

export default function ContentHeader(){
    return(
        <div className="cont">
            <img className="myphoto" src={selfie} alt="my photo" />
            <h1 className="name">Caio Bindella</h1>
            <h3 style={{color: "#000000"}}>Junior Software Engineer - Nova Friburgo, RJ</h3>
        </div>
    )
}