<script>
	let numbers = [1, 2, 3, 4];
    let obj = {
        foo: {
            bar: 'bar'
        }
    }
	$: sum = numbers.reduce((t, n) => t + n, 0);

	function addNumber() {
        // ❌ Svelte's reactivity is triggered by assignments, 
        // using array methods like push and splice won't automatically cause updates.
        // numbers.push(numbers.length + 1);
        // numbers = numbers;

        // ⭕️ 불변성
		numbers = [...numbers, numbers.length + 1];

        // ⭕️ Assignments to properties of arrays and objects 
        // — e.g. obj.foo += 1 or array[i] = x — 
        // work the same way as assignments to the values themselves.
        numbers[numbers.length] = numbers.length + 1;
	}

    function changeBar() {
        // A simple rule of thumb: 
        // the name of the updated variable must appear on the left hand side of the assignment.
    
        // ❌ this won't trigger reactivity on obj.foo.bar.
        // const foo = obj.foo;
        // foo.bar = 'baz';

        obj.foo.bar = 'baz';
    }

</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<p on:click={changeBar}>bar: {obj.foo.bar}</p>
