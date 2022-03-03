import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`uppercase text-center md:text-center`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw(SectionDescription)`w-full text-center`;
const TitlesContent = tw.div`lg:py-8 text-center md:text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This component has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {image: "", title: "", description: ""},
    {image: "", title: "", description: ""},
    {image: "", title: "", description: ""},
  ]

  if (!cards) cards = defaultCards;

  return (
      <div id="first_feature">
        <Container>
          <ThreeColumnContainer>
            <TitlesContent>
              {subheading && <Subheading>{subheading}</Subheading>}
              <Heading>{heading}</Heading>
            </TitlesContent>
              {description && <Description>{description}</Description>}
            <VerticalSpacer />
            {cards.map((card, i) => (
              <Column key={i}>
                <Card>
                  <span className="imageContainer">
                    {card.image}
                  </span>
                  <span className="textContainer">
                    <span tw="text-palette1-200" className="title">{card.title || "Fully Secure"}</span>
                    <p className="description">
                      {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                    </p>
                  </span>
                </Card>
              </Column>
            ))}
          </ThreeColumnContainer>
          {/*<DecoratorBlob*/}
        </Container>
      </div>
  );
};
