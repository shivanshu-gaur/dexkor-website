"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isExternalPage = 
    pathname?.startsWith("/dexkor-") || 
    pathname?.startsWith("/external-pages");

  return (
    <div className={cn(!isExternalPage && "pt-16")}>
      {children}
    </div>
  );
}
