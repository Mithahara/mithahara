<script>
  import { notifications } from '../data.js';
</script>

<style>
  .notifications {
    padding: 2rem;
    max-width: 600px;
    margin: auto;
    font-family: 'Inter', sans-serif;
    color: var(--text);
    text-align: center;
  }
  .notifications h2 {
    margin-bottom: 1rem;
  }
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item-list li {
    padding: 0.25rem 0;
  }
</style>

<main class="notifications">
  <ul class="item-list">
    {#each notifications as note}
      <li>{note}</li>
    {/each}
  </ul>
</main>