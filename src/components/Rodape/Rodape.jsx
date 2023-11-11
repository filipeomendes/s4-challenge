import Image from "next/image"

export default function Rodape(){

    return(
        <footer>
            <section>
                <div>
                    <nav>
                        <a href="https://github.com/filipeomendes/sprint3-challenge-1tdspv" target='blank'><Image src="logoGithub" alt="Logo preto do Github"></Image></a>
                        <a href="https://www.instagram.com/complex.wrld/" target='blank'><Image src="/logoInstagram" alt="Logo preto do Instagram"></Image></a>
                        <a href="https://www.facebook.com" target='blank'><Image src=""  alt="Logo preto do Facebook"></Image></a>
                    </nav>
                </div>
                <div>
                    <p>Todos os direitos reservados ©2023 - Complex</p>
                </div>
            </section>
        </footer>
    )
}