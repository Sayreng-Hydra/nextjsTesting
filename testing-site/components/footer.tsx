import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const icon = <FaGithub />;

	return (
		<div className="text-center text-slate-400 border-t border-slate-300 p-4">
			<div>Designed and built by Sayreng Hydra</div>
			<Link href="https://github.com/Sayreng-Hydra/nextjsTesting  ">
				<a className="text-3xl text-slate-300 flex justify-center">{icon}</a>
			</Link>
		</div>
	);
};

export default Footer;
