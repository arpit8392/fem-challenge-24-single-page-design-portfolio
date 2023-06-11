import Image from 'next/image'

const Cover = ({ id, title, image, width, height }: Cover) => {
	return (
		<li
			className={`grid-item-${id} flex min-h-[182px] flex-col justify-between rounded-lg p-6`}>
			<div className='relative h-1/2'>
				<Image
					src={`/assets/${image}`}
					alt=''
					className='w-auto self-end object-contain object-right-top'
					fill
				/>
			</div>
			<span className='text-2xl font-bold text-white'>{title}</span>
		</li>
	)
}
export default Cover
