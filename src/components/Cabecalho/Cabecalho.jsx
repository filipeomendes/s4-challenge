"use client";
import Link from "next/link";
import Image from 'next/image'

export default function Cabecalho(){
    return(
        <header>
            <div className="logo-porto">
                <Link href='/maps'><Image src="logotipo1." alt="Logotipo Porto Seguro-SOS" width={30} height={30}></Image></Link>
            </div>
            <div className="menu">
                <nav>
                    <Link href="/maps">Solicitação</Link>
                    <span> | </span>
                    <Link href="/sobre">Sobre</Link>
                    <span> | </span>
                    <Link href="/contato">Contato</Link>
                </nav>
                <Link href="/" title="Sair da Conta"><Image src="/usuario.svg" alt="" width={30} height={30}></Image></Link>
            </div>
        </header>
    )
}