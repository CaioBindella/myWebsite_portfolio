import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 30px;
    margin-bottom: 20px;
    justify-content: space-around;
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
`;