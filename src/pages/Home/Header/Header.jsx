import { Link } from "react-router-dom";
import style from './Header.module.css';

export default function Header() {
    return (
        <header className={style.container}>
            <h1>Portfolio</h1>
            <nav className={style.navegacao}>
                <Link className={style.links} to='/'>Home</Link>
                <Link className={style.links} to='about'>About</Link>
                <Link className={style.links} to='projects'>Projects</Link>
                <Link className={style.botao} to='contact'>Contact</Link>
            </nav>
        </header>
    );
};