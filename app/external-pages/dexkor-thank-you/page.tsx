"use client";

import React, { useState, useEffect } from "react";
import "./lp3-globals.css";

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
    arrow: "Open the playbook →",
  },
  {
    custom: "linkedin",
    iconPath: [],
    h: "Connect with the founders on LinkedIn",
    p: "The team behind DexKor posts the actual numbers we see across customers. No \"10 ways to be a thought leader\" posts. Promise.",
    arrow: "Follow on LinkedIn →",
  },
  {
    iconPath: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
    h: "Read the migration field notes",
    p: "One-page case study. How a 130-person logistics SaaS rebuilt its support stack in a quarter. Numbers are real.",
    arrow: "Open field notes →",
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
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerState, setTickerState] = useState<"enter" | "fade" | "hidden">("enter");

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerState("hidden");
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
        setTickerState("enter");
      }, 350);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="-mt-16 overflow-hidden bg-white text-[#1F2937] font-sans antialiased">
      {/* TOP CONFIRMATION BAND */}
      <div className="confirm-band">
        <span className="check">✓</span>
        Working session confirmed · Calendar invite sent to your inbox
      </div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" aria-label="DexKor home">
            <img className="brand-logo" src="/images/thankyou_img_1.png" alt="DexKor logo" />
          </a>
          <a href="https://dexkor.com" className="nav-cta">
            Talk to Expert &rarr;
          </a>
        </div>
      </nav>

      {/* HERO CONFIRMATION */}
      <section className="hero">
        <div className="hero-inner">
          <div className="success-circle">
            <svg
              className="success-check"
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

          <div className="eyebrow">
            <span className="pdot"></span>
            Booking Confirmed
          </div>

          <h1 className="display">
            You're <em>booked.</em>
            <br />
            Calendar invite sent.
          </h1>

          <p className="subdeck">
            We've sent a calendar invite and a 2-minute prep doc to your inbox. Let's do the math live.
          </p>

          <div className="booking-card">
            <div className="icon-wrap">
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
            <div className="info">
              <div className="lbl">◆ Your Session</div>
              <div className="val">20-minute CX working session with a DexKor co-founder</div>
            </div>
          </div>

          <div className="inbox-hint">
            <span className="live-dot"></span>
            Calendar invite pre-loaded with co-founder meeting link sent.
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="next-section">
        <div className="next-inner">
          <div className="next-head">
            <div className="s-eyebrow">
              <span className="em"></span> What Happens Next
            </div>
            <h2>
              Three things that <em>show up</em> in your inbox.
            </h2>
            <p>No phone tag. No SDR sequence. No 14 emails to confirm a 20-minute call.</p>
          </div>

          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.num} className="step">
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <div className="tag">◆ {s.tag}</div>
              </div>
            ))}
          </div>

          {/* expect grid */}
          <div className="expect-grid">
            <div className="expect-card">
              <div className="h">Bring</div>
              <h3>Two numbers and one vendor name.</h3>
              <ul className="expect-list">
                {bringList.map((item) => (
                  <li key={item.bold}>
                    <span className="check">✓</span>
                    <span>
                      <b>{item.bold}</b>
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="expect-card">
              <div className="h">Leave With</div>
              <h3>A side-by-side. A sketch. A number.</h3>
              <ul className="expect-list">
                {leaveList.map((item) => (
                  <li key={item.bold}>
                    <span className="check">✓</span>
                    <span>
                      <b>{item.bold}</b>
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF WALL */}
      <section className="proof-section">
        <div className="proof-inner">
          <div className="proof-head">
            <div className="s-eyebrow">
              <span className="em"></span> The Proof Wall
            </div>
            <h2>
              You're in <em>good company.</em>
            </h2>
            <p>
              350+ B2B SaaS teams switched to DexKor. Here's what they said about the working session that started it.
            </p>
          </div>

          {/* Logos */}
          <div className="proof-logos">
            {logos.map((l) => (
              <span
                key={l.label}
                className={`logo ${l.mono ? "mono" : ""} ${l.italic ? "italic" : ""}`}
              >
                {l.dot ? (
                  <>
                    Lumen<b style={{ color: "var(--accent)" }}>.</b>
                  </>
                ) : (
                  l.label
                )}
              </span>
            ))}
          </div>

          {/* Proof stats */}
          <div className="proof-stats">
            {proofStats.map((s) => (
              <div key={s.label} className="proof-stat">
                <div className="num">{s.num}</div>
                <div className="lbl">
                  <b>{s.label}</b>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Featured quote */}
          <div className="featured-quote">
            <div className="fq-eyebrow">Featured Customer</div>
            <p className="fq-body">
              Renewal hike was 38% on a stack we'd already outgrown. We were locked at $47k a year before DexKor.
              Now it's{" "}
              <em>one platform, half the spend, and our first AI-resolution week hit 32%.</em> The math made itself.
            </p>
            <div className="fq-attr">
              <div className="fq-av">HC</div>
              <div className="fq-who">
                <div className="fq-name">Head of CX</div>
                <div className="fq-role">Series B Logistics SaaS · 18-agent team</div>
                <div className="fq-stars">★ ★ ★ ★ ★</div>
              </div>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.name + r.role} className="review">
                <div className={`badge ${r.badgeColor}`}>◆ {r.badge}</div>
                <div className="stars">★ ★ ★ ★ ★</div>
                <p
                  className="quote"
                  dangerouslySetInnerHTML={{
                    __html: r.quote.replace(
                      /<em>/g,
                      '<em style="font-style:italic;color:var(--accent);font-weight:500">'
                    ),
                  }}
                />
                <div className="attr">
                  <div className="av">{r.initials}</div>
                  <div className="who">
                    <div className="name">{r.name}</div>
                    <div className="role">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHILE YOU WAIT */}
      <section className="wait-section">
        <div className="wait-inner">
          <div className="wait-head">
            <div className="s-eyebrow">
              <span className="em"></span> While You Wait
            </div>
            <h2>
              Three things worth <em>15 minutes</em> before the call.
            </h2>
          </div>
          <div className="wait-grid">
            {waitCards.map((card) => (
              <a key={card.h} href="#" className="wait-card">
                <div className="icon">
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
                <h3>{card.h}</h3>
                <p>{card.p}</p>
                <span className="arrow">{card.arrow}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-inner">
          <div className="foot-brand">
            <img className="brand-logo-foot" src="/images/thankyou_img_2.png" alt="DexKor logo foot" />
            <p className="mt-2 sm:mt-0">&copy; {new Date().getFullYear()} DexKor. All rights reserved.</p>
          </div>
          <div className="foot-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* TICKER */}
      {tickerState !== "hidden" && (
        <div className={`ticker ${tickerState}`}>
          <div className="av">{tickerMessages[tickerIndex].initials}</div>
          <div className="body">
            <div
              className="msg"
              dangerouslySetInnerHTML={{
                __html: tickerMessages[tickerIndex].msg,
              }}
            />
            <div className="meta">
              <span className="live">Live</span> · {tickerMessages[tickerIndex].time}
            </div>
          </div>
          <button className="close" onClick={() => setTickerState("hidden")}>
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
