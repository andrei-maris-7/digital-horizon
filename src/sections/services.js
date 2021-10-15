/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Branding from "assets/key-feature/branding.png";
import Social from "assets/key-feature/social.png";
import Optimization from "assets/key-feature/optimization.png";
import Content from "assets/key-feature/content.png";

const data = [
  {
    id: 1,
    imgSrc: Branding,
    altText: "Brand Development",
    title: "Brand Development",
    text:
      "We help build a positive perception of your company’s brand in order to distinguish your products and services from your competitors and to communicate effectively with your intended audience.",
  },
  {
    id: 2,
    imgSrc: Content,
    altText: "Content Creation",
    title: "Content Creation",
    text:
      "Our content specialists stay up-to-date with the latest news and market trends to ensure we adhere to the newest industry standards when developing content.",
  },
  {
    id: 3,
    imgSrc: Optimization,
    altText: "Search Engine Optimization",
    title: "Search Engine Optimization",
    text:
      "Through careful keyword research and white hat SEO practices, we can help you achieve higher organic rankings and increased visibility in search results.",
  },
  {
    id: 4,
    imgSrc: Social,
    altText: "Social Media Marketing",
    title: "Social Media Marketing",
    text:
      "We build social media campaigns to help your business grow and engage your followers. Using data and analytics, we develop custom advertising strategies tailored to your business.",
  },
];

// Based on the id's, we are able to scroll to different parts of the website

export default function Services() {
  return (
    <section sx={{ variant: "section.services" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Our services"
          title="We offer a large variety of services"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
