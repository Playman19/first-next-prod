export const Info = ({brand,category,art}) => {
    return (
        <section>
            <ul>
                <li>
                    <span>Категория</span>
                    <span>{category}</span>
                </li>
                <li>
                    <span>Бренд</span>
                    <span>{brand}</span>
                </li>
            </ul>
            <div>
                <h2>Описание</h2>
                <article>{art}</article>
            </div>
        </section>
    )
}