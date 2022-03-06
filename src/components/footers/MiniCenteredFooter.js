import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {footer as data} from "../../data";


const Container = tw(ContainerBase)`bg-palette1-100 text-white -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl text-black font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-black hocus:border-palette1-400 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-white hover:text-black transition duration-300 mx-4`}
  svg {
    ${tw`w-8 h-8`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-white`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            {/* <LogoImg src={logo} /> */}
            <LogoText>TheDrinkMarket</LogoText>
          </LogoContainer>
          <LinksContainer>
            {data.links.map((link) => {
              return(
                  <Link href={link.href}>{link.content}</Link>
              )
            })}
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/company/thedrinkmarket/">
              <LinkedInIcon style={{display:"center", verticalAlign:"middle"}} fontSize={"large"}/>
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, TheDrinkMarket Inc. Tous droits réservés.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
