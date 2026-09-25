import { Metadata } from "next";
import CostLeadLanding from "@/components/external-pages/dexkor-reduce-message-cost-lead/CostLeadLanding";

export const metadata: Metadata = {
  title: "DexKor - Reduce Message Cost & Recover Lost WhatsApp Leads",
  description:
    "The #1 WhatsApp-First CRM for growing businesses. Capture every lead automatically, cut first-response times by 73%, and unify your customer journey.",
};

export default function Page() {
  return <CostLeadLanding />;
}
