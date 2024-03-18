import React from "react";
import styled from "styled-components";
import "../../index.css";
import arrow_right from "../../assets/arrow_right.png";
import commmunity from "../../assets/community.jpg";

export const Section = () => {
  return (
    <div>
      <Title>It’s not a pipeline problem.</Title>
      <Subtitle>It’s a spotlight problem.</Subtitle>
      <Text>
        Tech hiring needs a reset. From prepping for jobs and practicing coding
        to running a world-class technical interview, give developers the tools
        they need to showcase their skills, passion, and potential.
      </Text>

      <Links>
        <Link>Prep</Link>
        <Link>Screen</Link>
        <Link>Interview</Link>
      </Links>
      <Container>
        <Wrap>
          <Header>:: Coding practice ::</Header>
          <MainTitle>Explore and expand your skills</MainTitle>
          <MainText>
            Every idea has a first line of code. Prep for jobs and sharpen your
            skills alongside a global community of developers. Access the
            content you need to develop new skills – and land the job you’ve
            dreamed of.
          </MainText>
          <Button>
            Sign up and practice
            <img src={arrow_right} alt="" />
          </Button>
        </Wrap>
        <div className="img">
          <img width={500} src={commmunity} alt="" />
        </div>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  /* margin-top: 20px; */
  line-height: 1.3;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 2px;
  color: #131414;
  text-align: center;
`;

const Subtitle = styled.h1`
  line-height: 1.3;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 15px;
  color: #068932;
  text-align: center;
`;

const Text = styled.p`
  max-width: 770px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Links = styled.div`
  gap: 110px;
  margin-top: 50px;
  margin-left: 36%;
  margin-bottom: 15px;
  display: flex;
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #39424e;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  max-width: 1420px;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #111621;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrap = styled.div`
  padding-top: 40px;
  padding-left: 70px;
  padding-bottom: 40px;
`;
const Header = styled.p`
  max-width: 414px;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 25px;
  color: #b7c9cc;
`;

const MainTitle = styled.h1`
  color: #f5f4f3;
  font-size: 24px;
  font-weight: 800;
`;

const MainText = styled.p`
  max-width: 450px;
  font-size: 18px;
  color: rgb(245, 244, 243);
  line-height: 1.59;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-size: 14px;
  &:hover {
    img {
      transition: all 0.2s;
      margin-left: 5px;
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
`;
