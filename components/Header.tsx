import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="container py-6 flex justify-between items-center">
        <Link href="/" className="text-sm font-mono hover:text-accent transition-colors">
          Xuan Hoang
        </Link>
        <nav className="flex gap-8 text-sm font-mono">
          <Link href="/#about" className="hover-line hidden sm:block">About</Link>
          <Link href="/projects" className="hover-line">Project</Link>
          <Link href="/resume" className="hover-line">Resume</Link>
          <Link href="/#contact" className="hover-line">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
