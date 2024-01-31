import { useState } from 'react';
import './Menu.css';


export default function Menu() {
    const [menuVisivel, setMenuVisivel] = useState(false);

    function alternarMenu() {
        setMenuVisivel(!menuVisivel);
    };

    return (
        <header>
            <button className={`menu-button ${menuVisivel ? 'show' : ''}`} onClick={alternarMenu}>
                <img src="Menu.svg" alt="Aqui esta a imagem do menu" />
            </button>
            {menuVisivel && (
                <nav>
                    <ul className='lista-links'>
                        <li>Sobre</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            )}
        </header>
    );
};