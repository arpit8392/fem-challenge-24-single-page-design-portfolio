import Image from 'next/image'
import TextButton from './TextButton'

const LogoCTA = () => {
	return (
		<div className='flex justify-between items-center'>
			<Image
				src={'/assets/logo.svg'}
				alt='Company Logo'
				height={48}
				width={48}
				className='block md:hidden'
			/>
			<Image
				src={'/assets/logo.svg'}
				alt='Company Logo'
				height={64}
				width={64}
				className='hidden md:block'
			/>
			<TextButton label='Free Consultation' isPrimary />
		</div>
	)
}
export default LogoCTA
