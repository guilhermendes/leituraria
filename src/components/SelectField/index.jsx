import "./select-field.style.css";

export function SelectField({ name, label, options = [], ...rest }) {
  return (
    <div className="select-wrapper">
      <label className="select-label" htmlFor={name}>
        {" "}
        {label}{" "}
      </label>
      <select className="select-input" id={name} name={name} {...rest}>
        <option value="">Selecione...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
