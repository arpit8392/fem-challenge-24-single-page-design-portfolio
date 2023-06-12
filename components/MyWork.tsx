import Slider from './Slider'

const sliderData: string[] = [
	'image-slide-1.jpg',
	'image-slide-2.jpg',
	'image-slide-3.jpg',
	'image-slide-4.jpg',
	'image-slide-5.jpg',
]

const MyWork = () => {
	return (
		<section className='flex flex-col items-center gap-8'>
			<h3 className='text-2xl font-bold text-offBlack md:text-[32px]/[40px]'>
				My Work
			</h3>
			<Slider images={sliderData} />
		</section>
	)
}
export default MyWork
