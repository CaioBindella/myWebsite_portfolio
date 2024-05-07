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
`;