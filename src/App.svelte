<script lang="ts">
  import src from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Nested from './lib/Nested.svelte';
  import Array from './lib/Array.svelte';
  
  let name = 'world';
</script>

<main>
  <img {src} alt="Svelte Logo" />
  <h1>Hello {name.toUpperCase()}</h1>

  <Counter />
  <Nested />
  <Array />

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
