<script>
	import { createEventDispatcher } from 'svelte';

	/**
	 * @typedef {{ label: string; value: string }} FilterOption
	 * @typedef {{ id: string; title: string; category: string; type: string }} PortfolioProject
	 */

	/** @type {FilterOption[]} */
	export let filters = [];
	/** @type {string} */
	export let activeFilter = 'all';
	/** @type {PortfolioProject[]} */
	export let projects = [];

	const dispatch = createEventDispatcher();
</script>

<section id="portfolio" class="mx-auto max-w-7xl px-6 py-24">
	<div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
		<div>
			<h2 class="mb-2 text-4xl font-bold uppercase tracking-tighter">Our Works</h2>
			<p class="text-gray-400">A showcase of excellence across categories.</p>
		</div>
		<div class="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
			{#each filters as filter}
				<button
					type="button"
					class={`rounded-full px-6 py-2 transition ${
						filter.value === activeFilter
							? 'bg-violet-600 text-white'
							: 'glass text-gray-300 hover:text-white'
					}`}
					on:click={() => dispatch('filterChange', { filter: filter.value })}
				>
					{filter.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<button
				type="button"
				class="portfolio-card relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 text-left"
				on:click={() => dispatch('select', { id: project.id })}
			>
				<div class="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase text-zinc-700">
					Project Preview
				</div>
				<div class="portfolio-overlay absolute inset-0 flex flex-col justify-end bg-black/80 p-8 opacity-0 transition-opacity duration-300">
					<span class="mb-2 text-xs font-bold uppercase text-violet-400">{project.category}</span>
					<h5 class="mb-4 text-xl font-bold">{project.title}</h5>
					<span class="flex items-center gap-2 text-sm font-bold transition-all hover:gap-3">
						View Project
						<i data-lucide="arrow-right" class="w-4"></i>
					</span>
				</div>
			</button>
		{/each}
	</div>
</section>
