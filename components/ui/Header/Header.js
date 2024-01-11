import { A } from "../A/A";
import layout from './css/Layout.module.css'
import flex from './css/Flex.module.css'


export const Header = () => {
    return (
        <header className={layout.header}>
            <section className={layout.headerContainer}>
                <span>LOGO</span>
                <nav className={flex.headerFlex}>
                    <A href={'/'} text={'Главная'} />
                    <A href={'/catalog'} text={'Каталог'} />
                    <A href={'/about'} text={'О компании'} />
                    <A href={'/offers'} text={'Услуги'} />
                </nav>
            </section>
        </header>
    );
};