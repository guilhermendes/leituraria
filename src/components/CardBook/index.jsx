import "./card-livro.style.css";
import { IconEditar, IconExcluir } from "../icons";
import iconBook from "../../assets/image/icon-book.png";

export function CardBook({ id, titulo, autor, status, onEditar, onExcluir }) {
  return (
    <div className="card-livro">
      <div className="card-livro-icone">
        <img src={iconBook} alt="Ícone do livro" />
      </div>
      <div className="card-livro-info">
        <p className="card-livro-titulo">{titulo}</p>
        <span className="card-livro-autor">{autor}</span>
      </div>

      <div className="card-livro-acoes">
        <button
          className="card-livro-btn"
          onClick={() => onEditar({ id, titulo, autor, status })}
        >
          <IconEditar />
        </button>
        <button className="card-livro-btn" onClick={() => onExcluir(id)}>
          <IconExcluir />
        </button>
      </div>
    </div>
  );
}
