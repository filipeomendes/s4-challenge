import Link from "next/link";
import Image from 'next/image'

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
                <Link to="/" title="Sair da Conta"><Image src="/usuario.svg" alt=""></Image></Link>
            </div>
        </header>
    )
}