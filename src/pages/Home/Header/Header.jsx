import { Link } from "react-router-dom";
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <h1>Portfolio</h1>
            <nav className={style.navegacao}>
                <Link className={style.links} to='/'>Início</Link>
                <Link className={style.links} to='about'>Sobre</Link>
                <Link className={style.links} to='projects'>Projetos</Link>
                <Link className={style.botao} to='contact'>Contato</Link>
            </nav>
        </header>
    );
};