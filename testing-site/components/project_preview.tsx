import Image from 'next/image';
import Link from 'next/link';

const ProjectPreview = () => {
	const title: string = 'Data Analysis App';
	const desc: string = 'Processes data in Python';
	const linkURL: string = '/data_analysis';

	return (
		<div className="flex gap-4">
			<div className="relative w-24 h-16">
				<Image src={'/luca-bravo-XJXWbfSo2f0-unsplash.jpg'} layout="fill" alt="thumbnail"></Image>
			</div>
			<div className="my-auto">
				<Link href={linkURL}>
					<a href={'/'} className="font-bold underline hover:text-indigo-600">
						{title}
					</a>
				</Link>
				<div>{desc}</div>
			</div>
		</div>
	);
};

export default ProjectPreview;
