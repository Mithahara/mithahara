# Copilot Instructions for Mithahara

This guide enables AI coding agents to be productive in the Mithahara codebase. Focus on the following project-specific conventions, workflows, and architectural patterns:

## Architecture Overview
- **Svelte SPA**: The app is a Svelte single-page application. Main entry: `src/main.js`, root component: `src/App.svelte`.
- **Routing**: Page components are in `src/routes/`. Navigation is handled via Svelte's built-in routing.
- **State Management**: Shared state uses Svelte stores in `src/stores/` (e.g., `scene.js`, `theme.js`).
- **Actions**: Custom Svelte actions for Three.js scenes are in `src/actions/` (notably `threeScene.js`, `threeSpaceScene.js`).
- **Healthyverse Feature**: The immersive space scene is in `Healthyverse.svelte` and uses Three.js via a Svelte action. State is managed with the `activeScene` store.

## Developer Workflows
- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build` (outputs to `docs/` for GitHub Pages hosting)
- **Preview build**: `npm run preview`
- **Static assets**: Production JS/CSS is in `docs/assets/` after build.

## Project-Specific Patterns
- **Transitions**: Page transitions (blur/fade) are implemented with Svelte state and CSS, especially for the Healthyverse feature.
- **Three.js Integration**: Use Svelte actions for mounting/unmounting Three.js scenes. Always clean up resources on destroy.
- **Responsive Design**: Three.js scenes listen for resize events and update accordingly.
- **Stateful Navigation**: Navigation updates Svelte stores to track active scenes/components.

## External Dependencies
- **Three.js**: Used for 3D scenes in Healthyverse. See `src/actions/threeSpaceScene.js` for integration details.
- **Vite**: Project uses Vite for bundling and dev server. Config: `vite.config.js`.

## Conventions & Examples
- **Component Structure**: Place page components in `src/routes/`, shared logic in `src/stores/`, and reusable actions in `src/actions/`.
- **Resource Cleanup**: Always implement cleanup logic in Svelte actions (`onDestroy`) for Three.js scenes.
- **Build Output**: The `docs/` folder is the deploy target for GitHub Pages. Do not modify files in `docs/assets/` directly.

## Key Files
- `src/App.svelte`: Root component, navigation logic
- `src/routes/Healthyverse.svelte`: Healthyverse feature
- `src/actions/threeSpaceScene.js`: Three.js scene setup and teardown
- `src/stores/scene.js`: Scene state management

---

For unclear or incomplete sections, ask for clarification or examples from maintainers. Always follow the patterns in referenced files for new features or refactors.
