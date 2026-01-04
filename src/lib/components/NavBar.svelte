<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const links = [
		{ href: '#about', label: 'About' },
		{ href: '#services', label: 'Services' },
		{ href: '#portfolio', label: 'Portfolio' }
	];

	export let isMenuOpen = false;

	const dispatch = createEventDispatcher();
	let isCompact = false;

	const handleScroll = () => {
		if (typeof window === 'undefined') return;
		isCompact = window.scrollY > 50;
	};

	onMount(() => {
		if (typeof window === 'undefined') {
			return undefined;
		}
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const closeMenu = () => dispatch('closeMenu');
</script>

<nav class="fixed top-0 left-0 z-50 w-full glass transition-all duration-300">
	<div
		class={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
			isCompact ? 'py-2 min-h-[70px]' : 'py-4 min-h-[80px]'
		}`}
	>
		<a href="/" class="text-2xl font-extrabold uppercase tracking-tighter text-gradient">Whreelx</a>

		<div class="hidden items-center space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="nav-link text-gray-400 transition hover:text-white"
					on:click={closeMenu}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="#contact"
				class="flex items-center justify-center rounded-full bg-violet-600 px-6 py-2.5 text-white transition hover:bg-violet-700"
				on:click={closeMenu}
			>
				Get Started
			</a>
		</div>

		<button
			type="button"
			class="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
			on:click={() => dispatch('toggleMenu')}
			aria-label="Toggle navigation"
		>
			<i data-lucide="menu" aria-hidden="true"></i>
		</button>
	</div>

	<div class={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-white/5 bg-black/80 backdrop-blur`}
		role="menu"
	>
		<div class="space-y-4 px-6 py-6 text-sm font-bold uppercase tracking-widest">
			{#each links as link}
				<a
					href={link.href}
					class="block text-gray-300 transition hover:text-white"
					on:click={closeMenu}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="#contact"
				class="block rounded-full bg-violet-600 px-4 py-3 text-center text-white transition hover:bg-violet-700"
				on:click={closeMenu}
			>
				Get Started
			</a>
		</div>
	</div>
</nav>
