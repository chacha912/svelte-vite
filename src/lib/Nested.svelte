<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
    export let name = 'paragraph';
</script>

<p>This is a {name}. </p>
<!-- <p>{@html string}</p> -->

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
	}
</style>