import AboutMe from '@/components/AboutMe'
import CTA from '@/components/CTA'
import Introduction from '@/components/Introduction'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col gap-28'>
			<Introduction />
			<AboutMe />
			{/* Section - My Work */}
			<CTA />
		</main>
	)
}
