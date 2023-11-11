"use client";
import Link from "next/link";
import Image from 'next/image'

export default function Cabecalho(){
    return(
        <header>
            <div>
                <Link href='/maps'><Image src="logotipo1." alt="Logotipo Porto Seguro-SOS"></Image></Link>
            </div>
            <div>
                <nav>
                    <Link href="/maps">Solicitação</Link>
                    <span> | </span>
                    <Link href="/sobre">Sobre</Link>
                    <span> | </span>
                    <Link href="/contato">Contato</Link>
                </nav>
                <Link href="/" title="Sair da Conta"><Image src="/usuario.svg" alt=""></Image></Link>
            </div>
        </header>
    )
}