import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google'
import { Suspense } from 'react';
import './globals.css';
import Header from '@/components/04.Templates/Header/header.component';
import Footer from '@/components/04.Templates/Footer/footer.component';
import Container from '@/components/01.Atoms/Container/container.component';
import Loader from '@/components/01.Atoms/Loader/loader.component';

import localFont from 'next/font/local';
import styles from './layout.module.scss';

const font = localFont({ src: './KantumruyPro.ttf' })

const SyncPointer = dynamic(() => import('@/components/01.Atoms/_libs/syncpointer'), {
  ssr: false,
});

export const metadata = {
  title: 'Martin Spatovaliyski',
  description: 'Front end | UI/UX | WordPress, Next.js & React',
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
              <Suspense fallback={<Loader />}>
                {children}
              </Suspense>
            </Container>
          </main>
          <Footer />
        </div>
      </body>
      
      <GoogleTagManager gtmId={'GTM-TMPRX8N5'} />
    </html>
  )
}
