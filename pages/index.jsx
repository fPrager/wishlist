import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Wishes from '../public/wishes.json';

const Home = ({ wishListNames }) => {
  return (
    <div className={styles.conainer}>
        <h1 className={styles.title}>
          Merry Christmas
        </h1>
        {
          wishListNames.map((name) => (
            <p className={styles.description} key={name}>
              <Link href={`/lists/${name}`}>
                <a>See my wishes for <b>{name}</b> &rarr;</a>
              </Link>
            </p>
          ))
        }
    </div>
  )
}

export const getStaticProps = async () => {
  return {
      props:{
          wishListNames: Object.keys(Wishes)
      }
  }
}


export default Home
