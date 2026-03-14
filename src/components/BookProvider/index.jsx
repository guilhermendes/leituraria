import { useState } from "react";
import { BookContext } from "./BookContext";

const LIVROS_INICIAIS = [
  { id: 1, titulo: "O Hobbit", autor: "J.R.R. Tolkien", status: "concluidos" },
  { id: 2, titulo: "1984", autor: "George Orwell", status: "lendo" },
  {
    id: 3,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    status: "quero-ler",
  },
];

function carregarLivros() {
  const salvo = localStorage.getItem("leituraria-livros");
  return salvo ? JSON.parse(salvo) : LIVROS_INICIAIS;
}

export function BookProvider({ children }) {
  const [livros, setLivros] = useState(carregarLivros);

  function salvar(lista) {
    setLivros(lista);
    localStorage.setItem("leituraria-livros", JSON.stringify(lista));
  }

  function adicionarLivro(dados) {
    salvar([...livros, { ...dados, id: Date.now() }]);
  }

  function excluirLivro(id) {
    salvar(livros.filter((l) => l.id !== id));
  }

  function editarLivro(id, dados) {
    salvar(livros.map((l) => (l.id === id ? { ...l, ...dados } : l)));
  }

  return (
    <BookContext.Provider
      value={{ livros, adicionarLivro, excluirLivro, editarLivro }}
    >
      {children}
    </BookContext.Provider>
  );
}
