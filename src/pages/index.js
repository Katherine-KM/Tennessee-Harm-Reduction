import Head from "next/head";
import Button from "@/components/Button";
import styled from "styled-components";
import HeroComponent from "@/components/HeroComponent/HeroComponent";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Tennessee Harm Reduction</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroComponent 
          coloredText="TENNESSEE'S #1"
          h1Text="Harm Reduction Charity"
          pText="A charity non-profit organisation that offers health education
          and harm reduction services to some of Tennessee's most vulnerable
          and underserved citizens." 
          buttonText="What is Harm Reduction?"
          imgSrc="/indexHero.png"
          imgAltText="Hero Img"
          imgHeight= "509"
          imgWidth="729"
          buttonSize='lg'
        />
        <Title> My blog </Title>
        <Button size="lg" bgColor="black">
          What is Harm Reduction?
        </Button>
        <Button size="xl" bgColor="white">
          Click here to learn more about the meaning of Harm Reduction
        </Button>
        <Button size="sm"> learn more </Button>
      </main>
    </>
  );
}
