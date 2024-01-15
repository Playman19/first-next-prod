import Link from "next/link";
import styles from "./Card.module.css"


export const Card = ({href,title,mainImg,price}) => {
    return (
        <Link legacyBehavior href={href}>
            <a className={styles.card}>
                <div className={styles.imgWrapper}>
                    <img src={mainImg} />
                </div>
                <section className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                        <span className={styles.cardTitle}>{title}</span>
                        <button className={`${styles.like} ${styles.likeDefault}`}></button>
                    </div>
                    <span className={styles.cardPrice}>{price}</span>
                    <div className={styles.loctime}>
                        <span>Брянск</span>
                        <span>Советский р-н</span>
                        <span>Вчера 12:34</span>
                    </div>
                    
                </section>
            </a>
        </Link>
    );
};