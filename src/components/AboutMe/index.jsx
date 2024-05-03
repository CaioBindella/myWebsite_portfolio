import React from "react";
import * as A from "./style"
import "./estilo.css"

export default function AboutMe(){
    return(
        <A.Container>
            <div className="txt-animado">
                {`<`}<span></span>
            </div>
            <A.description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minima qui, aliquid, magni consequuntur perspiciatis veniam dolorum est veritatis aliquam, nisi et corporis at porro? Nemo accusamus veritatis fuga commodi?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos facere animi tenetur praesentium repellat laboriosam molestiae quasi quis maxime iste natus temporibus architecto numquam quam aspernatur eaque, illo, at quia?
            </A.description>
        </A.Container>
    )
}