import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import fetchWishes from '../../util/fetch-wishes';

const List = ({ wishes }) => {
    return (
        <>
        <h1>
            My Wishlist
        </h1>
            {
                wishes.map((wish) => (
                    <div className={styles.card} key={wish.name}>
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