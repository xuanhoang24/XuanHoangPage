"use client";

import { ReactNode } from "react";

interface HoverBoxProps {
  children: ReactNode;
  className?: string;
  dashed?: boolean;
}

export default function HoverBox({ children, className = "", dashed = false }: HoverBoxProps) {
  return (
    <div
      className={`transition-colors duration-300 ${className}`}
      style={{ border: `1px ${dashed ? 'dashed' : 'solid'} hsl(0, 0%, 15%)` }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
    >
      {children}
    </div>
  );
}
