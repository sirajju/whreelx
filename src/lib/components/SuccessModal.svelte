<script>
	import { createEventDispatcher } from 'svelte';

	export let open = false;

	const dispatch = createEventDispatcher();
</script>

{#if open}
	<div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6">
		<div class="glass w-full max-w-sm rounded-3xl p-8 text-center">
			<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
				<i data-lucide="check" class="text-green-500"></i>
			</div>
			<h4 class="mb-2 text-2xl font-bold">Message Sent!</h4>
			<button
				type="button"
				class="w-full rounded-xl bg-violet-600 py-3 font-bold transition hover:bg-violet-700"
				on:click={() => dispatch('close')}
			>
				Close
			</button>
		</div>
	</div>
{/if}
