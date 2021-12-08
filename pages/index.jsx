import styles from '../styles/Home.module.css'
import Link from 'next/link';
import fetchWishes from '../util/fetch-wishes';

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

export const getServerSideProps = async () => {
  const wishes = await fetchWishes();

  return {
      props:{
          wishListNames: Object.keys(wishes)
      }
  }
}


export default Home
