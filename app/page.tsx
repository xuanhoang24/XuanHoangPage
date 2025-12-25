"use client";

import { ArrowUpRight, ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import InteractiveBackground from "@/components/InteractiveBackground";

const projects = [{
  slug: "biabank",
  title: "BIABank",
  type: "Web",
  tech: "ASP.NET Core",
  year: "2025",
  desc: "Full-stack banking system with JWT auth, real-time notifications, and admin portal"
}, {
  slug: "endless-game",
  title: "2D Endless Game",
  type: "Game",
  tech: "C++ / SDL2",
  year: "2025",
  desc: "Platformer with physics-based collision, ECS architecture, 60 FPS gameplay"
}, {
  slug: "graphic-shader",
  title: "Graphic Shader",
  type: "Game",
  tech: "C++ / OpenGL / GLSL",
  year: "2025",
  desc: "Real-time lighting, Phong shading, texture & normal mapping"
}, {
  slug: "game-tool",
  title: "Game Tool Development",
  type: "Game",
  tech: "C# / MonoGame",
  year: "2025",
  desc: "Custom game content tool with asset pipeline and prefab system"
}];

const skills = {
  game: ["C++", "C#", "OpenGL", "SDL2", "Unity", "Unreal Engine", "MonoGame", "GLSL"],
  web: ["ASP.NET Core", "Spring Boot", "Angular", "JavaScript", "HTML/CSS", "MySQL"],
  tools: ["Git", "Visual Studio", "Docker", "Entity Framework"]
};

const education = {
  school: "Sheridan College",
  degree: "Honours Bachelor of Computer Science",
  minor: "Game Engineering",
  period: "Sep 2023 — April 2027",
  location: "Oakville, Ontario"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <InteractiveBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="container py-6 flex justify-between items-center">
          <span className="text-sm font-mono">XH.</span>
          <nav className="flex gap-8 text-sm font-mono">
            <a href="#about" className="hover-line hidden sm:block">About</a>
            <a href="#work" className="hover-line">Work</a>
            <Link href="/resume" className="hover-line">Resume</Link>
            <a href="#contact" className="hover-line">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 relative">
        <div className="container">
          <div className="max-w-5xl">
            <p className="text-muted-foreground text-sm font-mono mb-6 animate-fade-up opacity-0">
              Game Developer & Web Developer
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
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-8">
                About
              </h2>
              <p className="text-2xl md:text-3xl font-mono leading-snug mb-8">
                I create <span className="text-accent">games</span> and 
                build <span className="text-accent">web applications</span> — 
                passionate about game design and emerging technologies.
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
                  <p className="font-mono font-bold">Event Coordinator</p>
                  <p className="text-sm font-mono">Vietnamese Student Association</p>
                  <p className="text-sm font-mono text-muted-foreground">Sep 2024 — Present</p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">
                    Organizing student events with 20–40+ attendees
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
                key={project.slug}
                href={`/projects/${project.slug}`}
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
                      {project.tech}
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
            {["Game Engine Architecture", "Computer Graphics & Animation", "Gameplay Programming", "Data Structures & Algorithms"].map(course => (
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
          <div className="max-w-3xl">
            <h2 className="text-sm font-mono text-muted-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground font-mono mb-12">
              Looking for internship opportunities and collaborations.
            </p>
            
            <a href="mailto:hoanghaxuan2434@gmail.com" className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold hover-line inline-block mb-16 break-all">
              hoanghaxuan2434@gmail.com
            </a>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <h3 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                  Connect
                </h3>
                <div className="space-y-3">
                  <a href="https://github.com/xuanhoang24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover-line text-foreground font-mono w-fit">
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/xuanhoang24" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover-line text-foreground font-mono w-fit">
                    <Linkedin className="w-4 h-4 flex-shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="tel:+19056170034" className="flex items-center gap-2 hover-line text-foreground font-mono w-fit">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>(905) 617-0034</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                  Location
                </h3>
                <p className="font-mono">Oakville, Ontario</p>
                <p className="font-mono text-muted-foreground">Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono text-muted-foreground">
          <span>© 2024 Xuan Hoang Ha</span>
          <span>Game Dev × Web Dev</span>
        </div>
      </footer>
    </div>
  );
}
