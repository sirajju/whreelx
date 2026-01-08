<script>
	import { createEventDispatcher } from 'svelte';

	/**
	 * @typedef {{ label: string; value: string }} FilterOption
	 * @typedef {{
	 * 	id: string;
	 * 	title: string;
	 * 	category: string;
	 * 	type: string;
	 * 	media?: {
	 * 		kind?: 'video' | 'image';
	 * 		url?: string;
	 * 		poster?: string;
	 * 		captions?: string;
	 * 	} | null;
	 * }} PortfolioProject
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
				class="portfolio-card group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 text-left"
				on:click={() => dispatch('select', { id: project.id })}
			>
				<div class="absolute inset-0">
					{#if project.media?.poster}
						<img
							src={project.media.poster}
							alt={`${project.title} poster`}
							class="h-full w-full object-cover"
						/>
					{:else if project.media?.kind === 'image' && project.media?.url}
						<img
							src={project.media.url}
							alt={`${project.title} preview`}
							class="h-full w-full object-cover"
						/>
					{:else}
						<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
							<div class="flex flex-col items-center text-center">
								<div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
									<i data-lucide={project.type === 'video' ? 'clapperboard' : 'sparkles'} class="w-6" aria-hidden="true"></i>
								</div>
								<span class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">{project.category}</span>
							</div>
						</div>
					{/if}
				</div>
				<div
					class="portfolio-overlay absolute inset-0 flex flex-col justify-end bg-black/80 p-8 opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100"
				>
					<span class="mb-2 text-xs font-bold uppercase text-violet-400">{project.category}</span>
					<h5 class="mb-4 text-xl font-bold">{project.title}</h5>
					<span class="flex items-center gap-2 text-sm font-bold transition-all md:hover:gap-3">
						View Project
						<i data-lucide="arrow-right" class="w-4" aria-hidden="true"></i>
					</span>
				</div>
			</button>
		{/each}
	</div>
</section>
