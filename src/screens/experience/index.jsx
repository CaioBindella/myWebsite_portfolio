import React from "react";
import CardExperience from "../../components/cardExperience";
import * as E from "./style"

//images
import serraLogo from "../../assets/serralogo.jpeg"

export default function Experience(props){
    return(
        <E.Container>
            <E.Title>{`<Experiência/>`}</E.Title>
            <CardExperience imagee={serraLogo} title="Serra Jr. Engenharia" descriptionText="dasdadsd" timeExp="2022 - 2023"/>
            <CardExperience imagee={serraLogo} title="Serra Jr. Engenharia" descriptionText="dasdadsd" timeExp="2022 - 2023"/>
            <CardExperience imagee={serraLogo} title="Serra Jr. Engenharia" descriptionText="dasdadsd" timeExp="2022 - 2023"/>
            <CardExperience imagee={serraLogo} title="Serra Jr. Engenharia" descriptionText="dasdadsd" timeExp="2022 - 2023"/>
            <CardExperience imagee={serraLogo} title="Serra Jr. Engenharia" descriptionText="dasdadsd" timeExp="2022 - 2023"/>
        </E.Container>
    )
}