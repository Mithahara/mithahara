# Mithahara App

Mithahara is a Svelte-based single-page application showcasing various interactive widgets and features. 

## New “Healthyverse” Feature

The Healthyverse is an immersive space-themed experience integrated into the navigation:

- In the navigation bar, click on the **Healthyverse** tab.
- The page will smoothly transition with a blur and fade effect.
- A Three.js scene appears, featuring a starfield, a glowing sun at the center, and a revolving idli-like mesh orbiting the sun.
- The scene is responsive and cleans up resources when navigating away.

### How It Works

1. **Transition Effect**  
   Uses Svelte state and CSS transitions to blur and fade the existing content before loading the scene.

2. **Three.js Scene**  
   Implemented as a Svelte action (`threeSpaceScene`) that initializes:
   - A starfield using `THREE.Points`.
   - A sun mesh with `SphereGeometry`.
   - An idli-shaped mesh (stretched sphere) orbiting via an object pivot.
   - Responsive resizing and resource cleanup on destroy.

3. **Integration**  
   The `Healthyverse` route (`src/routes/Healthyverse.svelte`) mounts the Three.js action and updates a Svelte store (`activeScene`) for state management.

## Development

- `npm install` to install dependencies  
- `npm run dev` to serve locally  
- `npm run build` to generate production build in the `docs` folder  
- `npm run preview` to preview the build

## License

MIT