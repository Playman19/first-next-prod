import Link from "next/link";
import styles from "./Card.module.css"


export const Card = ({href,title,mainImg}) => {
    return (
        <Link legacyBehavior href={href}>
            <a className={styles.card}>
                <div className={styles.imgWrapper}>
                    <img src={mainImg} />
                </div>
                <section className={styles.infoContainer}>
                    <span>{title}</span>
                </section>
            </a>
        </Link>
    );
};