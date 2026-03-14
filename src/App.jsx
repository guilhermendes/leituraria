import { useContext, useState } from "react";
import "./App.css";
import { Container } from "./components/Contrainer";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { BookList } from "./components/BookList";
import { Button } from "./components/Button";
import { ContainerHeader } from "./components/ContainerHeader";
import { Dialog } from "./components/Dialog";
import { BookForm } from "./components/BookForm";
import { IconAdd } from "./components/icons";
import { BookContext } from "./components/BookProvider/BookContext";
import { ConfirmDialog } from "./components/ConfirmaDialog";
import { Toast } from "./components/Toast";

const links = [
  { id: "quero-ler", label: "Quero Ler" },
  { id: "lendo", label: "Lendo" },
  { id: "concluidos", label: "Concluídos" },
];

function App() {
  const [menuAtivo, setMenuAtivo] = useState("quero-ler");
  const [showDialog, setShowDialog] = useState(false);
  const { livros, adicionarLivro, editarLivro, excluirLivro } =
    useContext(BookContext);
  const [livroEditando, setLivroEditando] = useState(null);
  const livrosFiltrados = livros.filter((l) => l.status === menuAtivo);
  const [livroExcluindo, setLivroExcluindo] = useState(null);
  const [toast, setToast] = useState(null);

  function exibirToast(mensagem) {
    setToast(mensagem);
  }

  const openFormDialog = () => {
    setLivroEditando(null);
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setLivroEditando(null);
  };

  function handleEditar(livro) {
    setLivroEditando(livro);
    setShowDialog(true);
  }

  function handleSalvar(dados) {
    if (livroEditando) {
      editarLivro(livroEditando.id, dados);
      exibirToast("Livro editado com sucesso!");
    } else {
      adicionarLivro(dados);
      exibirToast("Livro adicionado com sucesso!");
    }
    setLivroEditando(null);
    setShowDialog(false);
  }

  function handleExcluir(id) {
    setLivroExcluindo(id);
  }

  function confirmarExcluir() {
    excluirLivro(livroExcluindo);
    setLivroExcluindo(null);
    exibirToast("Livro excluído com sucesso!");
  }

  function cancelarExcluir() {
    setLivroExcluindo(null);
  }

  return (
    <>
      <Header>
        <Logo />
      </Header>

      <Navbar links={links} menuAtivo={menuAtivo} onNavegar={setMenuAtivo} />

      <Dialog
        isOpen={showDialog}
        onClose={closeFormTodoDialog}
        title={livroEditando ? "Editar livro" : "Adicionar livro"}
      >
        <BookForm
          onSalvar={handleSalvar}
          key={livroEditando?.id ?? "novo"}
          livroEditando={livroEditando}
        />
      </Dialog>

      <Container>
        <ContainerHeader>
          <Button onClick={() => openFormDialog()} icon={<IconAdd />}>
            Adicionar Livro
          </Button>
        </ContainerHeader>

        <BookList
          livros={livrosFiltrados}
          onEditar={handleEditar}
          carregando={false}
          onExcluir={handleExcluir}
        />

        <ConfirmDialog
          isOpen={livroExcluindo !== null}
          title="Excluir Livro"
          mensagem="Tem certeza que deseja excluir este livro?"
          onConfirmar={confirmarExcluir}
          onCancelar={cancelarExcluir}
        />
      </Container>
      {toast && <Toast mensagem={toast} onClose={() => setToast(null)} />}
    </>
  );
}

export default App;
