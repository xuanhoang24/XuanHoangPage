"use client";

import { ReactNode } from "react";
import { Zap } from "lucide-react";
import HoverBox from "./HoverBox";

interface MetricBoxProps {
  value: string;
  label: string;
}

export function MetricBox({ value, label }: MetricBoxProps) {
  return (
    <HoverBox className="p-6 text-center">
      <p className="text-3xl md:text-4xl font-mono font-bold text-accent">
        {value}
      </p>
      <p className="text-muted-foreground font-mono text-sm mt-2">
        {label}
      </p>
    </HoverBox>
  );
}

interface FeatureBoxProps {
  index: number;
  title: string;
  description: string;
}

export function FeatureBox({ index, title, description }: FeatureBoxProps) {
  return (
    <HoverBox className="p-6 bg-background">
      <span className="text-accent font-mono text-sm">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-mono font-bold text-lg mt-2 mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-mono text-sm leading-relaxed">
        {description}
      </p>
    </HoverBox>
  );
}

interface ChallengeBoxProps {
  problem: string;
  solution: string;
}

export function ChallengeBox({ problem, solution }: ChallengeBoxProps) {
  return (
    <HoverBox className="grid md:grid-cols-2 gap-6 p-6 bg-background">
      <div>
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Challenge
        </span>
        <p className="font-mono mt-2">{problem}</p>
      </div>
      <div>
        <span className="text-xs font-mono text-accent uppercase tracking-wider">
          Solution
        </span>
        <p className="font-mono mt-2">{solution}</p>
      </div>
    </HoverBox>
  );
}

interface LearningBoxProps {
  text: string;
}

export function LearningBox({ text }: LearningBoxProps) {
  return (
    <HoverBox className="p-4 flex items-start gap-3">
      <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
      <p className="font-mono text-sm">{text}</p>
    </HoverBox>
  );
}

interface FutureWorkBoxProps {
  index: number;
  text: string;
}

export function FutureWorkBox({ index, text }: FutureWorkBoxProps) {
  return (
    <HoverBox className="p-4" dashed>
      <span className="text-xs font-mono text-muted-foreground">
        TODO {String(index + 1).padStart(2, "0")}
      </span>
      <p className="font-mono text-sm mt-1">{text}</p>
    </HoverBox>
  );
}

interface TechTagProps {
  tech: string;
}

export function TechTag({ tech }: TechTagProps) {
  return (
    <span
      className="px-3 py-1.5 font-mono text-sm cursor-default transition-colors duration-300"
      style={{ border: '1px solid hsl(0, 0%, 15%)' }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
    >
      {tech}
    </span>
  );
}
