import Head from "next/head";
import Button from "@/components/Button";
import styled from "styled-components";

import HeroComponent from "@/components/HeroComponent/HeroComponent";
import HowWeHelp from "@/components/HowWeHelp/HowWeHelp";
import WhyDoesItMatter from "@/components/WhyDoesItMatter/WhyDoesItMatter";
import DonationComponent from "@/components/DonationComponent/DonationComponent"
import NewsMedia from "@/components/NewsMedia/NewsMedia";



const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const WhiteButton = styled.button`
  color: black;
  background-color: white;
  font-size: 20px;
  margin: auto;
  margin-bottom: 40px;
  // padding: 0 10px;
  
  border-radius: 20px;
  border: 2px solid black;
  width: 630px;
  height: 30px; 

  &:hover { 
    cursor: pointer;
  }
  `

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
        />
        <HowWeHelp></HowWeHelp>

        <WhiteButton>
        Click here to learn more about the meaning of Harm Reduction
        </WhiteButton>

        <WhyDoesItMatter
        imgSrc="/WDIMatter.jpg"
        imgAltText="Why does it matter Img"
        imgHeight="3783"
        imgWidth="2553"
        />
        <NewsMedia/>
        <DonationComponent/>
      </main>
    </>
  );
}
