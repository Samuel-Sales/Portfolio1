import style from './Hero.module.css';
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className={style.container}>
            <h1>Samuel Sales</h1>
            <hr className={style.linha} />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna <br />
                lobortis,eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec <br />
                purus nec mauris posuere malesuada 
            </p>
            <Link className={style.botao__projects} to='contact'>Projetos</Link>
            <Link className={style.botao__contact} to='contact'>Contato</Link>
        </section>
    );
};