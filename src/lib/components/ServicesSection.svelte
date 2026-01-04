<script>
	/**
	 * @typedef {{
	 * 	icon: string;
	 * 	title: string;
	 * 	description: string;
	 * }} Service
	 */

	/** @type {Service[]} */
	export let services = [];
</script>

<section id="services" class="bg-zinc-950/50 py-24">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-bold uppercase tracking-widest">Core Expertise</h2>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
			{#each services as service}
				<div class="group rounded-2xl p-8 glass transition duration-500 hover:border-violet-500/50">
					<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 transition group-hover:scale-110">
						<i data-lucide={service.icon} class="text-violet-400"></i>
					</div>
					<h4 class="mb-3 text-xl font-bold">{service.title}</h4>
					<p class="text-sm leading-relaxed text-gray-400">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
