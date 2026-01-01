export interface ProjectSummary {
  id: string;
  title: string;
  type: string;
  tech: string[];
  techDisplay: string;
  year: string;
  desc: string;
  details: string[];
  github: string;
}

export interface ProjectDetail extends ProjectSummary {
  available: boolean;
  liveUrl?: string;
  overview?: string;
  highlightKeywords?: string[];
  features?: { title: string; description: string }[];
  architecture?: string[];
  challenges?: { problem: string; solution: string }[];
  screenshots?: { label: string; placeholder: string; image?: string }[];
  metrics?: { label: string; value: string }[];
  learnings?: string[];
  futureWork?: string[];
}

export const projects: ProjectSummary[] = [
  {
    id: "biabank",
    title: "BIABank",
    type: "Web Application",
    tech: ["C#", "ASP.NET Core", "JWT", "SQLite"],
    techDisplay: "C# / ASP.NET Core",
    year: "2025",
    desc: "Full-stack banking system with JWT auth, real-time notifications, and admin portal",
    details: [
      "Implemented secure JWT authentication with refresh tokens",
      "Built real-time notification system using SignalR",
      "Created admin portal for user and transaction management",
      "Designed RESTful API following best practices",
    ],
    github: "https://github.com/xuanhoang24/BIABanking",
  },
  {
    id: "endless-game",
    title: "2D Endless Game",
    type: "Game",
    tech: ["C++", "SDL2", "GLM", "ECS"],
    techDisplay: "C++ / SDL2 / ECS",
    year: "2025",
    desc: "A 2D game engine built with C++ and SDL2, using an ECS architecture. Features hardware-accelerated rendering, physics-based gameplay, and procedural level generation.",
    details: [
      "Built custom Entity Component System with singleton managers",
      "SDL2 hardware-accelerated rendering with sprite sheets",
      "Procedural chunk-based level generation with TMX maps",
      "Physics system with gravity, collision, and coyote time",
    ],
    github: "https://github.com/xuanhoang24/GameEngine",
  },
  {
    id: "graphic-shader",
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
      "Developed custom shader pipeline",
    ],
    github: "https://github.com/xuanhoang24/InitOpenGL",
  },
  {
    id: "game-tool",
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
      "Designed serialization system for save/load",
    ],
    github: "https://github.com/xuanhoang24/Game-Tool-Editor-Monogame",
  },
];

export const projectDetails: Record<string, ProjectDetail> = {
  biabank: {
    ...projects[0],
    available: true,
    liveUrl: "https://biabanking.site/",
    overview:
      "BIABank is a banking system simulator developed with ASP.NET Core 9.0 that exposes REST APIs for account, transaction, and KYC workflows. It uses JWT-based authentication, enforces role-based authorization at the controller level, persists data with EF Core and SQLite, publishes transaction events to connected clients via SignalR, and runs in Docker containers behind an Nginx reverse proxy.",
    highlightKeywords: ['ASP.NET Core 9.0', 'REST APIs', 'JWT', 'role', 'EF Core', 'SQLite', 'SignalR', 'Docker', 'Nginx'],
    screenshots: [
      { label: "Dashboard", placeholder: "Main dashboard view showing account overview and recent transactions", image: "/projects/biabank/dashboard.png" },
      { label: "Login Page", placeholder: "Secure authentication interface with JWT login", image: "/projects/biabank/login.png" },
      { label: "Admin Portal", placeholder: "Administrative dashboard for user and system management", image: "/projects/biabank/admin-portal.png" },
      { label: "Transactions", placeholder: "Transaction history and transfer interface", image: "/projects/biabank/transactions.png" },
    ],
    metrics: [
      { label: "API Endpoints", value: "50+" },
      { label: "Database Tables", value: "15" },
      { label: "Auth Methods", value: "JWT + RBAC" },
      { label: "Security", value: "PBKDF2" },
    ],
    features: [
      { title: "Clean Architecture", description: "Implemented four-layer clean architecture with clear separation: Presentation (MVC), Application (business logic), Domain (entities and rules), and Infrastructure (EF Core, SMTP, external services)." },
      { title: "JWT Authentication", description: "Implemented secure JSON Web Token authentication with refresh token rotation, ensuring session security and seamless user experience." },
      { title: "Admin Portal", description: "Created comprehensive admin dashboard for user management, transaction monitoring, and system configuration." },
      { title: "Comprehensive Transaction System", description: "Developed full transaction management supporting deposits, withdrawals, fund transfers, and bill payments with complete audit trails and transaction history." },
      { title: "RESTful API", description: "Designed and implemented RESTful API endpoints following best practices for resource naming, HTTP methods, and response codes." },
      { title: "Security Hardening", description: "Implemented multiple security layers including HTTPS enforcement, HSTS, security headers, CORS policies, and SQL injection prevention." },
    ],
    architecture: [
      "Clean Architecture with four distinct layers: Presentation, Application, Domain, and Infrastructure",
      "RESTful API backend (ASP.NET Core 9.0) with OpenAPI/Swagger documentation",
      "MVC frontend (Razor Views) consuming API via HTTP clients",
      "Entity Framework Core 9.0 with SQLite for data persistence and migrations",
      "Docker Compose orchestration with three services: API, Web, and Nginx reverse proxy",
      "JWT bearer token authentication with permission-based authorization middleware",
      "SMTP integration for email notifications and alerts",
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
      },
    ],
    learnings: [
      "Mastered clean architecture principles and dependency inversion for maintainable, testable code",
      "Gained deep understanding of JWT authentication, token lifecycle, and secure token storage strategies",
      "Improved Docker and containerization skills including multi-service orchestration and networking",
      "Enhanced security knowledge: HTTPS, HSTS, CSP, CORS, and defense against common web vulnerabilities",
      "Developed expertise in Entity Framework Core migrations, relationships, and query optimization",
    ],
    futureWork: [
      "Implement two-factor authentication (2FA) with TOTP or SMS verification",
      "Build transaction analytics dashboard with charts and financial insights",
      "Migrate from SQLite to PostgreSQL or SQL Server for production scalability",
      "Add support for multiple currencies and exchange rates",
      "Create mobile companion app using .NET MAUI or React Native",
      "Integrate with external payment gateways (Stripe, PayPal)",
    ],
  },
  "endless-game": {
    ...projects[1],
    available: true,
    overview:
      "A 2D game engine built with C++ and SDL2, using an Entity Component System (ECS) architecture. This project is intended as a technical demo and learning exercise, featuring hardware-accelerated rendering, physics-based gameplay, procedural level generation, and comprehensive audio/input systems.",
    highlightKeywords: ['C++', 'SDL2', 'ECS', 'technical demo', 'hardware-accelerated rendering', 'physics-based gameplay', 'procedural level generation', 'audio/input systems'],
    screenshots: [
      { label: "Gameplay", placeholder: "Main gameplay showing the endless runner with parallax backgrounds", image: "/projects/endless-game/Gameplay.png" },
      { label: "Spatial Grid", placeholder: "Spatial partitioning grid for efficient collision detection", image: "/projects/endless-game/SpatialGrid.png" },
      { label: "Start Menu", placeholder: "Game start menu with options", image: "/projects/endless-game/StartScreen.png" },
      { label: "Game Over", placeholder: "Game over screen with score display", image: "/projects/endless-game/GameOver.png" },
    ],
    metrics: [
      { label: "Architecture", value: "ECS"},
      { label: "Memory", value: "Pooled" },
      { label: "Allocator", value: "Stack"},
      { label: "Level System", value: "Chunk-based" }
    ],
    features: [
      { title: "Entity Component System", description: "Built a custom ECS architecture with singleton-based managers (Renderer, Audio, Input, Assets), delta-time based game loop, object pooling for entities and resources, and binary serialization for save data." },
      { title: "Graphics Engine", description: "SDL2 hardware-accelerated rendering with TGA/PNG texture loading, sprite sheets with configurable clip sizes, parallax scrolling backgrounds, camera with entity following, and logical resolution scaling for resolution-independent rendering." },
      { title: "Procedural Map System", description: "Tiled (.tmx) map loading via tmxlite with infinite scrolling using procedural chunk system. Supports chunk types: start, random, gap, and floating platforms with tile collision detection and object layers for spawn points." },
      { title: "Physics & Gameplay", description: "Gravity with ground detection, adjustable jump height (hold to jump higher), coyote time grace period, dash ability with cooldown, punch attack with range detection, patrol AI for enemies, health system with invincibility frames, and collectibles." },
      { title: "Audio System", description: "16-channel sound effect mixing with background music support (play/pause/stop) and channel completion callbacks for dynamic audio feedback." },
      { title: "Input Handling", description: "Comprehensive input system supporting keyboard key down/up detection, mouse position and button states, game controller support, and text input handling." },
    ],
    architecture: [
      "Core: GameController, Timing, Singleton pattern for global managers",
      "Game: Entity, Components, Systems, ChunkMap, GameUI",
      "Graphics: Renderer, Camera, TileMap, AnimatedSpriteLoader, Texture",
      "Audio: AudioController, Song, SoundEffect with 16-channel mixing",
      "Input: InputController, Keyboard, Mouse, Controller support",
      "Resources: AssetController, Resource management, Serializable save data",
      "Utils: ObjectPool for memory efficiency, StackAllocator",
    ],
    challenges: [
      { problem: "Creating infinite procedural levels without loading screens", 
        solution: "Designed chunk-based map system that procedurally generates and loads map chunks ahead of the player, with different chunk types for variety." 
      },
      { 
        problem: "Handling collision detection with many entities", 
        solution: "Built a SpatialGrid that divides the world into cells and tracks which cells each entity occupies. Only entities in the same or adjacent cells are checked using AABB overlap tests, reducing collision checks from O(n²) to O(n)." 
      },
      { 
        problem: "Loading sprites without memory allocation overhead", 
        solution: "Used object pools for Texture, SpriteAnim, and Asset classes to reuse existing objects instead of allocating new ones. Combined with ImageInfo caching and GUID-based asset lookup to avoid unnecessary file access and processing." 
      }
    ],
    learnings: [
      "Understanding of ECS architecture and its benefits for game development",
      "Gained experience in procedural content generation and level system on a chunk basis",
      "Improved C++ skills including memory management, object pooling, and binary serialization",
      "Understanding of spatial partitioning techniques for efficient collision detection and entity queries",
      "Gained experience with texture loading and sprite rendering"
    ],
    futureWork: [
      "Add more enemy types with different AI behaviors",
      "Implement power-ups and special abilities",
      "Create a level editor for custom chunk design",
      "Add online leaderboards for score tracking",
      "Implement difficulty scaling based on player performance",
      "Add boss fights with unique attack patterns",
    ],
  },
  "graphic-shader": {
    ...projects[2],
    available: false,
  },
  "game-tool": {
    ...projects[3],
    available: false,
  },
};
