import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import Header from '../components/header';
import Profile from '../components/profile';
import ProjectPreview from '../components/project_preview';
import Layout from '../components/layout';

const Home: NextPage = () => {
	return (
		<Layout>
			<div className="text-slate-700 flex flex-col gap-6">
				<Header></Header>
				<Profile></Profile>
				<div>
					<ProjectPreview></ProjectPreview>
				</div>
				<Footer></Footer>
			</div>
		</Layout>
	);
};

export default Home;
