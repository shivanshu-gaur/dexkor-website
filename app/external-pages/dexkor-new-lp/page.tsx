"use client";

import React from "react";
import "./lp1-globals.css";

import UrgencyStrip from "@/components/external-pages/landingpage-1/UrgencyStrip";
import Navbar from "@/components/external-pages/landingpage-1/Navbar";
import Footer from "@/components/external-pages/landingpage-1/Footer";
import Ticker from "@/components/external-pages/landingpage-1/Ticker";
import OptinForm from "@/components/external-pages/landingpage-1/OptinForm";
import BookCover from "@/components/external-pages/landingpage-1/BookCover";

const benefits = [
  {
    bold: "9 self-contained plays.",
    rest: " Pick the 3 that move your number this quarter.",
  },
  {
    bold: "The 7-question test",
    rest: " to run before signing your next renewal.",
  },
  {
    bold: "The 14-day migration playbook",
    rest: " that defuses \"switching is too hard\".",
  },
  {
    bold: "A one-page ROI template",
    rest: " your CFO will actually open.",
  },
];

const plays = [
  {
    num: "01",
    title: "Audit your true cost per ticket",
    body: "The one-line formula most CX leaders skip. It changes every renewal conversation.",
  },
  {
    num: "02",
    title: "Map the three eras of support",
    body: "Why agent-first beats ticket-first beats channel-first. And which era your stack is stuck in.",
  },
  {
    num: "03",
    title: "The modern CX operating model",
    body: "The 4-layer stack that lets a 12-agent team run a 30-agent volume without burning out.",
  },
  {
    num: "04",
    title: "Demand AI that actually resolves",
    body: "Resolutive vs cosmetic AI. The 4 questions to ask any vendor before you sign anything.",
  },
  {
    num: "05",
    title: "Unify the inbox or lose the customer",
    body: "Why 4-to-7-tool stacks are quietly killing your CSAT. And the 30-day fix.",
  },
  {
    num: "06",
    title: "Defuse the migration myth",
    body: "The 14-day cutover plan. Concierge included. No professional-services SOW needed.",
  },
  {
    num: "07",
    title: "Build your ROI case in one page",
    body: "The exact template the smart CX leaders are sending their CFOs. Fill in the blanks. Done.",
  },
  {
    num: "08",
    title: "Reframe support as a profit center",
    body: "How to move from cost-line conversation to revenue-line conversation in one quarter.",
  },
  {
    num: "09",
    title: "The 7-question renewal test",
    body: "Run this on your incumbent before you renew. If they fail 3 of 7, you're overpaying.",
  },
];

const stats = [
  { num: "2,847", label: "B2B SaaS leaders have downloaded the playbook" },
  { num: "22 min", label: "Average time to read end to end" },
  { num: "14d", label: "Migration plan inside, ready to run" },
  { num: "9", label: "Self-contained plays, no fluff between" },
];

export default function OptinPage() {
  return (
    <div className="-mt-16 overflow-hidden bg-white text-[#1F2937] font-sans antialiased">
      <UrgencyStrip />
      <Navbar variant="optin" />

      {/* ============== HERO ============== */}
      <section
        className="relative"
        style={{
          padding: "64px 32px 90px",
          background:
            "radial-gradient(70% 50% at 100% 0%, rgba(44,138,229,.10), transparent 70%), radial-gradient(60% 50% at 0% 100%, rgba(38,75,133,.06), transparent 70%), #FFFFFF",
        }}
      >
        <div
          className="absolute right-[30px] top-1/4 w-[180px] h-[180px] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #2C8AE5 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div className="max-w-[1240px] mx-auto grid gap-[72px] items-start lg:grid-cols-[1.05fr_.95fr] grid-cols-1">
          {/* LEFT: COPY + FORM */}
          <div>
            <div
              className="inline-flex items-center gap-2.5 font-mono font-semibold text-[#2C8AE5] mb-5"
              style={{
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                background: "rgba(44,138,229,.08)",
                borderRadius: 100,
                padding: "7px 14px",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#2C8AE5] animate-blink" />
              Free Field Guide · 15 Pages
            </div>

            <h1
              className="font-serif text-[#0F1B3D] mb-5"
              style={{
                fontWeight: 500,
                fontSize: "clamp(38px, 5vw, 60px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
              }}
            >
              Cut your Zendesk bill{" "}
              <em className="italic text-[#2C8AE5] font-medium">40%</em> without
              losing a single SLA.
            </h1>

            <p
              className="font-serif italic font-light text-[#264B85] mb-7"
              style={{
                fontSize: "clamp(17px, 1.5vw, 20px)",
                lineHeight: 1.5,
                maxWidth: "46ch",
              }}
            >
              The 15-page field guide B2B SaaS support leaders are using to retire
              Zendesk-era tools and rebuild their stack for the AI era.
            </p>

            <ul className="list-none p-0 mb-8 flex flex-col gap-3">
              {benefits.map((b) => (
                <li
                  key={b.bold}
                  className="flex gap-3 items-start text-[14.5px] text-[#264B85] leading-snug"
                >
                  <span className="w-5 h-5 rounded-full bg-[#2C8AE5]/10 text-[#2C8AE5] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-px">
                    ✓
                  </span>
                  <span>
                    <b className="text-[#0F1B3D] font-bold">{b.bold}</b>
                    {b.rest}
                  </span>
                </li>
              ))}
            </ul>

            <OptinForm />
          </div>

          {/* RIGHT: BOOK COVER */}
          <BookCover />
        </div>
      </section>

      {/* ============== WHAT'S INSIDE ============== */}
      <section
        className="bg-[#F1F6FC]"
        style={{ padding: "96px 32px" }}
      >
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 justify-center font-mono font-semibold text-[#2C8AE5] mb-4 text-[11px] tracking-[.16em] uppercase">
              <span className="w-[18px] h-[1.5px] bg-[#2C8AE5]" />
              What's Inside
            </div>
            <h2
              className="font-serif text-[#0F1B3D] mx-auto text-center"
              style={{
                fontWeight: 500,
                fontSize: "clamp(32px, 4vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-.02em",
                maxWidth: "22ch",
              }}
            >
              9 plays. One modern{" "}
              <em className="italic text-[#2C8AE5] font-medium">operating stack.</em>
            </h2>
            <p
              className="font-serif italic font-light text-[#264B85] mx-auto mt-4"
              style={{
                fontSize: "clamp(17px, 1.5vw, 20px)",
                lineHeight: 1.5,
                maxWidth: "60ch",
              }}
            >
              No fluff. No vendor pitch. 15 pages of plays you can run this
              quarter, not next year.
            </p>
          </div>

          <div className="grid gap-[18px] max-w-[1100px] mx-auto lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {plays.map((p) => (
              <div
                key={p.num}
                className="bg-white border border-[rgba(15,27,61,.12)] rounded-xl flex flex-col gap-3 transition hover:-translate-y-[3px] hover:border-[#2C8AE5]/30"
                style={{
                  padding: "24px 22px",
                  boxShadow: "none",
                }}
              >
                <div
                  className="font-mono font-bold text-[#2C8AE5]"
                  style={{ fontSize: 11, letterSpacing: ".16em" }}
                >
                  ◆ Play {p.num}
                </div>
                <h4
                  className="font-serif font-medium text-[#0F1B3D]"
                  style={{ fontSize: 18, lineHeight: 1.25 }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-[#264B85]"
                  style={{ fontSize: 13.5, lineHeight: 1.5 }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== STATS BAND ============== */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0F1B3D", padding: "80px 32px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 80% at 50% 100%, rgba(44,138,229,.18), transparent 60%)",
          }}
        />
        <div className="max-w-[1240px] mx-auto relative z-10 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center px-4"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid rgba(255,255,255,.1)"
                    : "none",
              }}
            >
              <div
                className="font-serif text-[#5BA8EC] mb-3"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(36px, 4.5vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-.02em",
                }}
              >
                {s.num}
              </div>
              <div
                className="text-[13px] font-medium leading-snug"
                style={{ color: "rgba(255,255,255,.7)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============== QUOTE SECTION ============== */}
      <section className="bg-white text-center" style={{ padding: "96px 32px" }}>
        <div className="max-w-[880px] mx-auto">
          <div
            className="font-serif text-[#2C8AE5] inline-block"
            style={{ fontSize: 80, lineHeight: 1, marginBottom: -12 }}
          >
            &ldquo;
          </div>
          <p
            className="font-serif text-[#0F1B3D] mb-7"
            style={{
              fontWeight: 400,
              fontSize: "clamp(22px, 2.6vw, 32px)",
              lineHeight: 1.35,
              letterSpacing: "-.01em",
            }}
          >
            The leaders who treat the renewal as a negotiation will save 10
            percent. The leaders who treat it as an architecture decision will
            save{" "}
            <em className="italic text-[#2C8AE5] font-medium">
              half their cost stack
            </em>{" "}
            and double their output.
          </p>
          <div
            className="font-mono text-white font-semibold"
            style={{
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            From the introduction ·{" "}
            <b className="!text-white font-bold">The Scaling CX Playbook</b>
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section
        className="text-center relative overflow-hidden"
        style={{ background: "#0F1B3D", padding: "96px 32px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(44,138,229,.22), transparent 60%)",
          }}
        />
        <div className="max-w-[720px] mx-auto relative z-10">
          <div
            className="inline-flex items-center gap-2.5 font-mono font-semibold mb-4 justify-center"
            style={{
              color: "#5BA8EC",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
            }}
          >
            <span className="w-[18px] h-[1.5px]" style={{ background: "#5BA8EC" }} />
            Get Your Copy
          </div>
          <h2
            className="font-serif text-white"
            style={{
              fontWeight: 500,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.08,
              letterSpacing: "-.02em",
              margin: "18px 0 18px",
            }}
          >
            Ready to grab{" "}
            <em
              className="italic font-medium"
              style={{ color: "#5BA8EC" }}
            >
              your copy?
            </em>
          </h2>
          <p
            className="font-serif italic mb-7"
            style={{
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(255,255,255,.78)",
            }}
          >
            15 pages. 22-minute read. Instant download. No SDR cadence on the
            other side.
          </p>

          <a
            href="#optinFormCard"
            className="final-cta-shine inline-flex items-center gap-3 relative overflow-hidden text-white font-sans font-bold uppercase border-0 rounded-[10px] no-underline isolate transition-transform duration-150 cursor-pointer hover:-translate-y-0.5"
            style={{
              padding: "18px 36px",
              fontSize: 13,
              letterSpacing: ".2em",
              background:
                "linear-gradient(135deg, #2C8AE5 0%, #1F6FBF 100%)",
              boxShadow:
                "0 4px 0 #1F6FBF, 0 14px 30px -10px rgba(44,138,229,.55), 0 0 0 1px rgba(255,255,255,.15) inset, 0 1px 0 rgba(255,255,255,.4) inset",
            }}
          >
            Scroll Up &amp; Unlock The Playbook{" "}
            <span style={{ fontSize: 18 }}>&uarr;</span>
          </a>

          <div
            className="mt-6 inline-flex items-center gap-2.5 text-[12.5px] font-medium"
            style={{ color: "rgba(255,255,255,.7)" }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#10b981] live-dot"
            />
            <span>
              <b className="text-white font-bold">142 CX leaders</b> reading this
              right now
            </span>
          </div>
        </div>
      </section>

      <Footer />

      <Ticker
        messages={[
          {
            initials: "CX",
            msg: "<b>Head of CX, Series B SaaS</b> just downloaded the playbook",
            time: "2 min ago",
          },
        ]}
      />
    </div>
  );
}
