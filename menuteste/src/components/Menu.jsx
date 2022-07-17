import '../components/menu.css'

export default function Menu (){
    return (
        <div>
            <a id='logo' href='/'>Logo</a>
            <header id='headerm'>
                <nav id='navm'>
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