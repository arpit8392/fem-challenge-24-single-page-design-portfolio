'use client'

import Image from 'next/image'
import { useState } from 'react'
import LeftArrow from '@/public/assets/icon-arrow-left.svg'
import RightArrow from '@/public/assets/icon-arrow-right.svg'

type Props = {
	images: string[]
}

const Slider = ({ images }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const previous = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const next = () => {
		const isLastSlide = currentIndex === images.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const getSlides = () => {
		const slides = []
		for (let i = -1; i <= 1; i++) {
			const index = (currentIndex + i + images.length) % images.length
			slides.push(
				<li
					key={index}
					className='relative h-[180px] w-[270px] md:h-[360px] md:w-[540px]'>
					<Image
						src={`/assets/${images[index]}`}
						alt={`Image ${index + 1}`}
						fill
						className={`scroll-smooth rounded-lg object-contain object-center duration-200 ease-in ${
							i === 0 ? 'scale-105' : 'scale-100'
						}`}
					/>
				</li>
			)
		}
		return slides
	}

	return (
		<div className='flex flex-col items-center gap-10'>
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
		</div>
	)
}

export default Slider
