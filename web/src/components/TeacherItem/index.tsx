import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/39064364?s=460&u=c3194c358999291b375d3555065c5518ba10dde4&v=4"
          alt="Thallys Braz"
        />
        <div>
          <strong>Thallys Braz</strong>
          <span>Desenvolvimento de Software</span>
        </div>
      </header>

      <p>
        Texto
        <br /> <br />
        descritivo é aquele que detalha de maneira pormenorizada os aspectos de
        um determinado lugar, acontecimento, pessoa, objeto ou animal.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
