<script>
import Calculator from "../modules/Calculator.svelte";
</script>

<div>
<Calculator/>
</div>

<style>
  div {
    @apply
      bg-gradient-to-r from-blue-400 to-green-500
      h-screen
      w-screen
      text-gray-900
      antialiased
      font-normal
      font-sans;
  }
</style>