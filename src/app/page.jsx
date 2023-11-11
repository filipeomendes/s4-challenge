import Image from 'next/image'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <Image src="mapa" alt="imagem ilustrativa mapa" width={320} height={320}></Image>
        <div className="botao">
          <Link to="/maps/solicitacao">
            <button type="submit" className="botao-seguinte">Seguinte</button>
          </Link>
        </div>
      </div>
    </>
  )
}
