import React from "react";
import CardExperience from "../../components/cardExperience";
import * as E from "./style";

//images
import serraLogo from "../../assets/serralogo.jpeg";
import uerjlogo from "../../assets/uerj.png"
import hacklogo from "../../assets/serraHackclub.svg"

export default function Experience(props) {

  const experiences = [
    {
      image: serraLogo,
      title: "Acessor de Computação - Serra Jr. Engenharia",
      descriptionText: "Atuei como desenvolvedor web na empresa júnior Serra Jr. Engenharia.",
      timeExp: "2022 - 2023"
    },
    {
      image: serraLogo,
      title: "Diretor Comercial - Serra Jr. Engenharia",
      descriptionText: "Liderei a assessoria comercial da Serra Jr. Engenharia, cuidando de toda a parte burocrática e comercial da empresa.",
      timeExp: "2023 - 2024"
    },
    {
        image: hacklogo,
        title: "Hackathon - Serra Hackclub",
        descriptionText: "Junto a equipe Serra Hackclub ganhei dois Hackathons(Hack 2030 - HacknaIlha).",
        timeExp: "2022 - 2024"
    },
    {
        image: uerjlogo,
        title: "Projeto Prodocência",
        descriptionText: "Desenvolvo aplicativos nas áreas de Sustentabilidade e Logística sobre orientação do professor Anderson Namen.",
        timeExp: "2022 - Atual"
    },
  ];

  return (
    <E.Container>
      <E.Title>{"<Experiência Profissional/>"}</E.Title>
        <E.Content>
            {experiences.map((experience, index) => (
                <CardExperience
                key={index} // Use index como chave para evitar alertas, mas se tiver um ID único em cada objeto de experiência, use isso como chave
                imagee={experience.image}
                title={experience.title}
                descriptionText={experience.descriptionText}
                timeExp={experience.timeExp}
                />
        ))}
        </E.Content>
    </E.Container>
  );
}
