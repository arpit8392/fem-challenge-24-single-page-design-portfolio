'use client'

import LeftArrow from '@/public/assets/icon-arrow-left.svg'
import RightArrow from '@/public/assets/icon-arrow-right.svg'
import Image from 'next/image'
import { useState } from 'react'

const sliderData = [
	{
		url: 'image-slide-1.jpg',
	},
	{
		url: 'image-slide-2.jpg',
	},
	{
		url: 'image-slide-3.jpg',
	},
	{
		url: 'image-slide-4.jpg',
	},
	{
		url: 'image-slide-5.jpg',
	},
]

const MyWork = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	
	const previous = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? sliderData.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const next = () => {
		const isLastSlide = currentIndex === sliderData.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const getSlides = () => {
		const slides = []
		for (let i = -1; i <= 1; i++) {
			const index = (currentIndex + i + sliderData.length) % sliderData.length
			slides.push(
				<li
					key={index}
					className='relative h-[180px] w-[270px] md:h-[360px] md:w-[540px]'>
					<Image
						src={`/assets/${sliderData[index].url}`}
						alt={sliderData[index].url}
						fill
						className={`scroll-smooth rounded-lg duration-200 ease-in hover:cursor-pointer ${
							i === 0 ? 'scale-105' : 'scale-100'
						}`}
					/>
				</li>
			)
		}
		return slides
	}

	return (
		<section className='flex flex-col items-center gap-8'>
			<h3 className='text-2xl font-bold text-offBlack md:text-[32px]/[40px]'>
				My Work
			</h3>
			<ul className='flex items-center gap-4 md:gap-8'>{getSlides()}</ul>
			<div className='flex gap-4'>
				<button
					onClick={previous}
					className='flex h-16 w-16 items-center justify-center rounded-full bg-offBlack hover:bg-galacticBlue'>
					<Image src={LeftArrow} alt='Previous Slide' className='w-auto' />
				</button>
				<button
					onClick={next}
					className='flex h-16 w-16 items-center justify-center rounded-full bg-offBlack hover:bg-galacticBlue'>
					<Image src={RightArrow} alt='Next Slide' className='w-auto' />
				</button>
			</div>
		</section>
	)
}
export default MyWork
