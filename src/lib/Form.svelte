<script>
	let name = 'world';
    let a = 1;
	let b = 2;
    let yes = false;
    let scoops = 1;
</script>

<form>
    <input bind:value={name}>    
    <span>Hello {name}!</span>
    <label>
	    <input type=number bind:value={a} min=0 max=10>
	    <input type=range bind:value={a} min=0 max=10>
    </label>
    <label>
        <input type=checkbox bind:checked={yes}>
        Yes! Send me regular email spam
    </label>
    <button disabled={!yes}>
        Subscribe
    </button>

    <fieldset>Size
    <label>
        <input type=radio bind:group={scoops} name="scoops" value={1}>
        One scoop
    </label>

    <label>
        <input type=radio bind:group={scoops} name="scoops" value={2}>
        Two scoops
    </label>

    <label>
        <input type=radio bind:group={scoops} name="scoops" value={3}>
        Three scoops
    </label>
    </fieldset>
</form>

<style>
    form {
        margin-top: 2rem;
    }
    label {
        display: block;
    }
</style>