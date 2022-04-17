<script>
    import { createEventDispatcher } from 'svelte';

    // This links dispatch to the component instance.
	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}

	function handleClick() {
		alert('no more alerts')
	}
</script>

<button on:click|once={handleClick}>
	Click me
</button>

<button on:click={sayHello}>
	Click to say hello
</button>