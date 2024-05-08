import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 30px;
    margin-bottom: 20px;
    justify-content: space-around;

    @media (min-width: 3000px) and (max-width: 4000px) {
        margin: 30px;
        border-radius: 40px;
    }  
`;

export const Options = styled.a`
    margin: 10px 20px 10px 20px;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    color: black;

    &:hover{
        color: #D9D9D9;
    }

    @media (min-width: 600px) and (max-width: 1000px){
        font-size: 25px;
    }

    @media (min-width: 2000px) and (max-width: 3000px) {
        font-size: 35px;
    }

    @media (min-width: 3000px) and (max-width: 4000px) {
        font-size: 55px;
    }  
`;