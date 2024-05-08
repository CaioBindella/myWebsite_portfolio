import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 80px;
    margin-top: 3%;
    color: black;
`;

export const description = styled.p`
    margin-top: 3%;
    margin-bottom: 3%;
    width: 60%;
    font-size: 25px;
    text-align: justify;

    @media (max-width: 390px) {
        font-size: 15px;
        width: 70%;
    }

    @media (min-width: 390px) and (max-width: 600px){
        font-size: 18px;
        width: 70%;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 22px;
        width: 85%;
    }

    @media (min-width: 1000px) and (max-width: 1440px) {
        font-size: 25px;
        width: 85%;
    }


    @media (min-width: 2000px) and (max-width: 3000px) {
        font-size: 45px;
        width: 85%;
    }

    @media (min-width: 3000px) and (max-width: 4000px) {
        font-size: 65px;
        width: 85%;
    }
`;
