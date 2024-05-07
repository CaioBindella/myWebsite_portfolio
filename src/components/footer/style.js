import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const TopSide = styled.div`
    width: 100%;
    background-color: #D9D9D9;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DownSide = styled.div`
    width: 100%;
    background-color: #D9D9D9;
    height: 5vh;
    text-align: center;
`;

export const Text = styled.span`
    font-weight: bold;
`;

export const Images = styled.img`
    width: 30px;
    height: 30px;
    margin: 14px;

    @media (max-width: 390px) {
        width: 25px;
        height: 25px;
    }
`;