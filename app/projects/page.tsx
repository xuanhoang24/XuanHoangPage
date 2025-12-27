import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects, projectDetails } from "@/lib/projects-data";
import { personalInfo } from "@/lib/data";

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
            {projects.map((project, i) => {
              const detail = projectDetails[project.id];
              return (
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
                        {!detail?.available && (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border bg-secondary/20">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="font-mono text-muted-foreground mb-4">
              Want to see more?
            </p>
            <a 
              href={personalInfo.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono font-bold text-lg hover:text-accent transition-colors hover-line"
            >
              Visit my GitHub
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
