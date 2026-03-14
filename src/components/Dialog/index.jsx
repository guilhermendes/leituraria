import { useEffect, useRef } from "react";
import { IconClose } from "../icons";
import "./dialog.style.css";

export function Dialog({ isOpen, onClose, children, title }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    console.log("isOpen mudou:", isOpen);
    console.log("dialogRef.current:", dialogRef.current);

    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      if (dialogRef.current?.open) {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", onClose);

    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className="dialog">
      <div className="btn-close">
        <span className="dialog-title">{title}</span>
        <button onClick={onClose}>
          <IconClose />
        </button>
      </div>
      <div className="body">{children}</div>
    </dialog>
  );
}
