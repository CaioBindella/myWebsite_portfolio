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
    padding: 10px;

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 20px;
    }

    @media (min-width: 2000px) and (max-width: 3000px) {
        font-size: 25px;
    }
    
    @media (min-width: 3000px) and (max-width: 4000px) {
        font-size: 50px;
    } 
`;

export const Images = styled.img`
    width: 30px;
    height: 30px;
    margin: 14px;

    @media (max-width: 390px) {
        width: 25px;
        height: 25px;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        width: 42px;
        height: 42px;
    }

    @media (min-width: 2000px) and (max-width: 3000px) {
        width: 52px;
        height: 52px;
    }

    @media (min-width: 3000px) and (max-width: 4000px) {
        width: 72px;
        height: 72px;  
        margin: 20px;
    } 
`;