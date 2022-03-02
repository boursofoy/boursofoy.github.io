import React from "react";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import {Wrapper} from "../components/misc/Layouts";
import {aboutUs as data} from "../data";

export default () => {
  return (
    <Wrapper>
      <Header roundedHeaderButton={true} />
      <MainFeature1
          heading = {data.feature1.heading}
          subheading = {data.feature1.subheading}
          description = {data.feature1.description}
          primaryButtonText = {data.feature1.primaryButtonText}
          primaryButtonUrl = {data.feature1.primaryButtonUrl}
          imageSrc = {data.feature1.imageSrc}
          buttonRounded = {data.feature1.buttonRounded}
          imageRounded = {data.feature1.imageRounded}
          imageBorder = {data.feature1.imageBorder}
          imageShadow = {data.feature1.imageShadow}
          imageCss = {data.feature1.imageCss}
          imageDecoratorBlob = {data.feature1.imageDecoratorBlob}
          imageDecoratorBlobCss = {data.feature1.imageDecoratorBlobCss}
          textOnLeft = {data.feature1.textOnLeft}
      />
      <MainFeature1
          heading = {data.feature2.heading}
          subheading = {data.feature2.subheading}
          description = {data.feature2.description}
          primaryButtonText = {data.feature2.primaryButtonText}
          primaryButtonUrl = {data.feature2.primaryButtonUrl}
          imageSrc = {data.feature2.imageSrc}
          buttonRounded = {data.feature2.buttonRounded}
          imageRounded = {data.feature2.imageRounded}
          imageBorder = {data.feature2.imageBorder}
          imageShadow = {data.feature2.imageShadow}
          imageCss = {data.feature2.imageCss}
          imageDecoratorBlob = {data.feature2.imageDecoratorBlob}
          imageDecoratorBlobCss = {data.feature2.imageDecoratorBlobCss}
          textOnLeft = {data.feature2.textOnLeft}
      />
      <Features
        subheading={data.featureSatisfaction.subheading}
        heading={data.featureSatisfaction.heading}
        description={data.featureSatisfaction.description}
        cards={data.featureSatisfaction.cards}
        linkText={data.featureSatisfaction.linkText}
      />

      <TeamCardGrid
        subheading ={data.featureOurTeam.subheading}
        heading = {data.featureOurTeam.heading}
        description = {data.featureOurTeam.description}
        cards = {data.featureOurTeam.cards}
      />
      <Footer />
    </Wrapper>
  );
};
