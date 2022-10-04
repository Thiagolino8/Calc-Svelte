<div class="grid justify-self-center rounded-3xl overflow-hidden">
	<slot />
</div>

<style>
	div {
		grid-template-columns: repeat(4, 6rem);
		grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
	}
</style>
