import { CardBook } from "../CardBook";
import "./book-list.style.css";

export function BookList({ livros, carregando, onEditar, onExcluir }) {
  if (carregando) return <p>Carregando livros...</p>;

  if (livros.length === 0) {
    return (
      <div className="book-list-vazio">
        <span className="book-list-vazio-icone">📚</span>
        <p className="book-list-vazio-titulo">Nenhum livro aqui ainda</p>
        <p className="book-list-vazio-descricao">
          Adicione um livro clicando no botão acima
        </p>
      </div>
    );
  }

  return livros.map((livro) => (
    <CardBook
      key={livro.id}
      id={livro.id}
      titulo={livro.titulo}
      autor={livro.autor}
      status={livro.status}
      onEditar={onEditar}
      onExcluir={onExcluir}
    />
  ));
}
