import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import fetchWishes from '../../util/fetch-wishes';
import Image from 'next/image';

const List = ({ wishes }) => {
    return (
        <>
        <h1>
            My Wishlist
        </h1>
            {
                wishes.map((wish) => (
                    <div className={styles.card} key={wish.name}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/2/22/Christmas_bells.png" width="50" height="50" className={styles.bell} />
                        <h2>{wish.name}</h2>
                        <p>{wish.description}</p>
                    </div>
                ))
            }
            <Link href="/">
                <a>&#9733;</a>
            </Link>
        </>
    );
}

export const getServerSideProps= async (ctx) => {
    const wishes = await fetchWishes();

    const { slug } = ctx.params
    return {
        props:{
            wishes: wishes[slug],
        }
    }
}

export default List;