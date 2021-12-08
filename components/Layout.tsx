import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wishlist</title>
        <meta name="description" content="Part of TTD 17" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.background}>
            { children }
        </div>
      </main>
    </div>
  )
}

export default Layout
