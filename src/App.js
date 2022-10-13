import React from "react";
import "./styles.css";
import CardVideo from "./Componentes/CardVideo";


export default function App() {

 
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo titulo="titulo-1" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-2" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-3" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-4" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-5" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-6" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-7" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
            <CardVideo titulo="titulo-8" imagem={"https://picsum.photos/400/400?a=1"} usuario="Taynara"/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
