import { useState } from "react";
import { Button } from "../Button";
import { IconSave } from "../icons";
import { SelectField } from "../SelectField";
import { TextInput } from "../TextInput";
import "./book-form.style.css";

export function BookForm({ onSalvar, livroEditando }) {
  const [form, setForm] = useState(
    livroEditando ?? { titulo: "", autor: "", status: "" },
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form
      className="book-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSalvar(form);
      }}
    >
      <TextInput
        label="Título"
        name="titulo"
        placeholder="Digite o nome do livro"
        required
        value={form.titulo}
        onChange={handleChange}
      />
      <TextInput
        label="Autor"
        name="autor"
        value={form.autor}
        placeholder="Digite o nome do autor"
        required
        onChange={handleChange}
      />

      <SelectField
        label="Status"
        name="status"
        required
        value={form.status}
        onChange={handleChange}
        options={[
          { value: "quero-ler", label: "Quero Ler" },
          { value: "lendo", label: "Lendo" },
          { value: "concluidos", label: "Concluídos" },
        ]}
      />
      <Button type="submit" className="btn" icon={<IconSave />}>
        Salvar
      </Button>
    </form>
  );
}
