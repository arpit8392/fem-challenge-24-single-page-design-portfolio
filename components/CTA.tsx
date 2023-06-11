import TextButton from './TextButton'

const CTA = () => {
	return (
		<section className='px-4 md:px-10 lg:px-40'>
			<div className='flex flex-col items-center gap-6 rounded-xl bg-offBlack px-6 py-12 text-center text-lightCream md:gap-7 md:px-20 md:py-14 lg:flex-row lg:items-center lg:justify-around lg:px-16 lg:py-20 lg:text-left'>
				<div className='flex flex-col gap-6 md:gap-7'>
					<h3 className='text-[26px]/[33px] font-bold md:text-[32px]/[40px] lg:text-[40px]/[50px]'>
						Book a call with me
					</h3>
					<p className='max-w-sm text-base/[26px] font-medium md:max-w-none md:text-lg lg:max-w-xl'>
						I’d love to have a chat to see how I can help you. The best first
						step is for us to discuss your project during a free consultation.
						Then we can move forward from there.
					</p>
				</div>
				<TextButton label='Free Consultation' />
			</div>
		</section>
	)
}
export default CTA
