import { Dialog } from "../Dialog";
import { Button } from "../Button";
import "./confirma-dialog.style.css";

export function ConfirmDialog({
  isOpen,
  onConfirmar,
  onCancelar,
  mensagem,
  title,
}) {
  return (
    <Dialog isOpen={isOpen} onClose={onCancelar} title={title}>
      <div className="confirm-dialog">
        <p className="confirm-dialog-mensagem">{mensagem}</p>
        <div className="confirm-dialog-acoes">
          <Button className="btn-cancelar" onClick={onCancelar}>
            Cancelar
          </Button>
          <Button className="btn-confirmar" onClick={onConfirmar}>
            Excluir
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
