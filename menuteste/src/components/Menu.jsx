import '../components/menu.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu (){
    
    
    function toggleMenu(){
        const navm = document.getElementById('navm')
        navm.classList.toggle('ativo')
    }
    

    return (

        


        <div>
            
            <header id='headerm'>
                <h1 id='logo'>∑duca</h1>
                <nav id='navm'>
                    <button id='acaobotao' onClick={ toggleMenu } >Menu
                    <span id='icon'></span>
                    </button>
                    
                    <ul id='menu'>
                        <li> 
                            <Link to="/home">Home</Link>
                        </li>

                        <li> 
                        <Link to="/materias">Materias</Link>
                        </li>

                        <li> 
                        <Link to="/perfil">Perfil</Link>
                        </li>

                        <li> 
                        <Link to="/sobre">Sobre</Link>
                        </li>
                        
                    </ul>

                </nav>
            </header>
        </div>
    );
}