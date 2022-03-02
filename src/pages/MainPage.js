import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import {Wrapper} from "../components/misc/Layouts";
import ThreeColCenteredStatsPrimaryBackground from "../components/features/ThreeColCenteredStatsPrimaryBackground";
import ThreeColSimple from "../components/features/ThreeColSimple";

import {main as data} from "../data";
import MiniCenteredFooter from "../components/footers/MiniCenteredFooter";


export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-palette1-100`;
    const HighlightedText = tw.span`text-palette1-100`;

    return (
        <Wrapper>
            <Hero roundedHeaderButton={true}/>
            <Features
                subheading={<Subheading>{data.featureLogos.subheading}</Subheading>}
                heading={
                    <>
                    {data.featureLogos.header}<HighlightedText>{data.featureLogos.headerHigh}</HighlightedText>
                    </>
                }
                description={data.featureLogos.description}
                cards={data.featureLogos.cards}
            />

            <ThreeColCenteredStatsPrimaryBackground
                heading={data.featureBG.heading}
                subheading={data.featureBG.subheading}
                description={data.featureBG.description}
                stats={data.featureBG.stats}
            />

            <ThreeColSimple
                heading={data.feature3simple.heading}
                subheading={data.feature3simple.subheading}
                description={data.feature3simple.description}
                linkText={data.feature3simple.linkText}
                cards={data.feature3simple.cards}
            />

            <MainFeature
                subheading = {data.mainFeature.subheading}
                heading = {data.mainFeature.heading}
                description = {data.mainFeature.description}
                primaryButtonText = {data.mainFeature.primaryButtonText}
                primaryButtonUrl = {data.mainFeature.primaryButtonUrl}
                imageSrc = {data.mainFeature.imageSrc}
                buttonRounded = {data.mainFeature.buttonRounded}
                imageRounded = {data.mainFeature.imageRounded}
                imageBorder = {data.mainFeature.imageBorder}
                imageShadow = {data.mainFeature.imageShadow}
                imageCss = {data.mainFeature.imageCss}
                imageDecoratorBlob = {data.mainFeature.imageDecoratorBlob}
                imageDecoratorBlobCss = {data.mainFeature.imageDecoratorBlobCss}
                textOnLeft = {data.mainFeature.textOnLeft}
            />

            <MainFeature2
                subheading = {data.mainFeature2.subheading}
                heading = {data.mainFeature2.heading}
                description = {data.mainFeature2.description}
                primaryButtonText = {data.mainFeature2.primaryButtonText}
                primaryButtonUrl = {data.mainFeature2.primaryButtonUrl}
                features = {data.mainFeature2.features}
                textOnLeft = {data.mainFeature2.textOnLeft}
                buttonRounde = {data.mainFeature2.buttonRounded}
                imageRounded = {data.mainFeature2.imageRounded}
                imageBorder = {data.mainFeature2.imageBorder}
                imageShadow = {data.mainFeature2.imageShadow}
                showDecoratorBlob = {data.mainFeature2.showDecoratorBlob}
                iconRoundedFull = {data.mainFeature2.iconRoundedFull}
                iconFilled = {data.mainFeature2.iconFilled}
                iconContainerCss = {data.mainFeature2.iconContainerCss}
            />

            <FAQ
                subheading={data.faq.subheading}
                description={data.faq.description}
                heading={data.faq.heading}
                faqs={data.faq.faqs}
            />
            <GetStarted
                text={data.getStarted.text}
                primaryLinkText={data.getStarted.primaryLinkText}
                primaryLinkUrl={data.getStarted.primaryLinkUrl}
                pushDownFooter={data.getStarted.pushDownFooter}
            />
            <MiniCenteredFooter/>
        </Wrapper>
    );
}
