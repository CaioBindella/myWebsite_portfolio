import React from "react";
import * as S from "./style"

//images
import express from "../../assets/stack/express.svg"
import js from "../../assets/stack/javascript.svg"
import mongo from "../../assets/stack/MongoDB.svg"
import mysql from "../../assets/stack/mysql.svg"
import Next from "../../assets/stack/Next.svg"
import node from "../../assets/stack/node.svg"
import reactnative from "../../assets/stack/react_native.svg"
import styled from "../../assets/stack/styled.svg"
import tail from "../../assets/stack/tailwindcss.svg"
import reactnormal from "../../assets/stack/react.svg"

export default function Stack(){
    return(
        <S.Container>
            <S.Title>{`<Minha Stack de Atuação/>`}</S.Title>
            <S.Content>
                <img src={js} alt="" />
                <img src={mongo} alt="" />
                <img src={mysql} alt="" />
                <img src={Next} alt="" />
                <img src={node} alt="" />
                <img src={reactnormal} alt="" />
                <img src={reactnative} alt="" />
                <img src={styled} alt="" />
                <img src={tail} alt="" />
                <img src={express} alt="" />
            </S.Content>
        </S.Container>
    )
}