"use client";

import dynamic from "next/dynamic";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { technologies } from "@/data/tech";

const BallCanvas = dynamic(() => import("@/components/three/BallCanvas"), {
  ssr: false,
});

export function Tech() {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
