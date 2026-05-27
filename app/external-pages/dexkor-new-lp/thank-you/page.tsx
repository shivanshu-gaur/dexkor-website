"use client";

import React from "react";
import Script from "next/script";
import "../lp1-globals.css";

import ConfirmBand from "@/components/external-pages/landingpage-1/ConfirmBand";
import Navbar from "@/components/external-pages/landingpage-1/Navbar";
import Footer from "@/components/external-pages/landingpage-1/Footer";
import Ticker from "@/components/external-pages/landingpage-1/Ticker";

const steps = [
  {
    num: 1,
    title: "Calendar invite, in your inbox",
    body: "Lands within 60 seconds. Pre-loaded with the meeting link, the time, and the name of the co-founder running your session.",
    tag: "T + 60 seconds",
  },
  {
    num: 2,
    title: "A 2-minute prep doc, 24 hours before",
    body: "The exact 3 numbers we want from you before the call. Ticket volume, current vendor, monthly spend. That's it.",
    tag: "T minus 24h",
  },
  {
    num: 3,
    title: "The working session itself",
    body: "20 minutes. No deck. We do the math live on your real numbers. You leave with a one-page side-by-side and a migration sketch.",
    tag: "Day of",
  },
];

const bringList = [
  { bold: "Your monthly ticket volume.", rest: " Rough is fine. Three-month average is better." },
  { bold: "Your current annual helpdesk spend.", rest: " Software only, not headcount." },
  { bold: "Your incumbent vendor.", rest: " Zendesk, Freshdesk, Intercom, or whatever else." },
];
const leaveList = [
  { bold: "One-page side-by-side", rest: " of your current cost stack against a consolidated DexKor stack." },
  { bold: "14-day migration sketch", rest: " with timing, owners, and what gets retired." },
  { bold: "A directional ROI number", rest: " your CFO can actually engage with." },
];

const logos = [
  { label: "FleetPilot" },
  { label: "ElevateHQ", italic: true },
  { label: "Cohira", mono: true },
  { label: "Lumen.", dot: true },
  { label: "Quanta", italic: true },
  { label: "Ridgeway", mono: true },
  { label: "Northbloom" },
];

const proofStats = [
  { num: "350+", label: "B2B SaaS teams", sub: " on DexKor across India and APAC" },
  { num: "37%", label: "Avg AI resolution rate", sub: " on tier-1 tickets by day 30" },
  { num: "14d", label: "Avg migration time", sub: " from Zendesk to live on DexKor" },
  { num: "98%", label: "Customer retention", sub: " across the last 4 quarters" },
];

const reviews = [
  {
    badge: "AI That Resolves",
    badgeColor: "blue" as const,
    quote: "Three vendors had told us their AI would change everything. Dexy is the first one that actually closed tickets without me babysitting it. <em>37% tier-1 by day 30.</em> I stopped checking the dashboard hourly.",
    initials: "VS",
    name: "VP Support",
    role: "FleetPilot · Series B SaaS",
  },
  {
    badge: "Migration in 12 Days",
    badgeColor: "green" as const,
    quote: "I'd been putting off the Zendesk migration for 18 months. The 14-day promise sounded like a marketing line. <em>They beat it by two days.</em> Concierge migration was real, not an SOW with extra steps.",
    initials: "DO",
    name: "Director of Operations",
    role: "ElevateHQ · 22 agents",
  },
  {
    badge: "One Pane, Not Six",
    badgeColor: "amber" as const,
    quote: "We had 6 tabs open per agent. Now it's one. <em>Avg handle time dropped 32% in month one.</em> CSAT jumped from 4.2 to 4.7 in the same window. My VP stopped doing Sunday spreadsheets.",
    initials: "CO",
    name: "Head of Customer Operations",
    role: "Cohira · 36 agents",
  },
  {
    badge: "CFO Approved in 9 Min",
    badgeColor: "blue" as const,
    quote: "My CFO walked into the renewal review expecting a fight. I handed her the one-page side-by-side from the working session. <em>She approved the switch in 9 minutes.</em> That has never happened.",
    initials: "CX",
    name: "Director of CX",
    role: "Series B Marketing SaaS",
  },
  {
    badge: "Founder in My Slack",
    badgeColor: "green" as const,
    quote: "What sold me wasn't the demo. It was the co-founder being in our Slack the next day with a migration sketch I could actually run. <em>Try getting that response time</em> from a Series D vendor.",
    initials: "FC",
    name: "Founder & CEO",
    role: "Series A FinOps SaaS",
  },
  {
    badge: "4 Tools to 1",
    badgeColor: "amber" as const,
    quote: "We were paying for Zendesk, Intercom, Aircall, and a separate KB tool. The renewal stack was $61k a year for 14 agents. <em>DexKor consolidated all four for under $30k.</em> The conversation with my board changed instantly.",
    initials: "VP",
    name: "VP Customer Success",
    role: "Series B HRTech SaaS",
  },
];

const badgeStyles = {
  blue: { background: "rgba(44,138,229,.12)", color: "#1F6FBF" },
  green: { background: "rgba(16,185,129,.12)", color: "#0E7C5A" },
  amber: { background: "rgba(245,158,11,.14)", color: "#A05B00" },
};

const waitCards = [
  {
    iconPath: ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"],
    h: "Read the Scaling CX Playbook",
    p: "15 pages. 22-minute read. The 9 plays we run when we audit your stack. Will make the working session 3x more useful.",
    arrow: "Open the playbook &rarr;",
  },
  {
    custom: "linkedin",
    iconPath: [],
    h: "Connect with the founders on LinkedIn",
    p: "The team behind DexKor posts the actual numbers we see across customers. No \"10 ways to be a thought leader\" posts. Promise.",
    arrow: "Follow on LinkedIn &rarr;",
  },
  {
    iconPath: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
    h: "Read the migration field notes",
    p: "One-page case study. How a 130-person logistics SaaS rebuilt its support stack in a quarter. Numbers are real.",
    arrow: "Open field notes &rarr;",
  },
];

const tickerMessages = [
  { initials: "VS", msg: "<b>VP Support, FleetPilot</b> just booked a working session", time: "2 min ago" },
  { initials: "CX", msg: "<b>Head of CX, Series B SaaS</b> just downloaded the playbook", time: "8 min ago" },
  { initials: "27", msg: "<b>27 SaaS teams</b> evaluating DexKor this week", time: "Today" },
  { initials: "FC", msg: "<b>Founder, Series A SaaS</b> joined the working session waitlist", time: "18 min ago" },
  { initials: "CS", msg: "<b>CS Director, Cohira</b> read the migration field notes", time: "34 min ago" },
  { initials: "14", msg: "<b>142 CX leaders</b> reading the playbook right now", time: "Live" },
];

export default function ThankYouPage() {
  return (
    <div className="-mt-16 overflow-hidden bg-white text-[#1F2937] font-sans antialiased">
      <Script id="fb-pixel-lead" strategy="afterInteractive">
        {`
          fbq('track', 'Lead');
        `}
      </Script>
      <ConfirmBand />
      <Navbar variant="thanks" />

      {/* HERO CONFIRMATION */}
      <section
        className="relative text-center"
        style={{
          padding: "80px 32px 64px",
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(44,138,229,.10), transparent 70%), radial-gradient(50% 40% at 100% 100%, rgba(44,138,229,.06), transparent 70%), #FFFFFF",
        }}
      >
        <div className="max-w-[820px] mx-auto">
          <div
            className="success-circle-check relative w-[88px] h-[88px] rounded-full text-white flex items-center justify-center mx-auto animate-pop-in"
            style={{
              background: "linear-gradient(135deg, #2C8AE5 0%, #1F6FBF 100%)",
              marginBottom: 28,
              boxShadow:
                "0 0 0 8px rgba(44,138,229,.18), 0 0 0 22px rgba(44,138,229,.08), 0 18px 40px -10px rgba(44,138,229,.5)",
            }}
          >
            <svg
              className="w-11 h-11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div
            className="inline-flex items-center gap-2.5 font-mono font-semibold text-[#2C8AE5] mb-5"
            style={{
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              background: "rgba(44,138,229,.10)",
              borderRadius: 100,
              padding: "7px 14px",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#2C8AE5] animate-blink" />
            Booking Confirmed
          </div>

          <h1
            className="font-serif text-[#0F1B3D] mb-5"
            style={{
              fontWeight: 500,
              fontSize: "clamp(40px, 5.4vw, 64px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
            }}
          >
            You're <em className="italic text-[#2C8AE5] font-medium">locked in.</em>
            <br />
            See you at the working session.
          </h1>

          <p
            className="font-serif italic font-light text-[#264B85] mx-auto mb-9"
            style={{
              fontSize: "clamp(17px, 1.5vw, 21px)",
              lineHeight: 1.5,
              maxWidth: "56ch",
            }}
          >
            A calendar invite is on its way. Block 20 minutes. Bring one number
            and one vendor name. We'll handle the rest.
          </p>

          <div
            className="inline-flex items-center gap-4 bg-white border-[1.5px] border-[rgba(15,27,61,.12)] rounded-2xl mb-6 max-sm:flex-col max-sm:gap-3"
            style={{
              padding: "18px 24px",
              boxShadow: "0 18px 40px -18px rgba(15,27,61,.18)",
            }}
          >
            <div
              className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[#2C8AE5] flex-shrink-0"
              style={{ background: "rgba(44,138,229,.10)" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div className="text-left max-sm:text-center">
              <div
                className="font-mono uppercase text-[#6B7585] font-semibold mb-1"
                style={{ fontSize: 10.5, letterSpacing: ".14em" }}
              >
                ◆ Your Session
              </div>
              <div className="text-[15px] text-[#0F1B3D] font-semibold">
                20-min working session with a DexKor co-founder
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-[13.5px] text-[#264B85] mt-1">
            <span className="w-2 h-2 rounded-full bg-[#10b981] live-dot relative" />
            Check your inbox in the next 60 seconds for the calendar invite and
            prep doc.
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0F1B3D", padding: "90px 32px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 60% at 0% 0%, rgba(44,138,229,.18), transparent 60%), radial-gradient(40% 50% at 100% 100%, rgba(91,168,236,.10), transparent 60%)",
          }}
        />
        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div
              className="inline-flex items-center gap-2.5 font-mono font-semibold mb-4"
              style={{
                color: "#5BA8EC",
                fontSize: 11,
                letterSpacing: ".16em",
                textTransform: "uppercase",
              }}
            >
              <span className="w-[18px] h-[1.5px]" style={{ background: "#5BA8EC" }} />
              What Happens Next
            </div>
            <h2
              className="font-serif text-white mb-4"
              style={{
                fontWeight: 500,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-.02em",
              }}
            >
              Three things that{" "}
              <em
                className="italic font-medium"
                style={{ color: "#5BA8EC" }}
              >
                show up
              </em>{" "}
              in your inbox.
            </h2>
            <p
              className="font-serif italic font-light mx-auto"
              style={{
                fontSize: 18,
                lineHeight: 1.5,
                color: "rgba(255,255,255,.78)",
                maxWidth: "56ch",
              }}
            >
              No phone tag. No SDR cadence. No 14 emails to confirm a 20-minute
              call.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 grid-cols-1">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl transition hover:-translate-y-[3px]"
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.12)",
                  padding: "28px 26px",
                }}
              >
                <div
                  className="inline-flex items-center justify-center font-serif font-semibold text-white bg-[#2C8AE5] mb-4 rounded-[10px]"
                  style={{ width: 36, height: 36, fontSize: 16 }}
                >
                  {s.num}
                </div>
                <h4
                  className="font-serif font-medium text-white mb-2.5"
                  style={{ fontSize: 20, lineHeight: 1.25 }}
                >
                  {s.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,.72)" }}
                >
                  {s.body}
                </p>
                <div
                  className="inline-block mt-3.5 font-mono font-bold uppercase"
                  style={{
                    fontSize: 10,
                    letterSpacing: ".14em",
                    color: "#5BA8EC",
                  }}
                >
                  ◆ {s.tag}
                </div>
              </div>
            ))}
          </div>

          {/* expect grid */}
          <div className="grid gap-6 mt-16 lg:grid-cols-2 grid-cols-1">
            {[
              { h: "Bring", heading: "Two numbers and one vendor name.", list: bringList },
              { h: "Leave With", heading: "A side-by-side. A sketch. A number.", list: leaveList },
            ].map((card) => (
              <div
                key={card.h}
                className="rounded-2xl"
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.12)",
                  padding: "28px 28px",
                }}
              >
                <div
                  className="expect-card-h font-mono font-bold uppercase mb-3.5 flex items-center gap-2.5"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".16em",
                    color: "#5BA8EC",
                  }}
                >
                  {card.h}
                </div>
                <h3
                  className="font-serif font-medium text-white mb-4"
                  style={{ fontSize: 22, lineHeight: 1.25 }}
                >
                  {card.heading}
                </h3>
                <ul className="list-none p-0 flex flex-col gap-3">
                  {card.list.map((item) => (
                    <li
                      key={item.bold}
                      className="flex gap-3 items-start text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,.85)" }}
                    >
                      <span
                        className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-px"
                        style={{
                          background: "rgba(91,168,236,.18)",
                          color: "#5BA8EC",
                        }}
                      >
                        ✓
                      </span>
                      <span>
                        <b className="text-white font-bold">{item.bold}</b>
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF WALL */}
      <section className="bg-white relative" style={{ padding: "110px 32px" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 font-mono font-semibold text-[#2C8AE5] mb-4 text-[11px] tracking-[.16em] uppercase">
              <span className="w-[18px] h-[1.5px] bg-[#2C8AE5]" />
              The Proof Wall
            </div>
            <h2
              className="font-serif text-[#0F1B3D] mb-4"
              style={{
                fontWeight: 500,
                fontSize: "clamp(32px, 4vw, 50px)",
                lineHeight: 1.05,
                letterSpacing: "-.02em",
              }}
            >
              You're in{" "}
              <em className="italic text-[#2C8AE5] font-medium">good company.</em>
            </h2>
            <p
              className="font-serif italic font-light text-[#264B85] mx-auto"
              style={{ fontSize: 18, lineHeight: 1.5, maxWidth: "56ch" }}
            >
              27 B2B SaaS teams switched to DexKor this quarter. Here's what they
              said about the working session that started it.
            </p>
          </div>

          {/* Logos */}
          <div
            className="flex justify-center items-center flex-wrap gap-14 mb-[72px] py-8"
            style={{
              borderTop: "1px solid rgba(15,27,61,.12)",
              borderBottom: "1px solid rgba(15,27,61,.12)",
            }}
          >
            {logos.map((l) => (
              <span
                key={l.label}
                className={`opacity-55 grayscale text-[#264B85] transition-opacity hover:opacity-95 hover:grayscale-0 hover:text-[#2C8AE5] ${
                  l.mono ? "font-mono text-lg" : "font-serif text-[22px]"
                } ${l.italic ? "italic" : ""}`}
                style={{
                  fontWeight: 600,
                  letterSpacing: "-.01em",
                }}
              >
                {l.dot ? (
                  <>
                    Lumen<b className="text-[#2C8AE5]">.</b>
                  </>
                ) : (
                  l.label
                )}
              </span>
            ))}
          </div>

          {/* Proof stats */}
          <div className="grid mb-[72px] lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            {proofStats.map((s, i) => (
              <div
                key={s.label}
                className="text-center"
                style={{
                  padding: "20px 24px",
                  borderRight:
                    i < proofStats.length - 1 ? "1px solid rgba(15,27,61,.12)" : "none",
                }}
              >
                <div
                  className="font-serif text-[#2C8AE5] mb-2.5"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(38px, 4.4vw, 56px)",
                    lineHeight: 1,
                    letterSpacing: "-.02em",
                  }}
                >
                  {s.num}
                </div>
                <div className="text-[13px] text-[#264B85] font-medium leading-snug">
                  <b className="text-[#0F1B3D] font-bold">{s.label}</b>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Featured quote */}
          <div
            className="featured-quote text-white relative overflow-hidden mb-8"
            style={{
              background:
                "linear-gradient(135deg, #0F1B3D 0%, #122348 100%)",
              borderRadius: 18,
              padding: "56px 56px",
              boxShadow: "0 30px 60px -28px rgba(15,27,61,.3)",
            }}
          >
            <div
              className="inline-flex items-center gap-2.5 font-mono font-bold uppercase mb-5 relative z-10"
              style={{
                fontSize: 11,
                letterSpacing: ".16em",
                color: "#5BA8EC",
              }}
            >
              <span className="w-4 h-[1.5px]" style={{ background: "#5BA8EC" }} />
              Featured Customer
            </div>
            <p
              className="font-serif text-white mb-8 relative z-10"
              style={{
                fontWeight: 400,
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.4,
                letterSpacing: "-.005em",
                maxWidth: "60ch",
              }}
            >
              Renewal hike was 38% on a stack we'd already outgrown. We were
              locked at $47k a year before DexKor. Now it's{" "}
              <em
                className="italic font-medium"
                style={{ color: "#5BA8EC" }}
              >
                one platform, half the spend, and our first AI-resolution week
                hit 32%.
              </em>{" "}
              The math made itself.
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div
                className="rounded-full text-white flex items-center justify-center font-serif font-semibold flex-shrink-0"
                style={{
                  width: 56,
                  height: 56,
                  background:
                    "linear-gradient(135deg, #2C8AE5, #1F6FBF)",
                  fontSize: 18,
                }}
              >
                HC
              </div>
              <div>
                <div className="font-bold text-white text-[15px] mb-0.5">
                  Head of CX
                </div>
                <div
                  className="text-[13px]"
                  style={{ color: "rgba(255,255,255,.7)" }}
                >
                  Series B Logistics SaaS · 18-agent team
                </div>
                <div
                  className="flex gap-0.5 mt-1"
                  style={{ color: "#FFC03D", fontSize: 14, letterSpacing: ".04em" }}
                >
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="grid gap-[22px] lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {reviews.map((r) => (
              <div
                key={r.name + r.role}
                className="bg-white border border-[rgba(15,27,61,.12)] rounded-2xl flex flex-col transition relative hover:-translate-y-[3px] hover:border-[#2C8AE5]/30"
                style={{ padding: "28px 26px" }}
              >
                <div
                  className="inline-flex items-center gap-1.5 mb-3.5 font-mono font-bold uppercase w-fit"
                  style={{
                    fontSize: 10,
                    letterSpacing: ".14em",
                    padding: "5px 10px",
                    borderRadius: 100,
                    ...badgeStyles[r.badgeColor],
                  }}
                >
                  ◆ {r.badge}
                </div>
                <div
                  className="inline-flex gap-0.5 mb-3.5"
                  style={{ color: "#FFC03D", fontSize: 13, letterSpacing: ".04em" }}
                >
                  ★ ★ ★ ★ ★
                </div>
                <p
                  className="font-serif text-[#0F1B3D] mb-5 flex-1"
                  style={{
                    fontWeight: 400,
                    fontSize: 16.5,
                    lineHeight: 1.5,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: r.quote.replace(
                      /<em>/g,
                      '<em style="font-style:italic;color:#2C8AE5;font-weight:500">'
                    ),
                  }}
                />
                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(15,27,61,.12)" }}
                >
                  <div
                    className="rounded-full text-white flex items-center justify-center font-sans font-bold flex-shrink-0"
                    style={{
                      width: 40,
                      height: 40,
                      background:
                        "linear-gradient(135deg, #2C8AE5, #1F6FBF)",
                      fontSize: 13,
                    }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#0F1B3D] text-sm">{r.name}</div>
                    <div className="text-[12.5px] text-[#264B85] mt-0.5">
                      {r.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHILE YOU WAIT */}
      <section className="bg-[#F1F6FC]" style={{ padding: "96px 32px" }}>
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center max-w-[640px] mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 font-mono font-semibold text-[#2C8AE5] mb-4 text-[11px] tracking-[.16em] uppercase">
              <span className="w-[18px] h-[1.5px] bg-[#2C8AE5]" />
              While You Wait
            </div>
            <h2
              className="font-serif text-[#0F1B3D]"
              style={{
                fontWeight: 500,
                fontSize: "clamp(28px, 3.6vw, 42px)",
                lineHeight: 1.1,
                letterSpacing: "-.02em",
              }}
            >
              Three things worth{" "}
              <em className="italic text-[#2C8AE5] font-medium">15 minutes</em>{" "}
              before the call.
            </h2>
          </div>
          <div className="grid gap-[22px] lg:grid-cols-3 grid-cols-1">
            {waitCards.map((card) => (
              <a
                key={card.h}
                href="#"
                className="bg-white border border-[rgba(15,27,61,.12)] rounded-2xl flex flex-col gap-3.5 no-underline text-inherit transition hover:-translate-y-[3px] hover:border-[#2C8AE5]"
                style={{ padding: "28px 28px" }}
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[#2C8AE5]"
                  style={{ background: "rgba(44,138,229,.12)" }}
                >
                  {card.custom === "linkedin" ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ) : (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {card.iconPath.map((d) => (
                        <path key={d} d={d} />
                      ))}
                    </svg>
                  )}
                </div>
                <h3
                  className="font-serif font-medium text-[#0F1B3D]"
                  style={{ fontSize: 19, lineHeight: 1.25 }}
                >
                  {card.h}
                </h3>
                <p
                  className="text-[#264B85]"
                  style={{ fontSize: 13.5, lineHeight: 1.55 }}
                >
                  {card.p}
                </p>
                <span
                  className="mt-auto inline-flex items-center gap-2 font-mono font-bold uppercase text-[#2C8AE5]"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".14em",
                  }}
                >
                  {card.arrow}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Ticker messages={tickerMessages} rotateMs={5000} />
    </div>
  );
}
