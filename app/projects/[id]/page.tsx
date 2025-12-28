import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectScreenshots from "@/components/ProjectScreenshots";
import { MetricBox, FeatureBox, ChallengeBox, LearningBox, FutureWorkBox, TechTag } from "@/components/ProjectDetailClient";
import { projectDetails } from "@/lib/projects-data";

export function generateStaticParams() {
  return Object.keys(projectDetails).map((id) => ({ id }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectDetails[id];

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
                <TechTag key={tech} tech={tech} />
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

  // Full Project Page
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
              <TechTag key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      {project.overview && (
        <section className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-8">
              Overview
            </h2>
            <p className="text-xl md:text-2xl font-mono leading-relaxed max-w-4xl">
              {project.overview.split(/(\bASP\.NET Core 9\.0\b|\bREST APIs\b|\bJWT\b|\brole\b|\bEF Core\b|\bSQLite\b|\bSignalR\b|\bDocker\b|\bNginx\b)/g).map((part, i) => {
                const techKeywords = ['ASP.NET Core 9.0', 'REST APIs', 'JWT', "role", 'EF Core', 'SQLite', 'SignalR', 'Docker', 'Nginx'];
                return techKeywords.includes(part) ? (
                  <span key={i} className="text-accent font-bold">{part}</span>
                ) : part;
              })}
            </p>
          </div>
        </section>
      )}

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
                <MetricBox key={i} value={metric.value} label={metric.label} />
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
                <FeatureBox key={i} index={i} title={feature.title} description={feature.description} />
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
                <ChallengeBox key={i} problem={item.problem} solution={item.solution} />
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
                <LearningBox key={i} text={learning} />
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
                <FutureWorkBox key={i} index={i} text={item} />
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

      <Footer/>
    </div>
  );
}
