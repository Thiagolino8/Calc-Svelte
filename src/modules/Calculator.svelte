<script>
	import Current from '../components/Current.svelte'
	import Previous from '../components/Previous.svelte'
	import Output from '../components/Output.svelte'
	import Span from '../components/Span.svelte'
	import Button from '../components/Button.svelte'
	import Grid from '../components/Grid.svelte'
	import { useStore } from '../store'
	import { useActions } from '../actions'

	const { previous, operation, current } = useStore
	const { addDigit, chooseOperation, clear, deleteDigit, evaluate } = useActions
</script>

<svelte:head>
	<title>Calculator</title>
</svelte:head>

<div>
	<Grid>
		<Output>
			{#key $previous || $operation}
				<Previous>{`${$previous} ${$operation}`}</Previous>
			{/key}
			{#key !!$current}
				<Current>{$current}</Current>
			{/key}
		</Output>
		<Span operation={clear} value="AC" />
		<Button operation={deleteDigit} value="DEL" />
		<Button operation={chooseOperation} value="÷" />
		<Button operation={addDigit} value="7" />
		<Button operation={addDigit} value="8" />
		<Button operation={addDigit} value="9" />
		<Button operation={chooseOperation} value="*" />
		<Button operation={addDigit} value="4" />
		<Button operation={addDigit} value="5" />
		<Button operation={addDigit} value="6" />
		<Button operation={chooseOperation} value="+" />
		<Button operation={addDigit} value="1" />
		<Button operation={addDigit} value="2" />
		<Button operation={addDigit} value="3" />
		<Button operation={chooseOperation} value="-" />
		<Button operation={addDigit} value="." />
		<Button operation={addDigit} value="0" />
		<Span operation={evaluate} value="=" />
	</Grid>
</div>

<style>
	div {
		@apply h-screen
  w-full
  flex
  justify-center
  items-center;
	}
</style>
