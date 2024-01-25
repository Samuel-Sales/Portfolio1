import style from './Projects.module.css';

export default function Projects() {
    return (
        <section className={style.container}>
            <h2>Projects</h2>
            <hr className={style.linha__principal} />
            <div className={style.container__cards}>
                <div className={style.card}>
                    <img className={style.card__imagem__projeto} src="/descartavel.png" alt="Imagem do projeto" />
                    <p className={style.projeto__titulo}>Project Title</p>
                    <p className={style.descricao__projeto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nulla interdum urna quis magna lobortis, eget finibus urna <br />
                        vestibulum. Sed nec ex non justo dictum venenatis. Fusce <br />
                        nec purus nec mauris posuere malesuada
                    </p>
                    <div className={style.tecnologias}>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                    </div>
                    <img className={style.links__projetos} src="/GitHub.svg" alt="Logo do GitHub" />
                    <img src="/Link.svg" alt="Link para o site na Vercel" />
                </div>

                <div className={style.card}>
                    <img className={style.card__imagem__projeto} src="/descartavel.png" alt="Imagem do projeto" />
                    <p className={style.projeto__titulo}>Project Title</p>
                    <p className={style.descricao__projeto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nulla interdum urna quis magna lobortis, eget finibus urna <br />
                        vestibulum. Sed nec ex non justo dictum venenatis. Fusce <br />
                        nec purus nec mauris posuere malesuada
                    </p>
                    <div className={style.tecnologias}>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                    </div>
                    <img className={style.links__projetos} src="/GitHub.svg" alt="Logo do GitHub" />
                    <img src="/Link.svg" alt="Link para o site na Vercel" />
                </div>

                <div className={style.card}>
                    <img className={style.card__imagem__projeto} src="/descartavel.png" alt="Imagem do projeto" />
                    <p className={style.projeto__titulo}>Project Title</p>
                    <p className={style.descricao__projeto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nulla interdum urna quis magna lobortis, eget finibus urna <br />
                        vestibulum. Sed nec ex non justo dictum venenatis. Fusce <br />
                        nec purus nec mauris posuere malesuada
                    </p>
                    <div className={style.tecnologias}>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                    </div>
                    <img className={style.links__projetos} src="/GitHub.svg" alt="Logo do GitHub" />
                    <img src="/Link.svg" alt="Link para o site na Vercel" />
                </div>

                <div className={style.card}>
                    <img className={style.card__imagem__projeto} src="/descartavel.png" alt="Imagem do projeto" />
                    <p className={style.projeto__titulo}>Project Title</p>
                    <p className={style.descricao__projeto}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nulla interdum urna quis magna lobortis, eget finibus urna <br />
                        vestibulum. Sed nec ex non justo dictum venenatis. Fusce <br />
                        nec purus nec mauris posuere malesuada
                    </p>
                    <div className={style.tecnologias}>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                        <p>TECH <br /> STACK</p>
                    </div>
                    <img className={style.links__projetos} src="/GitHub.svg" alt="Logo do GitHub" />
                    <img src="/Link.svg" alt="Link para o site na Vercel" />
                </div>
            </div>

        </section>
    );
};