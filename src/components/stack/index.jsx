import React from "react";
import * as S from "./style"
import "./style.css"

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
            <S.Title>{`<Stack de Atuação/>`}</S.Title>
            <S.Content>
                <img src={js} alt="" className="images-stack"/>
                <img src={mongo} alt="" className="images-stack"/>
                <img src={mysql} alt="" className="images-stack"/>
                <img src={Next} alt="" className="images-stack"/>
                <img src={node} alt="" className="images-stack"/>
                <img src={reactnormal} alt="" className="images-stack"/>
                <img src={reactnative} alt="" className="images-stack"/>
                <img src={styled} alt="" className="images-stack"/>
                <img src={tail} alt="" className="images-stack"/>
                <img src={express} alt="" className="images-stack"/>
            </S.Content>
        </S.Container>
    )
}