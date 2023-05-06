import Head from "next/head";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import HowWeHelp from "@/components/HowWeHelp/HowWeHelp";
import AccessAndTreatmentComponent from "@/components/AccessAndTreatmentComponent/AccessAndTreatmentComponent";

export default function whatisharmreduction() {
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
            coloredText="What is"
            h1Text="Harm Reduction?"
            pText="Harm reduction is a set of doable tactics and concepts designed to lessen the unfavourable effects of drug usage. The belief in and respect for the rights of drug users is the foundation of the harm reduction movement, which is also a social justice movement." 
            buttonText="learn more"
            imgSrc="/whrHero.png"
            imgAltText="Hero Img"
            imgHeight= "509"
            imgWidth="729"
          />
          <HowWeHelp /> 

          <AccessAndTreatmentComponent 
            coloredTitleText = "Syringe"
            titleText ="access in Tennessee"
            styledPText = "Syringes are legal to possess in Tennessee as there are two Tennessee laws offer limited immunity from Possession of Drug Paraphernalia charges."
            pText = "Pharmacies don’t need prescriptions to dispense syringes in Tennessee. However, many pharmacists refuse to sell syringes without prescriptions. We provide free access to syringe."
            imageDetails = {{URL: '/syringe-whr.png', alt: 'Syringe'}}
          />

<AccessAndTreatmentComponent 
            coloredTitleText = "Naloxone"
            titleText ="access in Tennessee"
            styledPText = "Naloxone is a safe and effective rescue medication that reverses the effects of opioids and saves lives."
            pText = "You may access Naloxone by 4 ways, including joining harm reduction program, Syringe exchange, Tennessee’s anti-drug coalitions and prevention coalitions and pharmacy with a prescription or a CoverRX. We provide free access Naloxone."
            imageDetails = {{URL: '/naloxone-whr.png', alt: 'Narcan Nasal Spray'}}
          />
        </main>
      </>
    );
  }
  