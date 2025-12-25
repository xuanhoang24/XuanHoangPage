export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  tech: string[];
  techDisplay: string;
  year: string;
  desc: string;
  details: string[];
  github: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "biabank",
    slug: "biabank",
    title: "BIABank",
    type: "Web Application",
    tech: ["ASP.NET Core", "JWT", "SQLite"],
    techDisplay: "ASP.NET Core",
    year: "2024",
    desc: "Full-stack banking system with JWT auth, real-time notifications, and admin portal",
    details: [
      "Implemented secure JWT authentication with refresh tokens",
      "Built real-time notification system using SignalR",
      "Created admin portal for user and transaction management",
      "Designed RESTful API following best practices"
    ],
    github: "https://github.com/xuanhoang24/BIABanking",
    color: "bg-accent"
  },
  {
    id: "endless-game",
    slug: "endless-game",
    title: "2D Endless Game",
    type: "Game",
    tech: ["C++", "SDL2", "ECS"],
    techDisplay: "C++ / SDL2",
    year: "2025",
    desc: "Platformer with physics-based collision, ECS architecture, 60 FPS gameplay",
    details: [
      "Built custom Entity Component System from scratch",
      "Implemented physics-based collision detection",
      "Optimized game loop for consistent 60 FPS",
      "Created procedural level generation system"
    ],
    github: "https://github.com/xuanhoang24",
    color: "bg-foreground"
  },
  {
    id: "graphic-shader",
    slug: "graphic-shader",
    title: "Graphic Shader",
    type: "Game / Graphics",
    tech: ["C++", "OpenGL", "GLSL"],
    techDisplay: "C++ / OpenGL / GLSL",
    year: "2025",
    desc: "Real-time lighting, Phong shading, texture & normal mapping",
    details: [
      "Implemented Phong lighting model with multiple light sources",
      "Created normal mapping for surface detail",
      "Built texture loading and UV mapping system",
      "Developed custom shader pipeline"
    ],
    github: "https://github.com/xuanhoang24/InitOpenGL",
    color: "bg-muted"
  },
  {
    id: "game-tool",
    slug: "game-tool",
    title: "Game Tool Development",
    type: "Game / Tools",
    tech: ["C#", "MonoGame", "WPF"],
    techDisplay: "C# / MonoGame",
    year: "2025",
    desc: "Custom game content tool with asset pipeline and prefab system",
    details: [
      "Built visual level editor with drag-and-drop",
      "Created asset pipeline for efficient resource loading",
      "Implemented prefab system for reusable game objects",
      "Designed serialization system for save/load"
    ],
    github: "https://github.com/xuanhoang24/Game-Tool-Editor-Monogame",
    color: "bg-secondary"
  }
];
