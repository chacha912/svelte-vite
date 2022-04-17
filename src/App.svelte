<script lang="ts">
  import src from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Nested from './lib/Nested.svelte';
  import Info from './lib/Info.svelte';
  import Array from './lib/Array.svelte';
  import Event from './lib/Event.svelte';
  
  let name = 'world';
  const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

  function handleMessage(event) {
		alert(event.detail.text);
	}

</script>

<main>
  <img {src} alt="Svelte Logo" />
  <h1>Hello {name.toUpperCase()}</h1>

  <Counter />
  <Nested />
  <Nested name={'world'}/>
  <Info {...pkg} />
  <Array />
  <Event on:message={handleMessage}/>

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
    height: 1rem;
    width: 1rem;
  }

  h1 {
    color: #ff3e00;
    font-size: 2rem;
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
