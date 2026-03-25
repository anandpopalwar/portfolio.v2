"use client";

import { useGSAP as useGSAPReact } from "@gsap/react";
import gsap from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAPReact);
}

export const useSafeGSAP = useGSAPReact;
