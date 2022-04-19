import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProjectImage from '../public/jj-ying-8bghKxNU1j0-unsplash.jpg';

const dataPushtrough: NextPage = () => {
	return (
		<div>
			<h1 className="text-xl text-indigo-600 mb-4 font-bold">Data Pushtrough app</h1>
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

export default dataPushtrough;
