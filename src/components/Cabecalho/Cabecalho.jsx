import Link from "next/link";

export default function Cabecalho(){
    return(
        <header>
            <div>
                <nav>
                    <Link to="/maps">Solicitação</Link>
                    <span> | </span>
                    <Link to="/sobre">Sobre</Link>
                    <span> | </span>
                    <Link to="/contato">Contato</Link>
                </nav>
            </div>
        </header>
    )
}