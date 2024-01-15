import { Img } from "./Img/Img"
import { Info } from "./Info/Info"
import { Title } from "./Title/Title"

export const ProductViewer = ({prod}) => {
    return (
        <section>
            <Img src={prod.thumbnail} />
            <Title title={prod.title} price={prod.price} />
            <Info brand={prod.brand} category={prod.category} art={prod.description} />
        </section>
    )
}