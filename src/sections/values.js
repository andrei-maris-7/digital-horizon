/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Learning",
    title: "Learning",
    text:
      "We work in an incredibly dynamic, ever-changing industry. That’s why we put a great deal of time and effort to be on the forefront of new products, features and strategies that we can put to work to profit our clients.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Trust and Respect",
    title: "Trust and Respect",
    text:
      "We are honest, easy to deal with, handle our clients with integrity and stick to the agreed terms. We manage your online marketing budget as if it was our own.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Excellency",
    title: "Excellency",
    text:
      "We strive to deliver the highest quality and value possible through simple, easy and relevant solutions. We are dedicated, hardworking, creative, innovative and willing to achieve the highest standards with our approach, operations and collaborations.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Communication",
    title: "Communication",
    text:
      "Our experience working with hundreds of clients has taught us that the more we collaborate and engage our clients in our strategic planning, the better the campaigns will ultimately perform.",
  },
];

export default function Values() {
  return (
    <section sx={{ variant: "section.values" }}>
      <Container>
        <SectionHeader slogan="Core Values" title="Why We Succeed" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            ></FeatureCard>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
