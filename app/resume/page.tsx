"use client";

import { ArrowLeft, Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects-data";
import { personalInfo, education, experience, skills, coursework, languages, interests } from "@/lib/data";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header/>

      {/* Hero */}
      <section className="pt-32 pb-12 border-b border-border">
        <div className="container">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-[clamp(2rem,8vw,5rem)] font-mono font-bold leading-[0.9] tracking-tighter">
                {personalInfo.name}<span className="text-accent">.</span>
              </h1>
              <p className="text-muted-foreground font-mono mt-4">
                {personalInfo.title}
              </p>
            </div>

            <a 
              href="/resume.pdf" 
              download="Xuan_Hoang_Ha_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all font-mono"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 border-b border-border bg-secondary/20">
        <div className="container">
          <div className="flex flex-wrap gap-6 md:gap-12 justify-center text-sm font-mono">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </a>
            <span className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Education */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8 pb-2 border-b border-border">
                Education
              </h2>
              <div className="space-y-6">
                <div 
                  className="border-l-2 pl-6 transition-colors duration-300"
                  style={{ borderColor: 'hsl(0, 0%, 15%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-mono font-bold text-lg">{education.school}</h3>
                      <p className="font-mono">{education.degree}</p>
                      <p className="font-mono text-accent text-sm">Minor: {education.minor}</p>
                      <p className="font-mono text-accent text-sm">GPA: {education.gpa}</p>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                      {education.period}
                    </p>
                  </div>
                  <p className="text-sm font-mono text-muted-foreground mt-2">
                    {education.location}
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8 pb-2 border-b border-border">
                Experience
              </h2>
              <div className="space-y-8">
                <div 
                  className="border-l-2 pl-6 transition-colors duration-300"
                  style={{ borderColor: 'hsl(0, 0%, 15%)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-mono font-bold text-lg">{experience.title}</h3>
                      <p className="font-mono text-muted-foreground">{experience.company}</p>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                      {experience.period}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {experience.details.map((detail, i) => (
                      <li key={i} className="font-mono text-sm flex items-start gap-2">
                        <span className="text-accent">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8 pb-2 border-b border-border">
                Projects
              </h2>
              <div className="space-y-8">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    className="border-l-2 pl-6 transition-colors duration-300"
                    style={{ borderColor: 'hsl(0, 0%, 15%)' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(45, 100%, 50%)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'hsl(0, 0%, 15%)'}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="font-mono font-bold text-lg">{project.title}</h3>
                      <p className="text-sm font-mono text-muted-foreground">{project.year}</p>
                    </div>
                    <p className="font-mono text-sm text-accent mt-1">{project.techDisplay}</p>
                    <ul className="mt-3 space-y-2">
                      {project.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="font-mono text-sm flex items-start gap-2">
                          <span className="text-accent">→</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border">
                Technical Skills
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                    Game Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.game.map((skill) => (
                      <span key={skill} className="px-2 py-1 border border-border font-mono text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                    Web Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.web.map((skill) => (
                      <span key={skill} className="px-2 py-1 border border-border font-mono text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span key={skill} className="px-2 py-1 border border-border font-mono text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Coursework */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border">
                Relevant Coursework
              </h2>
              <ul className="space-y-2">
                {coursework.map((course) => (
                  <li key={course} className="font-mono text-sm flex items-start gap-2">
                    <span className="text-accent">→</span>
                    {course}
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border">
                Languages
              </h2>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="font-mono text-sm flex items-center justify-between">
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="px-2 py-1 border border-dashed border-border font-mono text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
