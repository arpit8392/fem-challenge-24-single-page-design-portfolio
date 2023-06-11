import { coversData } from '@/data'
import Cover from './Cover'

const Introduction = () => {
	return (
		<section className='flex flex-col gap-8 px-4 md:gap-16 md:px-10 lg:gap-20 lg:px-40'>
			<div className='flex flex-col items-center gap-4 px-3 text-center md:gap-7'>
				<h1 className='text-4xl font-bold text-offBlack md:text-5xl lg:text-6xl'>
					Design solutions made easy
				</h1>
				<p className='max-w-sm font-medium text-mediumBrown md:max-w-xl md:text-lg lg:max-w-2xl'>
					With over ten years of experience in various design disciplines, I’m
					your one-stop shop for your design needs.
				</p>
			</div>
			<ul className='grid min-w-fit grid-flow-row-dense grid-cols-2 grid-rows-6 gap-6 md:grid-cols-4 md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-2'>
				{coversData.map((item) => (
					<Cover key={item.id} {...item} />
				))}
			</ul>
		</section>
	)
}
export default Introduction
