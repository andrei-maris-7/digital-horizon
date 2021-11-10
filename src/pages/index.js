import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import Services from "sections/services";
import WhyDigital from "sections/why-digital";
import Values from "sections/values";
import SmartStrategies from "sections/smart-strategies";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Digital Horizon" />
        <Banner />
        <Services />
        <WhyDigital />
        <Values />
        <SmartStrategies />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
