import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/profile';
import ProjectPreview, { ProjectPreviewInterface } from '../components/project_preview';

const Home: NextPage = () => {
	const projectMetadataArray = [];

	projectMetadataArray.push({
		title: 'Data Analysis App',
		desc: 'Processes data in Python',
		linkURL: '/data_analysis',
		image: '/luca-bravo-XJXWbfSo2f0-unsplash.jpg',
	});

	projectMetadataArray.push({
		title: 'Data Pushtrough App',
		desc: 'Sending data through api',
		linkURL: '/data_pushtrough',
		image: '/jj-ying-8bghKxNU1j0-unsplash.jpg',
	});

	projectMetadataArray.push({
		title: 'Electrolysis App',
		desc: 'Monitors conversion rate with python',
		linkURL: '/Electrolysis',
		image: '/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg',
	});

	const projectPreviewElements = [];

	for (let i = 0; i < projectMetadataArray.length; i++) {
		const metaData = projectMetadataArray[i];
		const element = <ProjectPreview {...metaData} key={i}></ProjectPreview>;
		projectPreviewElements.push(element);
	}

	return (
		<div>
			<Profile></Profile>
			<div className="mt-4 flex flex-col gap-2">{projectPreviewElements}</div>
		</div>
	);
};

export default Home;
