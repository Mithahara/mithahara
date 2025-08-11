<script>
  import { threeSpaceScene } from '../actions/threeSpaceScene.js';
  import { onMount, onDestroy } from 'svelte';
  import { activeScene } from '../stores/scene.js';

  onMount(() => {
    activeScene.set('healthyverse');
  });
  onDestroy(() => {
    activeScene.set('');
  });
</script>

<style>
  .scene-container {
    width: 100%;
    height: 400px;
    background: var(--background);
    margin: 2rem auto;
    border: 1px solid var(--primary);
  }
</style>

<div class="scene-container" use:threeSpaceScene></div>