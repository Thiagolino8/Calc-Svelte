<script lang="ts">
	export let value = ''
	export let operation = (value: string) => {}
</script>

<button on:click={() => operation(value)}>
	{value}
</button>

<style>
	button {
		@apply cursor-pointer
  text-3xl
  font-semibold
  border
  border-white
  outline-none
  bg-white/75
  hover:bg-white/25
  transition-all
  duration-100;
	}
</style>
