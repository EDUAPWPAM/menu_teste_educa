import '../components/menu.css'


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
                        <li> <a href='/'>Home</a></li>
                        <li> <a href='/'>Sobre</a></li>
                        <li> <a href='/'>Matérias</a></li>
                        <li> <a href='/'>Perfil</a></li>
                        <li> <a href='/'>Perfil</a></li>
                        <li> <a href='/'>Perfil</a></li>
                        <li> <a href='/'>Perfil</a></li>
                        <li> <a href='/'>Perfil</a></li>
                        <li> <a href='/'>Perfil</a></li>
                        <li> <a href='/'>Perfil</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}