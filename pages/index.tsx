import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.conainer}>
      
        <h1 className={styles.title}>
          Merry Christmas
        </h1>
        <p className={styles.description}>
          <Link href="/list">
            <a>See my wishes &rarr;</a>
          </Link>
        </p>
    </div>
  )
}

export default Home
