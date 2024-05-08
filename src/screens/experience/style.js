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
    font-size: 80px;
    margin-top: 3%;
    color: black;

    
    @media (max-width: 390px) {
        font-size: 30px;
        width: 80%;
        text-align: center;
    }

    @media (min-width: 390px) and (max-width: 600px){
        font-size: 45px;
        width: 80%;
        text-align: center;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 60px;
        width: 80%;
        text-align: center;
    }

    @media (min-width: 1000px) and (max-width: 1440px) {
        font-size: 70px;
        width: 80%;
        text-align: center;
    }   

    @media (min-width: 2000px) and (max-width: 3000px) {
        font-size: 70px;
        width: 80%;
        text-align: center;
    }

    @media (min-width: 3000px) and (max-width: 4000px) {
        font-size: 120px;
        width: 100%;
        text-align: center;
    } 
`;

export const Content = styled.div`
    width: 70%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    margin-bottom: 3%;
    margin-top: 3%;

    @media (max-width: 390px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 0px;
        grid-template-columns: 0%;
    }


    @media (min-width: 390px) and (max-width: 600px){
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 0px;
        grid-template-columns: 0%;
    }

    @media (min-width: 2000px) and (max-width: 3000px) {
        width: 50%;
        flex-wrap: wrap;
    }

    @media (min-width: 3000px) and (max-width: 4000px) {
        width: 100%;
        flex-wrap: wrap;
        gap: 70px;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    } 
`;