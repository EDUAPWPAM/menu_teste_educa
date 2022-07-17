import '../components/menu.css'


export default function Menu (){
    return (
        <div>
            
            <header id='headerm'>
            <a id='logo' href='/#'>Logo</a>
                <nav id='navm'>
                    <button id='acao='>menu</button>
                    <ul id='menu'>
                        <li> <a href='/'>Home</a></li>
                        <li> <a href='/'>Sobre</a></li>
                        <li> <a href='/'>Matérias</a></li>
                        <li> <a href='/'>Perfil</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}