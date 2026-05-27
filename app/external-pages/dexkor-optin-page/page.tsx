"use client";

import React from "react";
import "./lp2-globals.css";

import Navbar from "@/components/external-pages/landingpage-2/Navbar";
import Secodary from "@/components/external-pages/landingpage-2/Secondary";
import Hero from "@/components/external-pages/landingpage-2/Hero";
import Logo from "@/components/external-pages/landingpage-2/Logo";
import Features from "@/components/external-pages/landingpage-2/Features";
import Stats from "@/components/external-pages/landingpage-2/Starts";
import Testimonials from "@/components/external-pages/landingpage-2/Testmonial";
import Counter from "@/components/external-pages/landingpage-2/Counter";
import Comparison from "@/components/external-pages/landingpage-2/ComparisonSection";
import CaseStudySection from "@/components/external-pages/landingpage-2/CaseStudySection";
import CTA from "@/components/external-pages/landingpage-2/Cta";
import FAQ from "@/components/external-pages/landingpage-2/Faq";
import FinalSection from "@/components/external-pages/landingpage-2/Final";
import Footer from "@/components/external-pages/landingpage-2/Footer";

export default function OptinPage2() {
  return (
    <div className="-mt-16 overflow-hidden bg-white text-[#0F1B3D]">
      <Navbar />
      <Secodary />
      <Hero />
      <Logo />
      <Features />
      <Stats />
      <Testimonials />
      <Counter />
      <Comparison />
      <CaseStudySection />
      <CTA />
      <FAQ />
      <FinalSection />
      <Footer />
    </div>
  );
}
