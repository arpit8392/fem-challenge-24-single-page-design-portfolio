import Image from 'next/image'
import TextButton from './TextButton'
import Logo from '@/public/assets/logo.svg'

const LogoCTA = () => {
	return (
		<div className='flex flex-wrap items-center justify-between gap-4'>
			<Image src={Logo} alt='Company Logo' className='h-12 w-auto md:h-16' />
			<TextButton label='Free Consultation' isPrimary />
		</div>
	)
}
export default LogoCTA
