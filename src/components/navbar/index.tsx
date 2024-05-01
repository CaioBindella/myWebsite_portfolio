import React from "react";
import * as n from "./style"

export default function NavBar(){
    return(
        <n.Container>
            <n.Options>Sobre</n.Options>
            <n.Options>Portifólio</n.Options>
            <n.Options>Experiência</n.Options>
        </n.Container>
    )
}