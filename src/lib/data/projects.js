export const projects = [
	{
		id: 'urban-motion',
		title: 'Urban Motion Reel',
		category: 'Cinematography',
		type: 'video',
		client: 'StreetWear Collective',
		year: '2024',
		services: ['Creative Direction', 'Color Grading', 'Sound Design'],
		description:
			"A high-energy, fast-paced commercial project designed for social media engagement. We captured the essence of urban culture using anamorphic lenses and dynamic transitions to showcase the client's new summer line.",
		metrics: [
			{ label: 'View Count', value: '1.2M+' },
			{ label: 'Share Rate', value: '15%' },
			{ label: 'Conversion', value: '22%' }
		],
		nextId: 'eco-evolve'
	},
	{
		id: 'eco-evolve',
		title: 'E-commerce Evolution',
		category: 'Web Design',
		type: 'web',
		client: 'Green Living Co.',
		year: '2023',
		services: ['UI/UX Design', 'Headless CMS', 'E-commerce Dev'],
		description:
			'Re-imagining the shopping experience for a sustainable goods brand. We focused on a minimal, clean aesthetic that reduced load times by 40% and improved mobile checkout conversion significantly.',
		metrics: [
			{ label: 'Load Speed', value: '0.8s' },
			{ label: 'Avg. Session', value: '4m 12s' },
			{ label: 'Growth', value: '300%' }
		],
		nextId: 'brand-growth'
	},
	{
		id: 'brand-growth',
		title: 'Brand Growth 2.0',
		category: 'Strategy',
		type: 'social',
		client: 'ScaleUp SaaS',
		year: '2024',
		services: ['Account Handling', 'Content Engine', 'Influencer Collabs'],
		description:
			'Transforming a corporate LinkedIn and Instagram presence from static to viral. By implementing a systematic content engine, we helped the brand achieve industry leader status within 6 months.',
		metrics: [
			{ label: 'Followers', value: '+50K' },
			{ label: 'Leads Gen', value: '1.5K' },
			{ label: 'Engagement', value: '8.4%' }
		],
		nextId: 'urban-motion'
	}
];
