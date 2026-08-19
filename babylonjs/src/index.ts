import {
    createEngine,
    createSceneContext,
    createArcRotateCamera,
    attachControl,
    createHemisphericLight,
    createSphere,
    createPbrMaterial,
    addToScene,
    registerScene,
    startEngine,
} from "@babylonjs/lite";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

// 1. Engine
const engine = await createEngine(canvas);

// 2. Scene
const scene = createSceneContext(engine);

// Camera (plain data) — set it on the scene, then attach input handling
const camera = createArcRotateCamera(-Math.PI / 2, Math.PI / 2.5, 4, { x: 0, y: 0, z: 0 });
scene.camera = camera;
attachControl(camera, canvas, scene);

// Light
addToScene(scene, createHemisphericLight([0, 1, 0], 1.0));

// A sphere with a simple PBR material
const sphere = createSphere(engine, { segments: 16, diameter: 2 });
sphere.material = createPbrMaterial({ baseColorFactor: [0.9, 0.1, 0.1, 1], metallicFactor: 0.1, roughnessFactor: 0.4 });
addToScene(scene, sphere);

// 3. Register (after everything is added)
await registerScene(scene);

// 4. Start the render loop
await startEngine(engine);

console.log("Hello, BabylonJS!");