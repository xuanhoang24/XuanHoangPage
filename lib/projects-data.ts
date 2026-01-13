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
  demoUrl?: string;
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
    id: "2d-platformer",
    title: "2D Platformer",
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
    id: "opengl-graphics",
    title: "OpenGL Graphics",
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
    github: "https://github.com/xuanhoang24/OpenGL-Graphics-Engine",
  },
  {
    id: "game-tool",
    title: "Game Tool Development",
    type: "Game / Tools",
    tech: ["C#", "MonoGame", "Windows Forms", "Lua"],
    techDisplay: "C# / MonoGame / Lua",
    year: "2025",
    desc: "Visual 3D game editor with Lua scripting, asset pipeline, and terrain editing",
    details: [
      "Built 3D scene editor with drag-and-drop model placement",
      "Integrated Lua scripting system with MoonSharp for game logic",
      "Created MonoGame Content Builder asset pipeline",
      "Implemented terrain system with height-map generation",
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
      { label: "Home Page", placeholder: "Main Home Page", image: "/projects/biabank/HomePage.png" },
      { label: "Customer Dashboard", placeholder: "Main dashboard view showing account overview and recent transactions", image: "/projects/biabank/dashboard.png" },
      { label: "Transactions", placeholder: "Transaction history and transfer interface", image: "/projects/biabank/transactions.png" },
      { label: "Admin Portal", placeholder: "Administrative dashboard for user and system management", image: "/projects/biabank/admin-portal.png" },
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
  "2d-platformer": {
    ...projects[1],
    available: true,
    demoUrl: "https://youtu.be/Go6RMoumZYc",
    overview:
      "A 2D game engine built with C++ and SDL2, using an Entity Component System (ECS) architecture. This project is intended as a technical demo and learning exercise, featuring hardware-accelerated rendering, physics-based gameplay, procedural level generation, and comprehensive audio/input systems.",
    highlightKeywords: ['C++', 'SDL2', 'ECS', 'technical demo', 'hardware-accelerated rendering', 'physics-based gameplay', 'procedural level generation', 'audio/input systems'],
    screenshots: [
      { label: "Gameplay", placeholder: "Main gameplay showing the endless runner with parallax backgrounds", image: "/projects/2d-platformer/Gameplay.png" },
      { label: "Spatial Grid", placeholder: "Spatial partitioning grid for efficient collision detection", image: "/projects/2d-platformer/SpatialGridx.png" },
      { label: "Start Menu", placeholder: "Game start menu with options", image: "/projects/2d-platformer/StartMenuScreen.png" },
      { label: "Game Over", placeholder: "Game over screen with score display", image: "/projects/2d-platformer/GameOverScreen.png" },
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
  "opengl-graphics": {
  ...projects[2],
  available: true,
  demoUrl: "https://youtu.be/tTfbTBFM8Pk",
  overview: "An OpenGL based C++ graphics engine, implements Phong lighting, texture mapping and interactive scene. Supports multi-shader rendering pipeline, cubemap skybox, post-processing effects in framebuffer, and light positioning and object transformation tool system.",
  highlightKeywords: ['OpenGL', 'C++', 'Phong lighting', 'multi-shader', 'framebuffer', 'graphicshader'],
  screenshots: [
    { label: "Move Light Tool", placeholder: "Interactive light positioning scene with 3D model and lighting controls", image: "/projects/opengl-graphics/move-light-scene.png" },
    { label: "Transform Tool", placeholder: "Object transformation scene with translate, rotate, and scale controls", image: "/projects/opengl-graphics/transform-scene.png" },
    { label: "Water Scene", placeholder: "Underwater environment with wave distortion post-processing effects", image: "/projects/opengl-graphics/water-scene.png" },
    { label: "Space Scene", placeholder: "First-person exploration with skybox environment and 3D models", image: "/projects/opengl-graphics/space-scene.png" },
  ],
  metrics: [
    { label: "GPU Programming", value: "OpenGL" },
    { label: "Lighting Model", value: "Phong" },
    { label: "Buffer Objects", value: "VAO/VBO" },
    { label: "Post-Processing", value: "Framebuffer" },
  ],
features: [
  { title: "Phong Lighting", description: "Phong shading per-pixel with ambient, diffuse, and specular values computed in fragment shaders. Light position, color and material specular strength can be configured and adjusted with interactive controls." },
  { title: "Hardware-Accelerated Rendering", description: "OpenGL pipeline with Vertex Array Objects (VAOs) and Vertex Buffer Objects (VBOs) to manage efficiently the graphics memory of the GPUs. Optimised draw calls with state management and resource cleanup." },
  { title: "Texture Mapping Pipeline", description: "Multi-channel texture support with diffuse and specular map sampling, proper texture unit allocation, and image loading integration for material rendering." },
  { title: "Post-Processing Effects", description: "Framebuffer rendering with wave distortion effects and color tinting through fragment shader calculations." },
  { title: "GLSL Shader Programming", description: "Custom vertex and fragment shader compilation and linking with uniform variable management for dynamic parameter updates and mathematical lighting calculations." },
  { title: "3D Model Loading", description: "OBJ file format support with vertex data parsing such as positions, normals and texture coordinate. Combines with material loading to make full mesh render pipeline." },
],
  architecture: [
    "OpenGL Pipeline: Hardware-accelerated rendering with Vertex Array Objects (VAOs) and Vertex Buffer Objects (VBOs) for efficient GPU memory management",
    "State Management: OpenGL context handling with proper render state transitions and GPU resource optimization",
    "Shader Programming: GLSL vertex and fragment shader compilation with uniform variable binding and texture sampler management",
    "Texture System: Texture binding with diffuse and specular map support, proper filtering, and image loading integration",
    "Rendering Pipeline: Integrated system with color rendering, Phong lighting calculations, skybox environment, and framebuffer post-processing",
  ],
  challenges: [
    { problem: "Optimizing rendering performance with multiple models and textures", solution: "Organized VAO creation and binding to minimize state changes, implemented proper texture unit management, and optimized draw calls to maintain smooth frame rates across different scenes." },
    { problem: "Managing complex scene rendering with multiple tool modes", solution: "Designed modular scene rendering system supporting different tool modes (Move Light, Transform, Water Scene, Space Scene) with proper state management and resource sharing between modes." },
    { problem: "Implementing framebuffer post-processing pipeline", solution: "Created framebuffer objects with color and depth attachments, implemented vertex buffer for screen quad rendering, and integrated wave distortion effects with configurable frequency and amplitude parameters." },
  ],
  learnings: [
    "Learned OpenGL graphics pipeline including vertex array objects, buffer management, and shader programming with GLSL compilation and linking",
    "Gained expertise in Phong lighting model implementation with per-pixel ambient, diffuse, and specular component calculations in fragment shaders",
    "Developed knowledge of texture mapping techniques including multi-channel sampling, proper texture unit binding, and UV coordinate processing",
    "Learned framebuffer operations for post-processing effects including framebuffer object setup and quad rendering for visual effects",
    "Acquired knowledge of 3D mathematics including matrix transformations, vector operations, and lighting equation implementations for realistic rendering",
    "Gained experience with graphics optimization techniques including VAO/VBO state management, draw call efficiency, and GPU memory resource utilization",
  ],
  futureWork: [
    "Add shadow mapping with depth buffer techniques for realistic shadow casting from dynamic light sources",
    "Implement deferred rendering for efficient multi-light scenarios with G-buffer optimization",
    "Add HDR rendering with tone mapping operators and bloom effects for realistic lighting ranges",
  ],
},
  "game-tool": {
    ...projects[3],
    available: true,
    demoUrl: "https://github.com/xuanhoang24/Game-Tool-Editor-Monogame",
    overview: "A game tool development built with C#, MonoGame, and Windows Forms, featuring visual level editing, Lua scripting, and a complete asset pipeline. Designed as a technical demonstration of game tools development with modular architecture supporting 3D model, terrain editing, and real-time content creation.",
    highlightKeywords: ['MonoGame', 'C#', 'Windows Forms', 'Lua scripting', 'visual level editing', 'asset pipeline', '3D model manipulation', 'terrain editing', 'real-time content creation'],
    screenshots: [
      { label: "Main Editor Interface", placeholder: "Main editor window showing 3D viewport, asset browser, and property panels", image: "/projects/game-tool/MainEditor.png" },
      { label: "Asset Pipeline", placeholder: "MGCB Editor showing content pipeline with various asset types", image: "/projects/game-tool/Aseset.png" },
      { label: "3D Scene Editing", placeholder: "3D scene with models, terrain, and lighting controls", image: "/projects/game-tool/3DSceneEditing.png" },
      { label: "Script Editor", placeholder: "Lua script editor with syntax highlighting", image: "/projects/game-tool/ScriptEditor.png" },
    ],
    metrics: [
      { label: "Framework", value: "MonoGame" },
      { label: "Scripting", value: "Lua (MoonSharp)" },
      { label: "Content Pipeline", value: "MGCB" },
      { label: "Editor UI", value: "Windows Forms" }
    ],
    features: [
      { title: "Visual 3D Editor", description: "3D scene editing with drag-and-drop model placement. Includes transform tools for moving, rotating, and scaling objects with visual selection feedback." },
      { title: "Asset Pipeline", description: "MonoGame Content Builder integration supporting multiple asset types: 3D models (.fbx), textures (.jpg, .png), shaders (.fx), audio (.wav), and fonts (.spritefont)." },
      { title: "Lua Scripting", description: "Integrated Lua scripting system for custom game logic. Scripts can hook into update and render cycles with script reloading and access to game objects." },
      { title: "Terrain System", description: "Height-map terrain generation with texture mapping and collision detection. Supports visual terrain editing with updates and customizable materials." },
      { title: "Prefab System", description: "Create reusable object templates that can be saved and instantiated. Maintains object properties and relationships for hierarchies." },
      { title: "Scene Management", description: "Organize scenes with tree-view hierarchy and grouping. Edit object properties using integrated property panels." },
    ],
    architecture: [
      "Editor Layer: Windows Forms UI with integrated MonoGame viewport, property grids, and asset browsers",
      "Engine Layer: Core game systems including Camera, Renderer, Level management, and Input handling",
      "Scripting Layer: MoonSharp Lua integration with C# object binding and runtime script execution",
      "Asset Pipeline: MonoGame Content Builder for processing and compiling game assets",
      "Serialization System: Binary serialization for projects, levels, and game objects",
    ],
    challenges: [
      { problem: "Managing hierarchical grouping and selection in scene tree", solution: "Implemented nested group system with recursive selection handling, allowing objects to be organized in groups while maintaining individual and batch selection capabilities in both tree view and 3D viewport." },
      { problem: "Coordinating selection between hierarchy panel and 3D scene", solution: "Created bidirectional selection system that synchronizes tree view highlighting with 3D object selection, supporting multi-object selection and group-based operations across both interfaces." },
      { problem: "Managing complex model selection and property editing", solution: "Created unified selection system with ray-casting for 3D picking, bounding sphere intersection tests, and integrated property grid that dynamically updates based on selected objects." },
    ],
    learnings: [
      "Gained expertise in MonoGame framework architecture and integration with Windows Forms applications",
      "Learned content pipeline development and asset management strategies for game tools development",
      "Learned how to integrate Lua scripting with C# using MoonSharp for runtime script execution and object binding",
      "Acquired knowledge of 3D mathematics for camera controls, object transformations, and ray-casting for object selection",
      "Implemented serialization systems for saving and loading project data",
      "Gained experience in tool development patterns including property grids, tree views, and drag-and-drop interfaces",
    ],
    futureWork: [
      "Add visual shader editor for creating custom materials",
      "Build animation timeline for keyframe-based animations",
      "Integrate physics simulation with collision editing",
      "Add performance profiling tools for analyzing scene complexity and rendering costs",
    ],
  }
};
