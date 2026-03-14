import "./text-input.style.css";

export function TextInput({ label, ...props }) {
  return (
    <div className="text-input-wrapper">
      {label && <label className="text-input-label">{label}</label>}
      <input {...props} className="text-input" />
    </div>
  );
}
