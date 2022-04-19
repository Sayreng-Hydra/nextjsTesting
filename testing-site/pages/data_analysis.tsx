import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProjectImage from '../public/luca-bravo-XJXWbfSo2f0-unsplash.jpg';

const DataAnalysis: NextPage = () => {
	return (
		<div>
			<Image src={ProjectImage} alt="image" />
			<div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat beatae ullam numquam pariatur nemo aliquid culpa sint eum. Nemo natus atque iure autem quidem magni at beatae nobis libero perspiciatis? Recusandae perferendis enim quo neque alias laudantium consequatur facere, accusantium, ut dolores impedit! Cupiditate eligendi dolorum at labore doloribus voluptates nisi nobis consectetur corrupti non vel, deleniti qui, libero ad?</div>
			<div className="mt-6">
				<Link href="/">
					<a href={'/'} className="font-bold underline hover:text-indigo-600">
						Back
					</a>
				</Link>
			</div>
		</div>
	);
};

export default DataAnalysis;
