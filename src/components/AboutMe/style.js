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
`;
