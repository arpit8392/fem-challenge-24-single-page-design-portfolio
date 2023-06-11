import { classNames } from '@/utils/helper'
import Link from 'next/link'

type Props = {
	label: string
	isPrimary?: boolean
}
const TextButton = ({ label, isPrimary }: Props) => {
	return (
		<Link
			href={'#'}
			className={classNames(
				isPrimary
					? 'bg-offBlack hover:bg-galacticBlue'
					: 'bg-lightRed hover:bg-summerYellow ',
				'max-w-fit rounded-full px-7 py-3 text-center text-sm font-bold text-lightCream md:px-11 md:py-3 md:text-base lg:py-4'
			)}>
			{label}
		</Link>
	)
}
export default TextButton
