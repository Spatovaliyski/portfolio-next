import dynamic from 'next/dynamic';
import './globals.css';
import Header from '@/components/04.Templates/Header/header';
import Footer from '@/components/04.Templates/Footer/footer';

import localFont from 'next/font/local';
import styles from './layout.module.scss';
import Container from '@/components/01.Atoms/Container/container';

const font = localFont({ src: './KantumruyPro.ttf' })

const SyncPointer = dynamic(() => import('@/components/01.Atoms/_libs/syncpointer'), {
	ssr: false,
});

export const metadata = {
  title: 'Martin Spatovaliyski',
  description: 'React & WordPress Enthusiast',
}

/**
 * Renders the root layout of the application.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {JSX.Element} - The JSX code for the root layout.
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<SyncPointer />
				<div className={styles.site}>
					<Header />
					<main className={styles.main}>
						<Container>
							{children}
						</Container>
					</main>
					<Footer />
				</div>
			</body>
		</html>
	)
};
