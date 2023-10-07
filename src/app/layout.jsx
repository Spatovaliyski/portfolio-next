import './globals.css';
import Header from '@/components/04.Templates/Header/header';
import Footer from '@/components/04.Templates/Footer/footer';

import localFont from 'next/font/local';
import styles from './layout.module.scss';
import Container from '@/components/01.Atoms/Container/container';

const font = localFont({ src: './KantumruyPro.ttf' })

export const metadata = {
  title: 'Martin Spatovaliyski',
  description: 'React & WordPress Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
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
