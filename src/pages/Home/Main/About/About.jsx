import style from './About.module.css';
import { FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container}>
            <h2>Tecnologias</h2>
            <hr />
            <div className={style.tecnologias__container}>
                <p><FaHtml5 size={45} color='red' /></p>
                <p><FaCss3Alt size={45} color='blue' /></p>
                <p><SiTailwindcss size={45} color='#596ee4' /></p>
                <p><IoLogoJavascript size={45} color='#201d02' /></p>
                <p><FaReact size={45} color='#5ebbf1' /></p>
                <p><FaNode size={45} color='green' /></p>
                <p><FaPython size={45} color='#699ce9' /></p>
                <p><BiLogoPostgresql size={45} color='blue' /></p>
                <p><FaGithub size={45} /></p>
                <p><FaFigma size={45} /></p>
            </div>
        </section>
    );
};
