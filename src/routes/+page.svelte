<script lang="ts">
	import '../app.css'
	import { fade } from 'svelte/transition'
	import { store } from '../store.svelte'
	import { actions } from '../actions'

	const { addDigit, chooseOperation, clear, deleteDigit, evaluate } = actions
</script>

{#snippet button({operation = (value: string) => {}, value = '', span = false})}
  <button	onclick={() => operation(value)}
	class:col-span-2={!!span}
	class="cursor-pointer text-3xl font-semibold border border-white outline-none bg-white/75 hover:bg-white/25 transition-all duration-100"
>
	{value}
</button>
{/snippet}

<div
	class="bg-gradient-to-r from-blue-400 to-green-500 h-screen w-screen text-gray-900 antialiased font-normal font-sans"
>
	<div class="h-screen w-full flex justify-center items-center">
		<div
			class="grid justify-self-center rounded-3xl overflow-hidden grid-cols-[repeat(4,_6rem)] grid-rows-[minmax(7rem,_auto)_repeat(5,_6rem)]"
		>
			<div class="flex relative col-span-full bg-black/60 flex-col items-start justify-between p-5 break-all h-32">
				{#key store.previous || store.operation}
					<div transition:fade={{ duration: 100 }} class="absolute top-5 text-white/75 text-2xl">
						{`${store.previous} ${store.operation}`}
					</div>
				{/key}
				{#key !!store.current}
					<div
						transition:fade={{ duration: 100 }}
						class="absolute bottom-5 text-white text-6xl truncate font-bold h-max"
					>
						{store.current}
					</div>
				{/key}
			</div>
			{@render button({span: true, operation: clear, value: "AC"})}
			{@render button({operation: deleteDigit, value: "DEL"})}
			{@render button({operation: chooseOperation, value: "÷"})}
			{@render button({operation: addDigit, value: "7"})}
			{@render button({operation: addDigit, value: "8"})}
			{@render button({operation: addDigit, value: "9"})}
			{@render button({operation: chooseOperation, value: "*"})}
			{@render button({operation: addDigit, value: "4"})}
			{@render button({operation: addDigit, value: "5"})}
			{@render button({operation: addDigit, value: "6"})}
			{@render button({operation: chooseOperation, value: "+"})}
			{@render button({operation: addDigit, value: "1"})}
			{@render button({operation: addDigit, value: "2"})}
			{@render button({operation: addDigit, value: "3"})}
			{@render button({operation: chooseOperation, value: "-"})}
			{@render button({operation: addDigit, value: "."})}
			{@render button({operation: addDigit, value: "0"})}
			{@render button({span: true, operation: evaluate, value: "="})}
		</div>
	</div>
</div>
