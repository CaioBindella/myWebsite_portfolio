import React from "react";
import "./style.css"
import NavBar from "../navbar";
import ContentHeader from "./Content";

export default function Header(){
    return(
        <div className="Header">
            <NavBar/>
            <ContentHeader/>
        </div>
    )
}