<script lang="ts">
  import { fade } from "svelte/transition"
</script>
<div transition:fade={{duration: 100}} class="absolute bottom-5 text-white text-6xl truncate font-bold h-max">
	<slot />
</div>
