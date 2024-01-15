import { useRouter } from "next/router";
import Head from "next/head";
import { Header } from "../../components/ui/Header/Header";
import { Footer } from "../../components/ui/Footer/Footer";
import { ProductViewer } from "../../components/ProductViewer/ProductViewer";

export async function getServerSideProps ({params}) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`)
    const prod = await res.json()
    return {
        props: { prod }
    }
}

const Product = ({prod}) => {
    const {query} = useRouter()

    const DescConstructor = `Купить ${prod.title} по низкой цене`

    return (
        <>
            <Head>
                <meta name="description" content={DescConstructor} />
                <title>Купить {prod.title}</title>
            </Head>
            <Header />
            <main>
                <ProductViewer prod={prod}/>
            </main>
            <Footer />
        </>
    )
}

export default Product