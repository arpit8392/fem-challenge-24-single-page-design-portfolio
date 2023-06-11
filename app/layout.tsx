import Header from '@/components/Header'
import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Single Page Design Portfolio',
	description:
		'Frontend Mentor Challenge | Single Page Design Portfolio | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='bg-lightCream'>
			<body className={`${plus_jakarta_sans.className} mx-auto max-w-[1440px]`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
