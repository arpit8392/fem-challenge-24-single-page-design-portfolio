import Image from 'next/image'

const Cover = ({ id, title, image, width, height }: Cover) => {
	return (
		<li
			className={`grid-item-${id} flex min-h-[182px] flex-col justify-between rounded-lg p-6`}>
			<Image
				src={`/assets/${image}`}
				alt=''
				width={width}
				height={height}
				className='self-end'
			/>
			<span className='text-2xl font-bold text-white'>{title}</span>
		</li>
	)
}
export default Cover
