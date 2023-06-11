import Image from 'next/image'
import TextButton from './TextButton'

const AboutMe = () => {
	return (
		<section className='px-4 md:px-10 lg:px-40'>
			<figure className='grid grid-cols-1 justify-items-center gap-10 text-center md:grid-cols-2 md:items-center md:gap-x-20 md:text-left lg:gap-x-28'>
				<Image
					src={'/assets/image-amy.webp'}
					alt='Amy smiling in her picture'
					height={300}
					width={300}
					className='rounded-full md:hidden'
				/>
				<Image
					src={'/assets/image-amy.webp'}
					alt='Amy smiling in her picture'
					height={364}
					width={364}
					className='hidden rounded-full md:block lg:hidden'
				/>
				<Image
					src={'/assets/image-amy.webp'}
					alt='Amy smiling in her picture'
					height={445}
					width={445}
					className='hidden rounded-full lg:block'
				/>
				<figcaption className='flex max-w-md flex-col items-center gap-6 md:max-w-xs md:items-start lg:max-w-none lg:gap-8'>
					<h2 className='text-[26px]/[33px] font-bold text-offBlack md:text-[32px]/[40px] lg:text-[40px]/[50px]'>
						I’m Amy, and I’d love to work on your next project
					</h2>
					<p className='text-base/[26px] font-medium leading-7 text-mediumBrown md:text-lg md:leading-8'>
						I love working with others to create beautiful design solutions.
						I’ve designed everything from brand illustrations to complete mobile
						apps. I’m also handy with a camera!
					</p>
					<TextButton label='Free Consultation' />
				</figcaption>
			</figure>
		</section>
	)
}
export default AboutMe
