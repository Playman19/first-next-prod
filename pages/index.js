import Head from "next/head";
import { Header } from "../components/ui/Header/Header";
import { Footer } from "../components/ui/Footer/Footer";
import { Cards1 } from "../components/Cards1/Cards1";


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://dummyjson.com/products')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }

const Index = ({repo}) => {


    return (
        <>
            <Head>
                <meta name="description" content="Мой первый проект на NextJS" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <title>Главная</title>
            </Head>
            <Header />
            <main>
                <Cards1 data={repo.products} />
            </main>
            <Footer />
        </>
    );
};

export default Index;