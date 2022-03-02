import React from "react";
import {Wrapper} from "../components/misc/Layouts";
import Header from "components/headers/light.js";
import FeatureWithSteps from "../components/features/TwoColWithSteps";
import Footer from "../components/footers/MiniCenteredFooter";
import {exParty as data} from "../data";

export default function ExParty() {


    return(
        <Wrapper>
            <Header roundedHeaderButton={true}/>
            <FeatureWithSteps
                subheading = {data.steps1.subheading}
                heading = {data.steps1.heading}
                imageSrc = {data.steps1.imageSrc}
                imageRounded = {data.steps1.imageRounded}
                imageBorder = {data.steps1.imageBorder}
                imageShadow = {data.steps1.imageShadow}
                imageDecoratorBlob = {data.steps1.imageDecoratorBlob}
                textOnLeft = {data.steps1.textOnLeft}
                steps = {data.steps1.steps}
                decoratorBlobCss = {data.steps1.decoratorBlobCss}
            />

            <FeatureWithSteps
                subheading = {data.steps2.subheading}
                heading = {data.steps2.heading}
                imageSrc = {data.steps2.imageSrc}
                imageRounded = {data.steps2.imageRounded}
                imageBorder = {data.steps2.imageBorder}
                imageShadow = {data.steps2.imageShadow}
                imageDecoratorBlob = {data.steps2.imageDecoratorBlob}
                textOnLeft = {data.steps2.textOnLeft}
                steps = {data.steps2.steps}
                decoratorBlobCss = {data.steps2.decoratorBlobCss}
            />

            <Footer />
        </Wrapper>

    )
}