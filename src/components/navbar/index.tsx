import React from "react";
import * as n from "./style"

export default function NavBar(){
    return(
        <n.Container>
            <n.Options href="#aboutme">Sobre</n.Options>
            <n.Options href="#portifolio">Portifólio</n.Options>
            <n.Options href="#experience">Experiência</n.Options>
        </n.Container>
    )
}