import React from "react";
import type { Metadata } from "next";
import StructuredData from "@/components/shared/StructuredData";
import About from "@/components/about/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Kuldeep Gaud - Full Stack Developer at Experiment Labs. Explore my professional experience, open source contributions, and personal projects.",
  openGraph: {
    title: "About Kuldeep Gaud | Full Stack Developer",
    description:
      "Professional experience, open source contributions, and projects by Kuldeep Gaud - Full Stack Developer passionate about building scalable web applications.",
    url: "https://hikuldeep.vercel.app/about",
  },
  twitter: {
    title: "About Kuldeep Gaud | Full Stack Developer",
    description:
      "Professional experience, open source contributions, and projects by Kuldeep Gaud - Full Stack Developer passionate about building scalable web applications.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kuldeep Gaud",
  url: "https://hikuldeep.vercel.app",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Experiment Labs",
  },
  description:
    "Full Stack Developer passionate about building scalable web applications and contributing to open source.",
  sameAs: [
    "https://github.com/Deepanshudks",
    "https://www.linkedin.com/in/kuldeep-gaud/",
    "https://x.com/Deepanshudk08",
  ],
  email: "mailto:KuldeepGaud100@gmail.com",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "Open Source",
    "Web Development",
  ],
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={personSchema} />
      <About />
    </>
  );
}
