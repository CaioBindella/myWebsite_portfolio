import React from "react";
import { description } from "../AboutMe/style";
import "./style.css"

export default function CardExperience(props){
    return(
        <div className="cardExperience">
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imagee} className="img-fluid rounded-start w-10 h-10" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.descriptionText}</p>
                            <p className="card-text"><small className="text-body-secondary">{props.timeExp}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
