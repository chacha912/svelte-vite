<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<p>This is a paragraph. </p>
<p>{@html string}</p>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>