import Image from 'next/image';
import Link from 'next/link';

export interface ProjectPreviewInterface {
	title: string;
	desc: string;
	linkURL: string;
	image: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
	return (
		<div className="flex gap-4 bg-slate-200">
			<div className="relative w-24 h-16">
				<Image src={props.image} layout="fill" alt="thumbnail"></Image>
			</div>
			<div className="my-auto">
				<Link href={props.linkURL}>
					<a className="font-bold underline hover:text-indigo-600">{props.title}</a>
				</Link>
				<div>{props.desc}</div>
			</div>
		</div>
	);
};

export default ProjectPreview;
