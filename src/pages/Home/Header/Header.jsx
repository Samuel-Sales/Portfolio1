import { Link } from "react-router-dom";
import style from './Header.module.css';
import Menu from "./Menu";
import { useEffect, useState } from "react";

export default function Header() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

    const atualizarMedia = () => {
        setDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', atualizarMedia);
        return () => window.removeEventListener('resize', atualizarMedia);
    }, []);

    return (
        <header className={style.container}>
            <h1>Portfólio</h1>
            {isDesktop ? (
                <nav className={style.navegacao}>
                    <Link className={style.links} to='/'>Início</Link>
                    <Link className={style.links} to='about'>Sobre</Link>
                    <Link className={style.links} to='projects'>Projetos</Link>
                    <Link className={style.botao} to='contact'>Contato</Link>
                </nav>
            ) : (
                <Menu />
            )}
        </header>
        // <header className={style.container}>
        //     <h1>Portfolio</h1>
        //     <nav className={style.navegacao}>
        //         <Link className={style.links} to='/'>Início</Link>
        //         <Link className={style.links} to='about'>Sobre</Link>
        //         <Link className={style.links} to='projects'>Projetos</Link>
        //         <Link className={style.botao} to='contact'>Contato</Link>
        //     </nav>
        //     <Menu />
        // </header>
    );
};