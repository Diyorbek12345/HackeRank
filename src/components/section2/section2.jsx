import React from "react";
import style from "./section2.module.css";
import styled from "styled-components";
import bg from "../../assets/bg.jpg";

export const Section2 = () => {
  return (
    <section className={style.back}>
      <Container>
        <HEADER>:: Coding test ::</HEADER>
        <Title className={style.title}>Join the movement.</Title>
        <Subtitle className={style.title}>Screen on skills.</Subtitle>
        <img className={style.img} width={1200} height={550} src={bg} alt="" />
      </Container>
    </section>
  );
};

const Container = styled.div`
  max-width: 900px;
  padding-left: 60px;
  padding-right: 60px;
`;

const HEADER = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-top: 100px;
  margin-bottom: 40px;
  color: #0e141e;
`;

const Title = styled.h1`
  /* margin-top: 20px; */
  line-height: 1.3;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 56px;
  margin-bottom: 2px;
  color: #131414;
`;

const Subtitle = styled.h1`
  line-height: 1.3;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 20px;
  font-size: 56px;
  color: #068932;
`;

const Image = styled.div`
  background-image: url("../../assets/bg.jpg");
  /* background-size: cover; */
  background-position: center;
  width: 200px;
  background-repeat: no-repeat;
`;
