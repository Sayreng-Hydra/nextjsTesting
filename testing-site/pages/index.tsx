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
		<div>
			<Profile></Profile>
			<div className="mt-4">
				<ProjectPreview></ProjectPreview>
			</div>
		</div>
	);
};

export default Home;
