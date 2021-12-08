
import {GetStaticProps} from 'next';
import { NextPage } from 'next';
import Link from 'next/link';

import Wishes from '../public/wishes.json';
import styles from '../styles/Home.module.css';


type Wish = {
    name: string,
    description: string,
}

type Params = {
    wishes: Wish[]
}

const List: NextPage<Params> = ({ wishes }) => {
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

export const getStaticProps:GetStaticProps = async (ctx) => {
    return {
        props:{
            wishes: Wishes.general
        }
    }
}

export default List;