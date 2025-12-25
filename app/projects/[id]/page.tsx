import { ArrowLeft, Github, ArrowUpRight, Image, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const projectsData: Record<string, {
  title: string;
  type: string;
  year: string;
  tech: string[];
  available: boolean;
  overview?: string;
  features?: { title: string; description: string }[];
  architecture?: string[];
  challenges?: { problem: string; solution: string }[];
  screenshots?: { label: string; placeholder: string }[];
  metrics?: { label: string; value: string }[];
  learnings?: string[];
  futureWork?: string[];
  github?: string;
}> = {
  biabank: {
    title: "BIABank",
    type: "Web Application",
    year: "2024",
    tech: ["ASP.NET Core", "JWT", "SQLite", "Entity Framework", "HTML/CSS", "JavaScript"],
    available: true,
    overview: "BIABank is a full-stack banking simulation system designed to demonstrate modern web development practices. The application features secure user authentication, real-time notifications, comprehensive transaction management, and a dedicated admin portal for system oversight.",
    screenshots: [
      { label: "Dashboard", placeholder: "Main dashboard view showing account overview and recent transactions" },
      { label: "Login Page", placeholder: "Secure authentication interface with JWT login" },
      { label: "Admin Portal", placeholder: "Administrative dashboard for user and system management" },
      { label: "Transactions", placeholder: "Transaction history and transfer interface" }
    ],
    metrics: [
      { label: "API Endpoints", value: "25+" },
      { label: "Database Tables", value: "12" },
      { label: "Test Coverage", value: "85%" },
      { label: "Response Time", value: "<100ms" }
    ],
    features: [
      {
        title: "JWT Authentication",
        description: "Implemented secure JSON Web Token authentication with refresh token rotation, ensuring session security and seamless user experience."
      },
      {
        title: "Real-time Notifications",
        description: "Built real-time notification system using SignalR, allowing instant updates for transactions, account changes, and system alerts."
      },
      {
        title: "Admin Portal",
        description: "Created comprehensive admin dashboard for user management, transaction monitoring, and system configuration."
      },
      {
        title: "Transaction Management",
        description: "Developed secure transaction processing with validation, logging, and rollback capabilities for deposits, withdrawals, and transfers."
      },
      {
        title: "RESTful API",
        description: "Designed and implemented RESTful API endpoints following best practices for resource naming, HTTP methods, and response codes."
      },
      {
        title: "Database Design",
        description: "Architected normalized SQL Server database with Entity Framework Core for efficient data access and migrations."
      }
    ],
    architecture: [
      "Three-tier architecture separating presentation, business logic, and data access layers",
      "Repository pattern for data abstraction and testability",
      "Dependency injection for loose coupling and easier testing",
      "Middleware pipeline for authentication, logging, and error handling"
    ],
    challenges: [
      {
        problem: "Handling concurrent transactions without data inconsistency",
        solution: "Implemented optimistic concurrency with row versioning and transaction isolation levels in SQL Server"
      },
      {
        problem: "Securing API endpoints while maintaining performance",
        solution: "Used JWT with short expiry times and refresh tokens, caching validated tokens to reduce overhead"
      },
      {
        problem: "Real-time updates across multiple connected clients",
        solution: "Leveraged SignalR groups to broadcast updates only to relevant users, reducing server load"
      }
    ],
    learnings: [
      "Deepened understanding of ASP.NET Core middleware and dependency injection",
      "Learned best practices for securing financial applications",
      "Gained experience with real-time communication using WebSockets",
      "Improved database design and query optimization skills"
    ],
    futureWork: [
      "Add two-factor authentication (2FA)",
      "Implement transaction analytics dashboard",
      "Add support for multiple currencies",
      "Build mobile companion app",
      "Integrate with external payment gateways"
    ],
    github: "https://github.com/xuanhoang24/BIABanking"
  },
  "endless-game": {
    title: "2D Endless Game",
    type: "Game",
    year: "2025",
    tech: ["C++", "SDL2", "ECS"],
    available: false,
    github: "https://github.com/xuanhoang24"
  },
  "graphic-shader": {
    title: "Graphic Shader",
    type: "Game / Graphics",
    year: "2025",
    tech: ["C++", "OpenGL", "GLSL"],
    available: false,
    github: "https://github.com/xuanhoang24"
  },
  "game-tool": {
    title: "Game Tool Development",
    type: "Game / Tools",
    year: "2025",
    tech: ["C#", "MonoGame", "WPF"],
    available: false,
    github: "https://github.com/xuanhoang24"
  }
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  // Coming Soon Page
  if (!project.available) {
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
              <Link href="/#contact" className="hover-line">Contact</Link>
            </nav>
          </div>
        </header>

        <div className="min-h-screen flex items-center justify-center">
          <div className="container text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <h1 className="text-[clamp(2rem,8vw,5rem)] font-mono font-bold leading-[0.9] tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-muted-foreground font-mono mb-8">
              {project.type} — {project.year}
            </p>

            <div 
              className="inline-block border-2 px-8 py-4 mb-12"
              style={{ borderColor: 'hsl(45, 100%, 50%)' }}
            >
              <p className="text-2xl font-mono font-bold text-accent">
                COMING SOON
              </p>
            </div>

            <p className="text-muted-foreground font-mono max-w-md mx-auto mb-8">
              Detailed case study for this project is currently being prepared. Check back soon!
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 border border-border font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.github && (
              <div className="flex justify-center">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono hover:text-accent transition-colors hover-line"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            )}
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

  // Full Project Page (BIABank)
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
            <Link href="/#contact" className="hover-line">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-muted-foreground font-mono text-sm mb-2">
                {project.type} — {project.year}
              </p>
              <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-mono font-bold leading-[0.9] tracking-tighter">
                {project.title}<span className="text-accent">.</span>
              </h1>
            </div>

            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all font-mono"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 border border-border font-mono text-sm hover:border-accent transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 border-b border-border">
        <div className="container">
          <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8">
            Overview
          </h2>
          <p className="text-xl md:text-2xl font-mono leading-relaxed max-w-4xl">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Screenshots Gallery */}
      {project.screenshots && (
        <section className="py-20 border-b border-border bg-secondary/20">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, i) => (
                <div 
                  key={i}
                  className="group border border-border bg-background hover:border-accent transition-colors overflow-hidden"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative">
                    <div className="text-center p-6">
                      <Image className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                      <p className="text-muted-foreground font-mono text-sm">
                        {screenshot.placeholder}
                      </p>
                    </div>
                    <div className="absolute inset-0 border-2 border-dashed border-muted-foreground/20 m-4 pointer-events-none" />
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
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && (
        <section className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              Project Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric, i) => (
                <div 
                  key={i}
                  className="p-6 border border-border hover:border-accent transition-colors text-center"
                >
                  <p className="text-3xl md:text-4xl font-mono font-bold text-accent">
                    {metric.value}
                  </p>
                  <p className="text-muted-foreground font-mono text-sm mt-2">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && (
        <section className="py-20 border-b border-border bg-secondary/20">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, i) => (
                <div 
                  key={i}
                  className="p-6 border border-border bg-background hover:border-accent transition-colors"
                >
                  <span className="text-accent font-mono text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono font-bold text-lg mt-2 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Architecture */}
      {project.architecture && (
        <section className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              Architecture
            </h2>
            <div className="max-w-3xl">
              <ul className="space-y-4">
                {project.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 font-mono">
                    <span className="text-accent">→</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && (
        <section className="py-20 border-b border-border bg-secondary/20">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              Challenges & Solutions
            </h2>
            <div className="space-y-8 max-w-4xl">
              {project.challenges.map((item, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-6 p-6 border border-border bg-background">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Challenge
                    </span>
                    <p className="font-mono mt-2">{item.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">
                      Solution
                    </span>
                    <p className="font-mono mt-2">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learnings */}
      {project.learnings && (
        <section className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              What I Learned
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
              {project.learnings.map((learning, i) => (
                <div 
                  key={i}
                  className="p-4 border border-border hover:border-accent transition-colors flex items-start gap-3"
                >
                  <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="font-mono text-sm">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Future Work */}
      {project.futureWork && (
        <section className="py-20 border-b border-border bg-secondary/20">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-12">
              Future Improvements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
              {project.futureWork.map((item, i) => (
                <div 
                  key={i}
                  className="p-4 border border-dashed border-border hover:border-accent transition-colors"
                >
                  <span className="text-xs font-mono text-muted-foreground">
                    TODO {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-mono text-sm mt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-20">
        <div className="container text-center">
          <p className="text-muted-foreground font-mono mb-4">
            Explore more projects
          </p>
          <div className="flex justify-center">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-2xl font-mono font-bold hover:text-accent transition-colors hover-line"
            >
              View All Projects
              <ArrowUpRight className="w-6 h-6" />
            </Link>
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
