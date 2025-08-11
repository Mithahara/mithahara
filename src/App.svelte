<script>
  import { onMount } from 'svelte';
  import { theme, toggleTheme } from './stores/theme.js';

  let page = 'home';
  let pageComponent;
  const pageCache = {};

  let isTransitioning = false;
  function navigate(p) {
    if (p === 'healthyverse') {
      isTransitioning = true;
      setTimeout(() => {
        page = p;
        isTransitioning = false;
      }, 1000);
    } else {
      page = p;
    }
  }

  // Preload components on hover for faster navigation
  function preload(p) {
    if (!pageCache[p]) {
      import(`./routes/${p.charAt(0).toUpperCase() + p.slice(1)}.svelte`)
        .then(m => { pageCache[p] = m.default; });
    }
  }

  // Lazy-load and cache page components
  $: (async () => {
    if (!pageCache[page]) {
      pageCache[page] = (await import(`./routes/${page.charAt(0).toUpperCase() + page.slice(1)}.svelte`)).default;
    }
    pageComponent = pageCache[page];
  })();

  $: document.documentElement.classList.toggle('light-theme', $theme === 'light');

  onMount(() => {
    document.documentElement.classList.remove('light-theme');
  });
</script>
<svelte:options immutable={true}/>

<nav>
  <button on:mouseenter={() => preload('home')} on:click={() => page = 'home'} class:active={page === 'home'}>Home</button>
  <button on:mouseenter={() => preload('healthyverse')} on:click={() => navigate('healthyverse')} class:active={page === 'healthyverse'}>Healthyverse</button>
  <button on:mouseenter={() => preload('notifications')} on:click={() => page = 'notifications'} class:active={page === 'notifications'}>Notifications</button>
  <button class="theme-toggle" on:click={toggleTheme}>
    {#if $theme === 'dark'}
      <i class="fa-solid fa-sun"></i>
    {:else}
      <i class="fa-solid fa-moon"></i>
    {/if}
  </button>
</nav>

<main class:transitioning={isTransitioning}>
  <svelte:component this={pageComponent} />
</main>

<style>
  /* local nav overrides if needed */
  nav {
    display: flex;
    align-items: center;
  }
  .theme-toggle {
    margin-left: auto;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }
  .transitioning {
    filter: blur(10px) opacity(0.3);
    transition: filter 1s ease, opacity 1s ease;
  }
</style>