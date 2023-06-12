import AboutMe from '@/components/AboutMe'
import CTA from '@/components/CTA'
import Introduction from '@/components/Introduction'
import MyWork from '@/components/MyWork'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col gap-28 overflow-hidden'>
			<Introduction />
			<AboutMe />
			<MyWork />
			<CTA />
		</main>
	)
}
