import Link from 'next/link';

import Wishes from '../../public/wishes.json';
import styles from '../../styles/Home.module.css';

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

export const getStaticProps = async (ctx) => {
    const { slug } = ctx.params
    return {
        props:{
            wishes: Wishes[slug],
        }
    }
}

export const getStaticPaths = () => {
    const wishListNames = Object.keys(Wishes);
    return {
        paths: wishListNames.map((name) => ({ params: { slug: name }})),
        fallback: false
    }
}

export default List;