<script>

</script>
<button>
<slot/>
</button>

<style lang="postcss">
  button {
    @apply
  cursor-pointer
  text-3xl
  font-semibold
  border
  border-white
  outline-none
  bg-white/75
  hover:bg-white/25
  transition-all
  col-span-2
  duration-100;
  }
</style>