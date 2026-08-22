import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, FloatingHireButton, SiteNav } from "@/components/portfolio/site-nav";
import {
  About,
  Certifications,
  Contact,
  GithubSection,
  Hero,
  Projects,
  ResumeSection,
  Skills,
  SiteFooter,
} from "@/components/portfolio/sections";

const title = "Sanjana N V — CSE Student & Python Developer Portfolio";
const description =
  "Portfolio of Sanjana N V, Computer Science Engineering student and Python developer: projects, skills, certifications, and contact details.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GithubSection />
        <ResumeSection />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
