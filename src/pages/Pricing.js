import React from "react";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FAQ from "components/faqs/SingleCol.js";
import {Wrapper} from "../components/misc/Layouts";
import {pricing as data} from "../data";

export default () => {


    return (
        <Wrapper>
            <Header roundedHeaderButton={true}/>

            <Pricing
                subheading={data.pricing.subheading}
                heading={data.pricing.heading}
                plans={data.pricing.plans}
            />
            <Testimonial
                heading={data.testimonials.heading}
                subheading={data.testimonials.subheading}
                testimonials={data.testimonials.testimonials}
            />
            <FAQ
                subheading={data.faq.subheading}
                description={data.faq.description}
                heading={data.faq.heading}
                faqs={data.faq.faqs}
            />
            <Footer/>
        </Wrapper>
    );
};
