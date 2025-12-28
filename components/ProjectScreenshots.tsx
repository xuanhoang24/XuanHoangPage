"use client";

import { X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Screenshot {
  label: string;
  placeholder: string;
  image?: string;
}

interface ProjectScreenshotsProps {
  screenshots: Screenshot[];
}

export default function ProjectScreenshots({ screenshots }: ProjectScreenshotsProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {screenshots.map((screenshot, i) => (
          <div 
            key={i}
            className="group bg-background overflow-hidden cursor-pointer transition-colors duration-300"
            style={{ border: '2px solid hsl(0, 0%, 15%)' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
            onClick={() => screenshot.image && setLightboxImage(screenshot.image)}
          >
            <div 
              className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden"
            >
              {screenshot.image ? (
                <Image 
                  src={screenshot.image}
                  alt={screenshot.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <>
                  <div className="text-center p-6">
                    <ImageIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-muted-foreground font-mono text-sm">
                      {screenshot.placeholder}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-dashed border-muted-foreground/20 m-4 pointer-events-none" />
                </>
              )}
            </div>
            <div className="p-4 border-t border-border">
              <span className="text-xs font-mono text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono font-bold mt-1">{screenshot.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-accent transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={lightboxImage}
              alt="Screenshot"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
