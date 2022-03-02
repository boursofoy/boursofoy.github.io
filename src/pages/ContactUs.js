import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import {Wrapper} from "../components/misc/Layouts";
import GetStartedLight from "../components/cta/GetStartedLight";



export default () => {
  return (
    <Wrapper>
      <Header roundedHeaderButton={true}/>
      <ContactUsForm />
      <GetStartedLight/>
      <Footer />
    </Wrapper>
  );
};
