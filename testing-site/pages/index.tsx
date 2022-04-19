import type { NextPage } from 'next';
import Head from 'next/head';
import Profile from '../components/profile';
import ProjectPreview, { ProjectPreviewInterface } from '../components/project_preview';

const Home: NextPage = () => {
	const projectPreviewData: ProjectPreviewInterface = {
		title: 'Data Analysis App',
		desc: 'Processes data in Python',
		linkURL: '/data_analysis',
		image: '/luca-bravo-XJXWbfSo2f0-unsplash.jpg',
	};

	return (
		<div>
			<Profile></Profile>
			<div className="mt-4">
				<ProjectPreview {...projectPreviewData}></ProjectPreview>
			</div>
		</div>
	);
};

export default Home;
