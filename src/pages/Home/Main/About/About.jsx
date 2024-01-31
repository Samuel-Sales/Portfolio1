import style from './About.module.css';
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container}>
            <h2>Sobre</h2>
            <hr />
            <p className={style.texto}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget <br />
                finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere <br />
                malesuada
            </p>
            <div className={style.tecnologias__container}>
                <p><FaReact size={45} color='#5ebbf1' /></p>
                <p><SiNextdotjs size={45} /></p>
                <p><FaNode size={45} color='green' /></p>
                <p><BiLogoPostgresql size={45}  color='blue' /></p>
                <p><FaJava size={45} color='red' /></p>
                <p><FaGithub size={45} /></p>
                <p><FaFigma size={45} /></p>
            </div>
        </section>
    );
};
