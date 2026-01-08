const DEFAULT_R3_HOST = 'https://pub-8ef6fcfa0fe043edabc841032e9ab54a.r2.dev';
const r3Host = import.meta.env?.VITE_R3_HOST ?? DEFAULT_R3_HOST;

export const projects = [
	{
		id: 'auto-expo-2025',
		title: 'Auto Expo 2025',
		category: 'Cinematography',
		type: 'video',
		client: 'Bharat Mobility Global Expo',
		year: '2025',
		services: ['Event Coverage', 'On-site Production', 'Post-Event Highlight Edit'],
		description:
			'Auto Expo 2025, the marquee showcase within Bharat Mobility Global Expo, celebrated the future of sustainable and connected mobility with six days of immersive experiences across Delhi-NCR venues.',
		metrics: [
			{ label: 'Exhibitors Captured', value: '120+' },
			{ label: 'Daily Footfall', value: '50K+' },
			{ label: 'Highlight Reel Runtime', value: '02:15' }
		],
		media: {
			kind: 'video',
			url: `${r3Host}/videos/IMG_8144.mov`,
			captions: '/captions/auto-expo-2025.vtt'
		},
		nextId: 'offroad-escape'
	},
	{
		id: 'offroad-escape',
		title: 'Off-Road Trail Odyssey',
		category: 'Adventure Cinematics',
		type: 'video',
		client: 'TrailForge Collective',
		year: '2024',
		services: ['Location Scouting', 'Drone Direction', 'Action Edit Suite'],
		description:
			'This off-road escapade followed a crew of enthusiasts across rugged highland passes, capturing raw torque, dust trails, and candid campfire camaraderie in cinematic detail.',
		metrics: [
			{ label: 'Shooting Days', value: '04' },
			{ label: 'Drone Flight Hours', value: '12' },
			{ label: 'Deliverables', value: '3 Cuts' }
		],
		media: {
			kind: 'video',
			url: `${r3Host}/videos/IMG_2197.mov`,
			captions: '/captions/offroad-escape.vtt'
		},
		nextId: 'thar-spotlight'
	},
	{
		id: 'thar-spotlight',
		title: 'Thar Icon Spotlight',
		category: 'Automotive Cinematography',
		type: 'video',
		client: 'Mahindra Experience Team',
		year: '2024',
		services: ['Storyboard', 'Rigged Vehicle Shots', 'Sound Design'],
		description:
			'A dawn-to-dusk visual journey of the new Thar, blending dynamic chase sequences with tactile macro shots to highlight its rugged luxury persona.',
		metrics: [
			{ label: 'Locations', value: '5' },
			{ label: 'Hero Shots', value: '18' },
			{ label: 'Master Grade', value: 'HDR10' }
		],
		media: {
			kind: 'video',
			url: `${r3Host}/videos/IMG_9405.mov`,
			captions: '/captions/thar-spotlight.vtt'
		},
		nextId: 'ride-reverie'
	},
	{
		id: 'ride-reverie',
		title: 'Ride Reverie',
		category: 'Moto Videography',
		type: 'video',
		client: 'Velocity MotoWorks',
		year: '2025',
		services: ['Cinematic Road Crew', 'FPV Capture', 'Motion Graphics'],
		description:
			'A kinetic bike feature that pairs highway velvet hour light with rider POVs, wrapping the narrative in a city-to-coast pilgrimage for two wheels.',
		metrics: [
			{ label: 'Total Distance', value: '310 km' },
			{ label: 'FPV Passes', value: '26' },
			{ label: 'Final Runtime', value: '01:45' }
		],
		media: {
			kind: 'video',
			url: `${r3Host}/videos/IMG_1592.mov`,
			captions: '/captions/ride-reverie.vtt'
		},
		nextId: 'auto-expo-2025'
	}
];
