import React from "react";
import teste from "../../assets/summit.svg"
import serraBanner from "../../assets/Serrajr.svg"
import nanofabBanner from "../../assets/nanofab.svg"
import cervejelasBanner from "../../assets/cervejelas.svg"
import rotasBanner from "../../assets/rotaswp.svg"
import isoasBanner from "../../assets/isoaswp.svg"
import "./style.css"

export default function Caurosel(){
    return(
        <div className="carrosel" id="portifolio">
            <h1 className="TextPortifolio">Portfolio</h1>
            <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={serraBanner} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 className="h1-carrosel">Site Serra Jr. Engenharia</h1>
                    <p className="text-carrosel">Site Institucional para Empresa Serra Jr. Engenharia - 2022</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={nanofabBanner} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 className="h1-carrosel">Site Laboratório Nanofab</h1>
                    <p className="text-carrosel">Site Institucional para o laboratório Nanofab localizado na UERJ Maracanã - 2023</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={cervejelasBanner} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 className="h1-carrosel">Site Evento Cervejelas</h1>
                    <p className="text-carrosel">Site para o evento Cervejelas em teresópolis - 2023</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={rotasBanner} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 className="h1-carrosel">App Rotas</h1>
                    <p className="text-carrosel">Aplicativo de otimização de rotas focado em logística - 2024</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={isoasBanner} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 className="h1-carrosel">App ISOAS</h1>
                    <p className="text-carrosel">Aplicativos de Índice de Sustentabilidade Operacional de Aterros Sanitários - 2023</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

        </div>
    )
}