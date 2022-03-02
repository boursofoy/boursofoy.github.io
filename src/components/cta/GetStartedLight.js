import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { ContentWithPaddingXl, Container } from "components/misc/Layouts";
import {contactSocials as data} from "../../data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from "styled-components";

const PrimaryBackgroundContainer = tw.div`py-16 lg:py-20 bg-palette1-400 relative rounded-2xl`
const Row = tw.div`px-4 sm:px-16 mx-auto flex justify-center items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`
const TextContainer = tw(ColumnContainer)`text-2xl sm:text-4xl font-bold`;
const Subheading = tw.h6`text-palette1-200`;
const Heading = tw.h5`text-palette1-100`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-black hover:text-palette1-100 transition duration-300 mx-4`}
  svg {
    ${tw`w-32 h-32`}
  }
`;


const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-2xl`
const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-palette1-200 opacity-50`
const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-palette1-200 opacity-50`
export default () => {
  return (
    <Container css={data.pushDownFooter && tw`mb-10 lg:mb-10`}>
      <ContentWithPaddingXl>
      <PrimaryBackgroundContainer>
        <Row>
          <TextContainer>
            {data.subheading && <Subheading>{data.subheading}</Subheading>}
            <Heading>{data.heading}</Heading>
          </TextContainer>
          {/*<LinksContainer>
            <PrimaryLink href={data.primaryLinkUrl}>{primaryLinkText}</PrimaryLink>
            <SecondaryLink href={data.secondaryLinkUrl}>{secondaryLinkText}</SecondaryLink>
          </LinksContainer>
          */}
          <SocialLinksContainer>
            <SocialLink href={data.primaryLinkUrl}>
              <InstagramIcon style={{display:"center", verticalAlign:"middle"}}/>
            </SocialLink>
            <SocialLink href={data.secondaryLinkUrl}>
              <LinkedInIcon style={{display:"center", verticalAlign:"middle"}}/>
            </SocialLink>
          </SocialLinksContainer>
        </Row>
        <DecoratorBlobContainer>
          <DecoratorBlob1/>
          <DecoratorBlob2/>
        </DecoratorBlobContainer>
      </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
