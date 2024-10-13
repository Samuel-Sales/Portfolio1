import style from './Hero.module.css';
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className={style.container}>
            <h1>Samuel Sales</h1>
            <hr className={style.linha} />
            <p>
                Olá! Sou Samuel Sales, desenvolvedor Full Stack especializado em desenvolvimento web. <br />
                Ajudo pequenos negócios e designers a transformar grandes ideias em realidade. Vamos conversar?
            </p>
            {/* <div className={style.botoes__container}> */}
            <Link className={style.botao__projects} to='contact'>Projetos</Link>
            <Link className={style.botao__contact} to='contact'>Contato</Link>
            {/* </div> */}
        </section>
    );
};