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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget <br />
                finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere <br />
                malesuada
            </p>
            <div>
                <p><FaReact size={50} color='#5ebbf1' /></p>
                <p><SiNextdotjs size={50} /></p>
                <p><FaNode size={50} color='green' /></p>
                <p><BiLogoPostgresql size={50}  color='blue' /></p>
                <p><FaJava size={50} color='red' /></p>
                <p><FaGithub size={50} /></p>
                <p><FaFigma size={50} /></p>
            </div>
        </section>
    );
};
