"use client";

import { useEffect } from "react";
import { ArrowUpRight, ArrowDown, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import InteractiveBackground from "@/components/InteractiveBackground";
import MatrixRain from "@/components/MatrixRain";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projects-data";
import { personalInfo, education, experience, skills, coursework } from "@/lib/data";

export default function Home() {
  const { triggered, reset } = useKonamiCode();

  useEffect(() => {
    console.log('%cHint: Try the classic code: up up down down...', 'color: #666; font-size: 12px;');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <InteractiveBackground />
      {triggered && <MatrixRain onComplete={reset} />}
      
      <Header/>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 relative">
        <div className="container">
          <div className="max-w-5xl">
            <p className="text-muted-foreground text-sm font-mono mb-6 animate-fade-up opacity-0">
              {personalInfo.title}
            </p>
            
            <h1 className="text-[clamp(2.5rem,10vw,8rem)] font-mono font-bold leading-[0.9] tracking-tighter mb-8 animate-fade-up opacity-0 delay-100">
              XUAN
              <br />
              <span className="text-stroke transition-all duration-300 cursor-default">
                HOANG
              </span>
              <br />
              HA<span className="text-accent">.</span>
            </h1>

            <p className="text-muted-foreground text-lg font-mono max-w-xl mb-12 animate-fade-up opacity-0 delay-200">
              Building immersive games with C++ and crafting robust web applications.
              CS student at Sheridan College, specializing in Game Engineering.
            </p>

            <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-mono text-muted-foreground animate-fade-up opacity-0 delay-300">
              <span>C++</span>
              <span>C#</span>
              <span>OpenGL</span>
              <span>Unreal Engine</span>
              <span>Unity</span>
              <span>ASP.NET</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center pointer-events-none">
          <a href="#about" className="pointer-events-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-up opacity-0 delay-400">
            <span className="text-xs font-mono">SCROLL</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-50">
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-8">
                About
              </h2>
              <p className="text-2xl md:text-3xl font-mono leading-snug mb-8">
                I'm passionate about <span className="text-accent">creating games</span> and  
                <span className="text-accent"> web development</span>, 
                with a strong interest in game design and emerging technologies.
              </p>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Currently pursuing a Bachelor of Computer Science with a minor in Game Engineering 
                at Sheridan College. I love discussing game design, exploring new technologies 
                in the games industry, and building things that matter.
              </p>
            </div>

            <div className="space-y-12">
              {/* Education */}
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-6">
                  Education
                </h3>
                <div 
                  className="border-l-2 pl-4 transition-colors duration-300"
                  style={{ borderColor: 'hsl(0, 0%, 15%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
                >
                  <p className="font-mono font-bold">{education.school}</p>
                  <p className="font-mono text-sm">{education.degree}</p>
                  <p className="font-mono text-sm text-accent">Minor: {education.minor}</p>
                  <p className="text-sm font-mono text-muted-foreground mt-2">{education.period}</p>
                  <p className="text-sm font-mono text-muted-foreground">{education.location}</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-6">
                  Experience
                </h3>
                <div 
                  className="border-l-2 pl-4 transition-colors duration-300"
                  style={{ borderColor: 'hsl(0, 0%, 15%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
                >
                  <p className="font-mono font-bold">{experience.title}</p>
                  <p className="text-sm font-mono">{experience.company}</p>
                  <p className="text-sm font-mono text-muted-foreground">{experience.period}</p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 border-t border-border bg-secondary/20">
        <div className="container">
          <h2 className="text-sm font-mono text-muted-foreground mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xs font-mono text-accent mb-6 uppercase tracking-wider font-thin">
                Game Development
              </h3>
              <ul className="space-y-3">
                {skills.game.map(skill => (
                  <li key={skill} className="font-mono text-lg hover:text-accent transition-colors cursor-default font-thin">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-accent mb-6 uppercase tracking-wider font-thin">
                Web Development
              </h3>
              <ul className="space-y-3">
                {skills.web.map(skill => (
                  <li key={skill} className="font-mono text-lg hover:text-accent transition-colors cursor-default font-thin">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-accent mb-6 uppercase tracking-wider font-thin">
                Tools
              </h3>
              <ul className="space-y-3">
                {skills.tools.map(skill => (
                  <li key={skill} className="font-mono text-lg hover:text-accent transition-colors cursor-default font-thin">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Marquee */}
      <div className="py-6 border-y border-border overflow-hidden bg-accent text-accent-foreground">
        <div className="flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-sm font-mono mx-8">
                AVAILABLE FOR OPPORTUNITIES • GAME DEV • WEB DEV •   
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-sm font-mono mx-8">
                AVAILABLE FOR OPPORTUNITIES • GAME DEV • WEB DEV •   
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Work */}
      <section id="work" className="py-32 border-t border-border">
        <div className="container">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-sm font-mono text-muted-foreground">
              Projects
            </h2>
            <span className="text-sm font-mono text-muted-foreground">
              {projects.length} projects
            </span>
          </div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block py-8 border-b border-border hover:bg-secondary/30 transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div className="flex items-center gap-4 sm:gap-8 mb-2 sm:mb-0">
                    <span className="text-muted-foreground text-sm font-mono w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-8 pl-12 sm:pl-0">
                    <span className="text-muted-foreground text-xs sm:text-sm font-mono">
                      {project.type}
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm font-mono hidden sm:block">
                      {project.techDisplay}
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm font-mono">
                      {project.year}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm font-mono pl-12 sm:pl-16 mt-2">
                  {project.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors hover-line">
              <span>View all projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Coursework */}
      <section className="py-32 border-t border-border">
        <div className="container">
          <h2 className="text-sm font-mono text-muted-foreground mb-16">
            Relevant Coursework
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coursework.map(course => (
              <div 
                key={course} 
                className="p-6 border hover:bg-secondary/20 transition-all duration-300"
                style={{
                  borderColor: 'hsl(0, 0%, 15%)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
              >
                <p className="font-mono text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 border-t border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground font-mono mb-8">
                Looking for internship opportunities and collaborations.
              </p>
              
              <a href={`mailto:${personalInfo.email}`} className="text-xl sm:text-2xl md:text-3xl font-mono font-bold hover-line inline-block mb-12 break-all">
                {personalInfo.email}
              </a>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <h3 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                    Connect
                  </h3>
                  <div className="space-y-3">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover-line text-foreground font-mono w-fit">
                      <Github className="w-4 h-4 flex-shrink-0" />
                      <span>GitHub</span>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover-line text-foreground font-mono w-fit">
                      <Linkedin className="w-4 h-4 flex-shrink-0" />
                      <span>LinkedIn</span>
                    </a>
                    <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover-line text-foreground font-mono w-fit">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{personalInfo.phone}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                    Location
                  </h3>
                  <p className="font-mono">{personalInfo.location}</p>
                  <p className="font-mono text-muted-foreground">{personalInfo.country}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-muted-foreground mb-6 uppercase tracking-wider">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
