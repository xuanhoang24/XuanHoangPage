import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    id: "biabank",
    title: "BIABank",
    type: "Web Application",
    tech: ["ASP.NET Core", "JWT", "SQLite"],
    year: "2024",
    desc: "Full-stack banking system with JWT auth, real-time notifications, and admin portal",
    details: [
      "Implemented secure JWT authentication with refresh tokens",
      "Built real-time notification system using SignalR",
      "Created admin portal for user and transaction management",
      "Designed RESTful API following best practices"
    ],
    github: "https://github.com/xuanhoang24/BIABanking",
    color: "bg-accent"
  },
  {
    id: "endless-game",
    title: "2D Endless Game",
    type: "Game",
    tech: ["C++", "SDL2", "ECS"],
    year: "2025",
    desc: "Platformer with physics-based collision, ECS architecture, 60 FPS gameplay",
    details: [
      "Built custom Entity Component System from scratch",
      "Implemented physics-based collision detection",
      "Optimized game loop for consistent 60 FPS",
      "Created procedural level generation system"
    ],
    github: "https://github.com/xuanhoang24",
    color: "bg-foreground"
  },
  {
    id: "graphic-shader",
    title: "Graphic Shader",
    type: "Game / Graphics",
    tech: ["C++", "OpenGL", "GLSL"],
    year: "2025",
    desc: "Real-time lighting, Phong shading, texture & normal mapping",
    details: [
      "Implemented Phong lighting model with multiple light sources",
      "Created normal mapping for surface detail",
      "Built texture loading and UV mapping system",
      "Developed custom shader pipeline"
    ],
    github: "https://github.com/xuanhoang24",
    color: "bg-muted"
  },
  {
    id: "game-tool",
    title: "Game Tool Development",
    type: "Game / Tools",
    tech: ["C#", "MonoGame", "WPF"],
    year: "2025",
    desc: "Custom game content tool with asset pipeline and prefab system",
    details: [
      "Built visual level editor with drag-and-drop",
      "Created asset pipeline for efficient resource loading",
      "Implemented prefab system for reusable game objects",
      "Designed serialization system for save/load"
    ],
    github: "https://github.com/xuanhoang24",
    color: "bg-secondary"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header/>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-[clamp(2rem,8vw,5rem)] font-mono font-bold leading-[0.9] tracking-tighter">
            PROJECTS<span className="text-accent">.</span>
          </h1>
          <p className="text-muted-foreground font-mono mt-4 max-w-xl">
            A collection of games and web applications I've built.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container">
          <div className="grid gap-8">
            {projects.map((project, i) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="group block border border-border hover:border-accent transition-all duration-300"
              >
                {/* Project Header */}
                <div className="p-6 sm:p-8 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-6">
                      <span className="text-muted-foreground text-sm font-mono mt-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground font-mono text-sm mt-1">
                          {project.type} — {project.year}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pl-12 sm:pl-0">
                      {project.id !== "biabank" && (
                        <span className="text-xs font-mono text-accent border border-accent px-2 py-1">
                          COMING SOON
                        </span>
                      )}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                      Overview
                    </h3>
                    <p className="font-mono text-lg leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 mt-8">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.details.map((detail, j) => (
                        <li key={j} className="font-mono text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">→</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1.5 border border-border font-mono text-sm group-hover:border-accent/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-secondary/20">
        <div className="container text-center">
          <p className="font-mono text-muted-foreground mb-4">
            Want to see more?
          </p>
          <a 
            href="https://github.com/xuanhoang24" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono font-bold text-lg hover:text-accent transition-colors hover-line"
          >
            Visit my GitHub
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
