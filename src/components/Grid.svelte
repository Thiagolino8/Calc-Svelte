<div>
	<slot />
</div>

<style lang="postcss">
	div {
		@apply
  grid
  justify-self-center
  rounded-3xl
  overflow-hidden;

  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
	}
</style>
