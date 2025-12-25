import { ArrowLeft, Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="container py-6 flex justify-between items-center">
          <Link href="/" className="text-sm font-mono hover:text-accent transition-colors">
            XH.
          </Link>
          <nav className="flex gap-8 text-sm font-mono">
            <Link href="/#about" className="hover-line hidden sm:block">About</Link>
            <Link href="/projects" className="hover-line">Work</Link>
            <Link href="/resume" className="hover-line text-accent">Resume</Link>
            <Link href="/#contact" className="hover-line">Contact</Link>
          </nav>
        </div>
      </header>

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
                RESUME<span className="text-accent">.</span>
              </h1>
              <p className="text-muted-foreground font-mono mt-4">
                Game Developer & Web Developer
              </p>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all font-mono">
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 border-b border-border bg-secondary/20">
        <div className="container">
          <div className="flex flex-wrap gap-6 md:gap-12 justify-center text-sm font-mono">
            <a href="mailto:hoanghaxuan2434@gmail.com" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              hoanghaxuan2434@gmail.com
            </a>
            <a href="tel:+19056170034" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              (905) 617-0034
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Oakville, Ontario
            </span>
            <a href="https://github.com/xuanhoang24" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/xuanhoang24" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
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
                <div className="border-l-2 border-accent pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-mono font-bold text-lg">Sheridan College</h3>
                      <p className="font-mono">Honours Bachelor of Computer Science</p>
                      <p className="font-mono text-accent text-sm">Minor: Game Engineering</p>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                      Sep 2023 — Apr 2027
                    </p>
                  </div>
                  <p className="text-sm font-mono text-muted-foreground mt-2">
                    Oakville, Ontario
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
                <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="font-mono font-bold text-lg">Event Coordinator</h3>
                      <p className="font-mono text-muted-foreground">Vietnamese Student Association</p>
                    </div>
                    <p className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                      Sep 2024 — Present
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Organizing and managing student events with 20–40+ attendees
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Coordinating with team members for event planning and execution
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Managing budgets and resources for community activities
                    </li>
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
                <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 className="font-mono font-bold text-lg">BIABank</h3>
                    <p className="text-sm font-mono text-muted-foreground">2024</p>
                  </div>
                  <p className="font-mono text-sm text-accent mt-1">ASP.NET Core / SignalR / JWT / SQL Server</p>
                  <ul className="mt-3 space-y-2">
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Full-stack banking system with JWT authentication
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Real-time notifications using SignalR
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Admin portal for user and transaction management
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 className="font-mono font-bold text-lg">2D Endless Game</h3>
                    <p className="text-sm font-mono text-muted-foreground">2025</p>
                  </div>
                  <p className="font-mono text-sm text-accent mt-1">C++ / SDL2</p>
                  <ul className="mt-3 space-y-2">
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Platformer with physics-based collision detection
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Entity Component System architecture
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Optimized for consistent 60 FPS gameplay
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 className="font-mono font-bold text-lg">Graphic Shader</h3>
                    <p className="text-sm font-mono text-muted-foreground">2025</p>
                  </div>
                  <p className="font-mono text-sm text-accent mt-1">C++ / OpenGL / GLSL</p>
                  <ul className="mt-3 space-y-2">
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Real-time lighting with Phong shading
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Texture and normal mapping implementation
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-border pl-6 hover:border-accent transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <h3 className="font-mono font-bold text-lg">Game Tool Development</h3>
                    <p className="text-sm font-mono text-muted-foreground">2025</p>
                  </div>
                  <p className="font-mono text-sm text-accent mt-1">C# / MonoGame</p>
                  <ul className="mt-3 space-y-2">
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Custom game content tool with asset pipeline
                    </li>
                    <li className="font-mono text-sm flex items-start gap-2">
                      <span className="text-accent">→</span>
                      Prefab system for reusable game objects
                    </li>
                  </ul>
                </div>
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
                    {["C++", "C#", "OpenGL", "SDL2", "Unity", "Unreal Engine", "MonoGame", "GLSL"].map((skill) => (
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
                    {["ASP.NET Core", "Spring Boot", "Angular", "JavaScript", "HTML/CSS", "MySQL"].map((skill) => (
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
                    {["Git", "Visual Studio", "Docker", "Entity Framework"].map((skill) => (
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
                {[
                  "Game Engine Architecture",
                  "Computer Graphics & Animation",
                  "Gameplay Programming",
                  "Data Structures & Algorithms"
                ].map((course) => (
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
                <li className="font-mono text-sm flex items-center justify-between">
                  <span>English</span>
                  <span className="text-muted-foreground">Fluent</span>
                </li>
                <li className="font-mono text-sm flex items-center justify-between">
                  <span>Vietnamese</span>
                  <span className="text-muted-foreground">Native</span>
                </li>
              </ul>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Game Design", "Graphics Programming", "AI in Games", "Open Source"].map((interest) => (
                  <span key={interest} className="px-2 py-1 border border-dashed border-border font-mono text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

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
