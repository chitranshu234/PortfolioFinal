"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "cream" | "sand" | "warm";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme = "cream",
  className,
  rotate,
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    cream: "bg-[rgba(200,194,180,0.08)]",
    sand: "bg-[rgba(160,152,136,0.08)]",
    warm: "bg-[rgba(200,194,180,0.12)]",
  };
  const defaultTextColors = {
    cream: "text-[#c8c2b4]",
    sand: "text-[#a09888]",
    warm: "text-[#d4cfc5]",
  };
  const defaultBorderColors = {
    cream: "border-[rgba(200,194,180,0.15)]",
    sand: "border-[rgba(160,152,136,0.15)]",
    warm: "border-[rgba(200,194,180,0.2)]",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme];
  const textColor = customColors?.text || defaultTextColors[colorTheme];
  const borderColor = customColors?.border || defaultBorderColors[colorTheme];

  return (
    <div
      className={`relative w-full md:w-[280px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-[#1e1e1b] p-2 rounded-[25px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.4)] border border-[rgba(200,194,180,0.08)]">
        <Pin className={`w-8 h-8 ${textColor} z-20 mb-6 mx-auto`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[15px] p-[15px] h-full flex flex-col relative overflow-hidden`}
        >
          <span
            className={`${textColor} text-4xl font-display mb-5 tracking-wider`}
          >
            {number}
          </span>
          <h3 className="text-2xl font-semibold text-[#c8c2b4] leading-none mb-[10px] tracking-wide">
            {title}
          </h3>
          <p className="text-[#a09888]/60 text-sm/5 tracking-tight font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "cream" | "sand" | "warm";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[120px] md:right-[15%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-8" },
];

export default function HowItWorks({
  features,
  className,
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "High School",
      description: "Scored 92.3% — New Beersheba Sr. Sec. School",
      colorTheme: "cream",
    },
    {
      title: "Class XII",
      description: "Scored 90.2% in board examinations",
      colorTheme: "sand",
    },
    {
      title: "B.Tech ECE",
      description: "G.B. Pant University of Agriculture & Technology, Pantnagar · CGPA 7.6",
      colorTheme: "warm",
    },
    {
      title: "SIH 2025",
      description: "National Finalist, Rank 6 among 500+ teams as Technical Head",
      colorTheme: "cream",
    },
    {
      title: "Full Stack + AI",
      description: "Klassway, Opebo, Sensei, RetryX — building production systems",
      colorTheme: "sand",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1130;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else height = 1130;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-[#1a1a17] max-md:pt-10 max-md:pb-25 md:py-20 px-8 relative ${className}`}
      >
        {/* Subtle horizontal lines background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#c8c2b4 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        ></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#1a1a17]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#1a1a17]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0)
                      return "M 290 150 C 500 150, 550 270, 710 270";
                    if (index === 1)
                      return acc + " C 850 270, 500 350, 290 450";
                    if (index === 2)
                      return acc + " C 290 600, 550 720, 750 720";
                    if (index === 3)
                      return acc + " C 950 720, 500 800, 290 850";
                    return acc;
                  }, "");
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-[rgba(200,194,180,0.15)]"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || "cream"}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
