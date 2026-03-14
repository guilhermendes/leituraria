import "./logo.style.css";
import logoImg from "../../assets/image/logo-leituraria.png";

export function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo da Leituraria" width="200px" />
    </div>
  );
}
