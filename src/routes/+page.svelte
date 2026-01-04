<script>
	import { afterUpdate, onMount } from 'svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import DetailView from '$lib/components/DetailView.svelte';
	import FooterSection from '$lib/components/FooterSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import PortfolioSection from '$lib/components/PortfolioSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import SuccessModal from '$lib/components/SuccessModal.svelte';
	import { projects } from '$lib/data/projects.js';

	/**
	 * @typedef {{
	 * 	label: string;
	 * 	value: string;
	 * }} FilterOption
	 * @typedef {{ label: string; value: string }} Metric
	 * @typedef {{ createIcons?: () => void }} LucideGlobal
	 * @typedef {Window & typeof globalThis & { lucide?: LucideGlobal }} LucideWindow
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
	 * 	nextId: string;
	 * }} Project
	 */

	/** @type {FilterOption[]} */
	const filters = [
		{ label: 'All', value: 'all' },
		{ label: 'Videos', value: 'video' },
		{ label: 'Websites', value: 'web' },
		{ label: 'Social', value: 'social' }
	];

	/**
	 * @type {{
	 * 	icon: string;
	 * 	title: string;
	 * 	description: string;
	 * }[]}
	 */
	const services = [
		{
			icon: 'share-2',
			title: 'Social Media Handling',
			description: 'Full-scale growth strategies, content planning, and analytics.'
		},
		{
			icon: 'video',
			title: 'Professional Videography',
			description: 'Cinematic storytelling and dynamic editing for all platforms.'
		},
		{
			icon: 'layout',
			title: 'Web Design & UI/UX',
			description: 'High-performance websites designed to convert visitors into clients.'
		}
	];

	/** @type {string} */
	let activeFilter = 'all';
	let isMenuOpen = false;
	/** @type {string | null} */
	let selectedProjectId = null;
	let showSuccessModal = false;
	/** @type {Project[]} */
	let filteredProjects = projects;
	/** @type {Project | null} */
	let activeProject = null;
	/** @type {Project | null} */
	let nextProject = null;

	const ensureIcons = () => {
		if (typeof window === 'undefined') return;
		const lucideWindow = /** @type {LucideWindow} */ (window);
		lucideWindow.lucide?.createIcons?.();
	};

	onMount(() => {
		ensureIcons();
		if (typeof window === 'undefined') {
			return undefined;
		}
		const interval = window.setInterval(() => {
			const lucideWindow = /** @type {LucideWindow} */ (window);
			if (lucideWindow.lucide?.createIcons) {
				lucideWindow.lucide.createIcons();
				window.clearInterval(interval);
			}
		}, 100);
		return () => window.clearInterval(interval);
	});

	afterUpdate(() => {
		ensureIcons();
	});

	$: filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.type === activeFilter);

	$: activeProject = projects.find((project) => project.id === selectedProjectId) ?? null;
	$: nextProject = activeProject ? projects.find((project) => project.id === activeProject.nextId) ?? null : null;

	/** @param {CustomEvent<{ filter: string }>} event */
	const handleFilterChange = (event) => {
		activeFilter = event.detail.filter;
	};

	/** @param {string} id */
	const openProject = (id) => {
		selectedProjectId = id;
		isMenuOpen = false;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const closeProject = () => {
		selectedProjectId = null;
		if (typeof document !== 'undefined') {
			document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	/** @param {CustomEvent<{ id?: string }>} event */
	const openNextProject = (event) => {
		const { id } = event.detail;
		if (id) {
			openProject(id);
		}
	};

	const handleContactSubmit = () => {
		showSuccessModal = true;
	};

	const handleModalClose = () => {
		showSuccessModal = false;
	};
</script>

<svelte:head>
	<title>whreelx Creative | End-to-End Digital & Media Services</title>
</svelte:head>

{#if activeProject}
	<DetailView project={activeProject} {nextProject} on:close={closeProject} on:next={openNextProject} />
{:else}
	<NavBar {isMenuOpen} on:toggleMenu={() => (isMenuOpen = !isMenuOpen)} on:closeMenu={() => (isMenuOpen = false)} />
	<main>
		<HeroSection />
		<AboutSection />
		<ServicesSection {services} />
		<PortfolioSection
			{filters}
			{activeFilter}
			projects={filteredProjects}
			on:filterChange={handleFilterChange}
			on:select={({ detail }) => openProject(detail.id)}
		/>
		<ContactSection on:submit={handleContactSubmit} />
		<FooterSection />
	</main>
{/if}

<SuccessModal open={showSuccessModal} on:close={handleModalClose} />
