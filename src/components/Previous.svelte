<script lang="ts">
  import { fade } from "svelte/transition"
</script>
<div transition:fade={{duration: 100}} class="absolute top-5 text-white/75 text-2xl">
	<slot />
</div>
