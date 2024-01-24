import style from './About.module.css';

export default function About() {
    return (
        <section className={style.container}>
            <h2>About</h2>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget <br />
                finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere <br />
                malesuada
            </p>
            <div>
                <p className={style.tecnologias}>TECH <br />STACK</p>
                <p>TECH <br />STACK</p>
                <p>TECH <br />STACK</p>
                <p>TECH <br />STACK</p>
            </div>
        </section>
    );
};
