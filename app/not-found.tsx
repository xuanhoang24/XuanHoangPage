import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-mono">404</h1>
        <p className="mb-4 text-xl text-muted-foreground font-mono">Oops! Page not found</p>
        <Link href="/" className="text-accent underline hover:text-accent/90 font-mono">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
