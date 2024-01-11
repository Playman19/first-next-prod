import { Card } from "./Card/Card";
import styles from "./Cards1.module.css"


export const Cards1 = ({data}) => {

    return (
        <section className={styles.cardLayout}>
            <nav className={styles.cardContainer}>
                {
                    data.map((item) => (
                        <Card key={item.id} href={'/'} title={item.title} mainImg={item.thumbnail} />
                    ))
                }
            </nav>
        </section>
    );
};


   