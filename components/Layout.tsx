import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wishlist</title>
        <meta name="description" content="Part of TTD 17" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
          <a>&#9733;</a>
       </Link>
      <main className={styles.main}>
        { children }
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
