import React from "react";
import tw from "twin.macro";
import { hero as data } from "../../data.js";
import {PrimaryButton} from "../misc/Buttons";
import {ChevronDownIcon} from "@heroicons/react/solid";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

import DesignIllustration from "../../images/my/mockup.png";
import BackgroundVideo from "../../images/my/background.mp4"

const AnimatedBackground = tw.div`lg:bg-palette1-400`;
const VideoBackground = tw.div`max-w-screen-2xl max-h-screen pt-4 hidden lg:block`

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center lg:mx-8 xl:mx-auto xl:px-4 max-w-screen-xl mx-auto pt-10 md:pt-10`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:mb-20 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 text-black text-base xl:text-lg`;

const Hook = tw.a`flex flex-col justify-center text-lg max-w-screen-sm text-center font-medium text-black mx-auto`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;
const IconContainer = tw.div`flex mx-auto h-8 w-8 text-black justify-center`;

export default ({ roundedHeaderButton }) => {

  const handleScroll = (hook) => {
    const element = document.getElementById(hook);
    element && element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest"});
  }

  return (
    <AnimatedBackground>
      <Header background={true} roundedHeaderButton={roundedHeaderButton} />
      <VideoBackground style={{position:"absolute", opacity:"35%"}}>
        <video autoPlay loop muted id="video">
          <source src={BackgroundVideo} type="video/mp4"/>
        </video>
      </VideoBackground>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              {data.main1}<span tw="text-palette1-100">{data.color1}</span>{data.main2}<span tw="text-palette1-100">{data.color2}</span>
            </Heading>
            <Paragraph>
              {data.sub}
            </Paragraph>
            {/*
            <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
            </Actions>
            */}
            <PrimaryButton css={roundedHeaderButton && tw`rounded-2xl`} href="/contact">{data.button}</PrimaryButton>
            {/*
            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
            */}
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 h-128 xl:max-w-xs" src={DesignIllustration} alt="Mockup Application" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <Hook style={{cursor:"pointer"}} onClick={() => {handleScroll("first_feature")}}>
          {data.hook}
          <IconContainer>
            <ChevronDownIcon/>
          </IconContainer>
        </Hook>
        {/*<DecoratorBlob1 />*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
              fill="#ffffff"
              d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,90.7C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          >

          </path>
        </svg>
      </Container>
    </AnimatedBackground>
  );
};
