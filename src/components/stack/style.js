import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2%;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 70px;
    margin-top: 3%;
    color: black;
    text-align: center;

    @media (max-width: 390px) {
        font-size: 30px;
    }

    @media (min-width: 390px) and (max-width: 600px){
        font-size: 45px;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 60px;

    }
    @media (min-width: 1000px) and (max-width: 1440px) {
        font-size: 70px;
    } 

    @media (min-width: 3000px) and (max-width: 4000px) {
        font-size: 120px;
    } 
`;

export const Content = styled.div`
    display: flex;
    margin: 3%;


    @media (max-width: 390px){ 
        flex-direction: column;
    }

    @media (min-width: 390px) and (max-width: 600px){
        flex-direction: column;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        flex-wrap: wrap;
        width: 80%;
    }

    @media (min-width: 1000px) and (max-width: 1440px) {
        width: 95%;
        flex-wrap: wrap;
    } 

`;