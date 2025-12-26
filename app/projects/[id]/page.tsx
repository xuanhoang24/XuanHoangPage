import { ArrowLeft, Github, ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectScreenshots from "@/components/ProjectScreenshots";

const projectsData: Record<string, {
  title: string;
  type: string;
  year: string;
  tech: string[];
  available: boolean;
  liveUrl?: string;
  overview?: string;
  features?: { title: string; description: string }[];
  architecture?: string[];
  challenges?: { problem: string; solution: string }[];
  screenshots?: { label: string; placeholder: string; image?: string }[];
  metrics?: { label: string; value: string }[];
  learnings?: string[];
  futureWork?: string[];
  github?: string;
}> = {
  biabank: {
    title: "BIABank",
    type: "Web Application",
    year: "2024",
    tech: ["C#", "ASP.NET Core", "JWT", "SQLite", "HTML/CSS", "JavaScript"],
    available: true,
    liveUrl: "https://biabanking.site/",
    overview: "BIABank is a banking system simulator developed with ASP.NET Core 9.0 that exposes REST APIs for account, transaction, and KYC workflows. It uses JWT-based authentication, enforces role-based authorization at the controller level, persists data with EF Core and SQLite, publishes transaction events to connected clients via SignalR, and runs in Docker containers behind an Nginx reverse proxy.",
    screenshots: [
      { label: "Dashboard", placeholder: "Main dashboard view showing account overview and recent transactions", image: "/projects/biabank/dashboard.png" },
      { label: "Login Page", placeholder: "Secure authentication interface with JWT login", image: "/projects/biabank/login.png" },
      { label: "Admin Portal", placeholder: "Administrative dashboard for user and system management", image: "/projects/biabank/admin-portal.png" },
      { label: "Transactions", placeholder: "Transaction history and transfer interface", image: "/projects/biabank/transactions.png" }
    ],
    metrics: [
      { label: "API Endpoints", value: "50+" },
      { label: "Database Tables", value: "15" },
      { label: "Security Score", value: "85% / A" },
      { label: "Auth Methods", value: "JWT + RBAC" }
    ],
    features: [
      {
        title: "Clean Architecture",
        description: "Implemented four-layer clean architecture with clear separation: Presentation (MVC), Application (business logic), Domain (entities and rules), and Infrastructure (EF Core, SMTP, external services)."
      },
      {
        title: "JWT Authentication",
        description: "Implemented secure JSON Web Token authentication with refresh token rotation, ensuring session security and seamless user experience."
      },
      {
        title: "Admin Portal",
        description: "Created comprehensive admin dashboard for user management, transaction monitoring, and system configuration."
      },
     {
        title: "Comprehensive Transaction System",
        description: "Developed full transaction management supporting deposits, withdrawals, fund transfers, and bill payments with complete audit trails and transaction history."
      },
      {
        title: "RESTful API",
        description: "Designed and implemented RESTful API endpoints following best practices for resource naming, HTTP methods, and response codes."
      },
      {
        title: "Security Hardening",
        description: "Implemented multiple security layers including HTTPS enforcement, HSTS, security headers, CORS policies, and SQL injection prevention."
      }
    ],
    architecture: [
      "Clean Architecture with four distinct layers: Presentation, Application, Domain, and Infrastructure",
      "RESTful API backend (ASP.NET Core 9.0) with OpenAPI/Swagger documentation",
      "MVC frontend (Razor Views) consuming API via HTTP clients",
      "Entity Framework Core 9.0 with SQLite for data persistence and migrations",
      "Docker Compose orchestration with three services: API, Web, and Nginx reverse proxy",
      "JWT bearer token authentication with permission-based authorization middleware",
      "SMTP integration for email notifications and alerts"
    ],
    challenges: [
      {
        problem: "Managing authentication across separate API and MVC applications",
        solution: "Implemented JWT bearer tokens shared between services with synchronized secret keys, using HTTP-only cookies in MVC and Authorization headers in API calls"
      },
      {
        problem: "Securing financial transactions and preventing unauthorized access",
        solution: "Implemented multi-layer security: JWT authentication, role-based authorization, permission checks, HTTPS enforcement, security headers, and EF Core parameterized queries"
      },
      {
        problem: "Container orchestration and environment-specific configuration",
        solution: "Used Docker Compose with profiles (dev/prod), environment variables from .env file, and volume mounts for persistent SQLite data and SSL certificates"
      }
    ],
    learnings: [
      "Mastered clean architecture principles and dependency inversion for maintainable, testable code",
      "Gained deep understanding of JWT authentication, token lifecycle, and secure token storage strategies",
      "Improved Docker and containerization skills including multi-service orchestration and networking",
      "Enhanced security knowledge: HTTPS, HSTS, CSP, CORS, and defense against common web vulnerabilities",
      "Developed expertise in Entity Framework Core migrations, relationships, and query optimization"
    ],
    futureWork: [
      "Implement two-factor authentication (2FA) with TOTP or SMS verification",
      "Build transaction analytics dashboard with charts and financial insights",
      "Migrate from SQLite to PostgreSQL or SQL Server for production scalability",
      "Add support for multiple currencies and exchange rates",
      "Create mobile companion app using .NET MAUI or React Native",
      "Integrate with external payment gateways (Stripe, PayPal)",
    ],
    github: "https://github.com/xuanhoang24/BIABanking"
  },
  "endless-game": {
    title: "2D Endless Game",
    type: "Game",
    year: "2025",
    tech: ["C++", "SDL2", "ECS"],
    available: false,
    github: "https://github.com/xuanhoang24/GameEngine"
  },
  "graphic-shader": {
    title: "Graphic Shader",
    type: "Game / Graphics",
    year: "2025",
    tech: ["C++", "OpenGL", "GLSL"],
    available: false,
    github: "https://github.com/xuanhoang24/InitOpenGL"
  },
  "game-tool": {
    title: "Game Tool Development",
    type: "Game / Tools",
    year: "2025",
    tech: ["C#", "MonoGame", "WPF"],
    available: false,
    github: "https://github.com/xuanhoang24/Game-Tool-Editor-Monogame"
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
        <Header/>

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

        <Footer />
      </div>
    );
  }

  // Full Project Page (BIABank)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

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

            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all font-mono"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  View Live Site
                </a>
              )}
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
            {project.overview?.split(/(\bASP\.NET Core 9\.0\b|\bREST APIs\b|\bJWT\b|\brole\b|\bEF Core\b|\bSQLite\b|\bSignalR\b|\bDocker\b|\bNginx\b)/g).map((part, i) => {
              const techKeywords = ['ASP.NET Core 9.0', 'REST APIs', 'JWT', "role", 'EF Core', 'SQLite', 'SignalR', 'Docker', 'Nginx'];
              return techKeywords.includes(part) ? (
                <span key={i} className="text-accent font-bold">{part}</span>
              ) : part;
            })}
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
            <ProjectScreenshots screenshots={project.screenshots} />
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
      <Footer/>
    </div>
  );
}
