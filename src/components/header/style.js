import styled from "styled-components";


export const TopSide = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 390px) {
        margin-bottom: 20px;
    }
`;

export const Images = styled.img`
    width: 35px;
    height: 35px;
    margin: 10px;
    margin-bottom: 5px;

    @media (max-width: 390px) {
        width: 25px;
        height: 25px;
    }

    @media (min-width: 390px) and (max-width: 600px){
        width: 30px;
        height: 30px;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        width: 42px;
        height: 42px;
    }

    @media (min-width: 1000px) and (max-width: 1440px) {
        width: 35px;
        height: 35px;
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