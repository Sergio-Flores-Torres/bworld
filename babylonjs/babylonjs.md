babylonjs/
├── node_modules/          # Installed npm packages
├── public/                # Static assets served exactly as-is
│   ├── index.html         # Main HTML file containing the <canvas>
│   ├── favicon.ico
│   ├── models/            # 3D files (.glb, .gltf)
│   └── textures/          # Image files (.jpg, .png)
├── src/                   # Source TypeScript files
│   ├── index.ts           # Application entry point
│   ├── scene.ts           # Babylon.js scene creation logic
│   └── components/        # Game objects, inputs, or UI controllers
├── package.json           # Scripts and dependencies
├── tsconfig.json          # TypeScript compiler configuration
└── vite.config.ts         # Optional bundler config (highly recommended)
