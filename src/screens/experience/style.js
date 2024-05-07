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
        width: 600px;
        justify-content: center;
        align-items: center;
        gap: 0px;
        grid-template-columns: 0%;
    }
`;