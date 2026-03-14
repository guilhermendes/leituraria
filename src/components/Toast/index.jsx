import { useEffect } from "react";
import "./toast.style.css";

export function Toast({ mensagem, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <span>{mensagem}</span>
    </div>
  );
}
