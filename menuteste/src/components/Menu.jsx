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
                <a id='logo' href='/#'>Logo</a>
                <nav id='navm'>
                    <button id='acaobotao' onClick={ toggleMenu } >Menu
                    <span id='icon'></span>
                    </button>
                    
                    <ul id='menu'>
                        <li> 
                            <Link to="/Home">Home</Link>
                        </li>

                        <li> 
                        <Link to="/Materias">Materias</Link>
                        </li>

                        <li> 
                        <Link to="/Perfil">Perfil</Link>
                        </li>

                        <li> 
                        <Link to="/Sobre">Sobre</Link>
                        </li>
                        
                    </ul>

                </nav>
            </header>
        </div>
    );
}