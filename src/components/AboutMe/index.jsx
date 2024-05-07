import React from "react";
import * as A from "./style"
import "./estilo.css"

export default function AboutMe(){
    return(
        <A.Container id="aboutme">
            <div className="txt-animado">
                {`<`}<span></span>
            </div>
            <A.description>
                Estudante de Engenharia de Computação na UERJ com aproximadamente 1 ano e meio de experiência em desenvolvimento front-end e back-end. Minha expertise inclui linguagens como JavaScript (React JS e React Native) para o front-end e JavaScript, Node.js, e MySQL para o back-end. Possuo uma sólida base em desenvolvimento web, mas também sou capaz de atuar em desenvolvimento full-stack.

                Durante minha trajetória acadêmica, atuei como desenvolvedor júnior front-end na Serra Junior Engenharia, onde liderei equipes em vários projetos de desenvolvimento web com sucesso. Além disso, contribuí para o desenvolvimento de aplicativos mobile nas áreas de meio ambiente e logística, abrangendo tanto o front-end quanto o back-end.

                Estou sempre em busca de oportunidades para aprender e crescer no mercado. Tenho confiança de que minhas habilidades e experiência podem agregar valor à sua organização.
            </A.description>
        </A.Container>
    )
}