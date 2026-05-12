import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 
	{
		default: '42 Craft',
		template: '%s | 42 Craft'
	},
	description: 'Advanced analytics platform for 42 Network students. Track your projects, achievements, best teammates, and monthly logtime with beautiful visualizations.',
	keywords: ['42 school', '42 network', 'intra profile', 'student analytics', 'coding school', 'projects tracker', '42 students', 'Ecole 42', 'coding journey', 'developer stats', '42 Craft'],
	authors: [{ name: 'Younes Oubellal', url: 'https://github.com/mr-youbella' }],
	creator: 'Younes Oubellal',
	publisher: 'Younes Oubellal',
	robots: 
	{
		index: true,
		follow: true,
		googleBot: 
		{
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: 
	{
		type: 'website',
		locale: 'en_US',
		url: 'https://42craft.vercel.app',
		title: '42 Craft',
		description: 'Advanced analytics platform for 42 Network students. Track your projects, achievements, best teammates, and monthly logtime.',
		siteName: '42 Craft',
		images: [
			{
				url: '/42Craft.png',
				width: 1200,
				height: 630,
				alt: '42 Craft Dashboard',
			},
		],
	},
	viewport: 
	{
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	verification: 
	{
		google: 'rnlNX8zZkZDeOpPcLQEonRc0uYXRREWnZ2639zanKr8',
	},
	alternates: 
	{
		canonical: 'https://42craft.vercel.app',
	},
	category: 'education',
	formatDetection: 
	{
		email: false,
		address: false,
		telephone: false,
	},
	icons:
	{
		icon: [ { url: '/42Craft.png', sizes: 'any' } ]
	}
};

export default function RootLayout
({
	children,
}: Readonly<
{
	children: React.ReactNode;
}>)
{
	return (
		<html lang="en">
			<body className="bg-linear-to-b from-[#0f1726] to-[#14202f] bg-no-repeat text-white">{children}</body>
		</html>
	);
}
