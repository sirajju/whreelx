<script>
	import { createEventDispatcher } from 'svelte';

	/**
	 * @typedef {{ label: string; value: string }} Metric
	 * @typedef {{ kind?: 'video' | 'image'; url?: string; poster?: string; captions?: string } | null | undefined } ProjectMedia
	 * @typedef {{ kind: 'video' | 'image' | 'note'; url?: string; poster?: string; captions?: string; title?: string; description?: string }} GalleryAsset
	 * @typedef {{
	 * 	id: string;
	 * 	title: string;
	 * 	category: string;
	 * 	type: string;
	 * 	client: string;
	 * 	year: string;
	 * 	services: string[];
	 * 	description: string;
	 * 	metrics: Metric[];
	 * 	media?: ProjectMedia;
	 * 	gallery?: GalleryAsset[];
	 * }} DisplayProject
	 */

	/** @type {DisplayProject | null} */
	export let project = null;
	/** @type {DisplayProject | null} */
	export let nextProject = null;

	const dispatch = createEventDispatcher();
	$: nextTitle = nextProject?.title ?? 'Explore Portfolio';
	$: heroMediaKind = project?.media?.kind ?? null;
	$: heroMediaUrl = project?.media?.url ?? null;
	/** @type {GalleryAsset[]} */
	$: galleryAssets =
		project?.gallery?.filter((asset) => {
			if (!asset) return false;
			if (heroMediaUrl && asset.url && asset.kind === heroMediaKind && asset.url === heroMediaUrl) {
				return false;
			}
			return true;
		}) ?? [];
</script>

{#if project}
	<div class="min-h-screen">
		<nav class="fixed top-0 left-0 z-50 w-full glass">
			<div class="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6 py-4">
				<button
					type="button"
					class="group flex items-center gap-2 text-gray-400 transition hover:text-white"
					on:click={() => dispatch('close')}
				>
					<i data-lucide="chevron-left" class="transition-transform group-hover:-translate-x-1"></i>
					<span class="text-sm font-bold uppercase tracking-widest">Back to Gallery</span>
				</button>
				<div class="text-lg font-bold uppercase tracking-tighter text-gradient">whreelx Studio</div>
				<a
					href="#contact"
					class="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest transition hover:bg-white/20"
					on:click={() => dispatch('close')}
				>
					Inquire Similar Project
				</a>
			</div>
		</nav>

		<div class="fade-in pt-[80px]">
			<section class="mx-auto max-w-7xl px-6 py-12">
				<div class="mb-12">
					<span class="text-sm font-bold uppercase tracking-widest text-violet-400">{project.category}</span>
					<h1 class="mt-4 text-4xl font-black uppercase tracking-tighter md:text-7xl">{project.title}</h1>
				</div>

				<div class="mb-20 grid gap-12 lg:grid-cols-3">
					<div class="space-y-8 lg:col-span-2">
						<div class="aspect-video overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
							{#if project.media?.kind === 'video' && project.media.url}
								<video
									src={project.media.url}
									class="h-full w-full bg-black object-cover"
									controls
									playsinline
									preload="metadata"
								>
									<track
										src={project.media?.captions ?? 'data:text/vtt,WEBVTT'}
										kind="captions"
										srclang="en"
										label="English captions"
										default
									/>
									Sorry, your browser does not support embedded videos. Watch {project.title} instead.
								</video>
							{:else if project.media?.kind === 'image' && project.media.url}
								<img
									src={project.media.url}
									alt={`${project.title} hero visual`}
									class="h-full w-full object-cover"
								/>
							{:else}
								<div class="flex h-full w-full items-center justify-center">
									<span class="font-mono text-zinc-600">[Hero Visual Placeholder: {project.title}]</span>
								</div>
							{/if}
						</div>

						<div class="prose prose-invert max-w-none">
							<h3 class="mb-4 text-2xl font-bold">Project Brief</h3>
							<p class="text-lg leading-relaxed text-gray-400">{project.description}</p>
						</div>

						{#if galleryAssets.length}
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								{#each galleryAssets as asset}
									<div class="flex min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
										{#if asset.kind === 'video' && asset.url}
											<video
												src={asset.url}
												class="h-full w-full flex-1 bg-black object-cover"
												controls
												playsinline
												preload="metadata"
											>
												<track
													src={asset.captions ?? 'data:text/vtt,WEBVTT'}
													kind="captions"
													srclang="en"
													label="English captions"
													default
												/>
												Sorry, your browser does not support embedded videos. Watch {project.title} instead.
											</video>
										{:else if asset.kind === 'image' && asset.url}
											<img
												src={asset.url}
												alt={asset.title ?? `${project.title} gallery asset`}
												class="h-full w-full flex-1 object-cover"
											/>
										{:else if asset.kind === 'note'}
											<div class="flex flex-1 flex-col justify-center gap-3 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-center">
												<i data-lucide="sparkles" class="mx-auto h-6 w-6 text-violet-300" aria-hidden="true"></i>
												{#if asset.title}
													<h6 class="text-sm font-semibold uppercase tracking-widest text-zinc-400">{asset.title}</h6>
												{/if}
												{#if asset.description}
													<p class="text-sm text-gray-300">{asset.description}</p>
												{:else}
													<p class="text-sm text-gray-300">Behind-the-scenes insight from the shoot.</p>
												{/if}
											</div>
										{:else}
											<div class="flex flex-1 items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-center">
												<span class="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Asset coming soon</span>
											</div>
										{/if}

										{#if asset.kind !== 'note' && (asset.title || asset.description)}
											<div class="border-t border-white/5 px-4 py-3">
												{#if asset.title}
													<h6 class="text-sm font-semibold text-white">{asset.title}</h6>
												{/if}
												{#if asset.description}
													<p class="mt-1 text-xs text-gray-400">{asset.description}</p>
												{/if}
											</div>
										{/if}
									</div>
								{/each}
							</div>
						{:else}
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="flex aspect-square items-center justify-center rounded-2xl border border-white/5 bg-zinc-900">
									<span class="font-mono text-xs text-zinc-700">Gallery asset coming soon</span>
								</div>
							</div>
						{/if}
					</div>

					<div class="space-y-12">
						<div class="glass space-y-6 rounded-2xl p-8">
							<div>
								<h6 class="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Client</h6>
								<p class="font-bold">{project.client}</p>
							</div>
							<div>
								<h6 class="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Year</h6>
								<p class="font-bold">{project.year}</p>
							</div>
							<div>
								<h6 class="mb-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">Scope</h6>
								<ul class="mt-2 space-y-1">
									{#each project.services as service}
										<li class="flex items-center gap-2 text-sm text-gray-300">
											<div class="h-1 w-1 rounded-full bg-violet-500"></div>
											{service}
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<div class="space-y-4">
							<h4 class="text-xl font-bold uppercase tracking-tighter">Key Results</h4>
							{#each project.metrics as metric}
								<div class="flex items-center justify-between border-b border-white/10 py-4">
									<span class="text-sm font-medium text-gray-500">{metric.label}</span>
									<span class="text-xl font-black text-violet-400">{metric.value}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</section>
		</div>

		<section class="border-t border-white/5 px-6 py-20 text-center">
			<h5 class="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">Up Next</h5>
			<button
				type="button"
				class={`text-4xl font-black uppercase tracking-tighter transition-colors ${
					nextProject ? 'hover:text-violet-400' : 'text-zinc-600'
				} md:text-6xl`}
				on:click={() => nextProject && dispatch('next', { id: nextProject.id })}
				disabled={!nextProject}
			>
				{nextTitle}
			</button>
		</section>
	</div>
{/if}
