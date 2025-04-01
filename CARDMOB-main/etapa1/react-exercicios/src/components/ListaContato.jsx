import React, { useState } from "react";
import Contato from "./contato";

const ListaContato = () => {
  // Definição de estados com os nomes de variáveis padronizados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  // Estado para armazenar os contatos
  const [contatos, setContatos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Função para salvar o contato (adicionar ou editar)
  const handleSave = () => {
    if (nome.trim() === "" || email.trim() === "" || tel.trim() === "") {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    if (editingId !== null) {
      // Editar um contato existente
      setContatos(
        contatos.map((contato) =>
          contato.id === editingId
            ? { ...contato, nome, email, tel }
            : contato
        )
      );
      setEditingId(null); // Limpa o estado de edição
    } else {
      // Adicionar um novo contato
      setContatos([
        ...contatos,
        { id: Date.now(), nome, email, tel },
      ]);
    }

    // Limpa os campos de entrada após salvar
    setNome("");
    setEmail("");
    setTel("");
  };

  // Função para iniciar o processo de edição
  const handleEdit = (id) => {
    const contatoToEdit = contatos.find((contato) => contato.id === id);
    setNome(contatoToEdit.nome);
    setEmail(contatoToEdit.email);
    setTel(contatoToEdit.tel);
    setEditingId(id); // Define o id de edição
  };

  // Função para excluir um contato
  const handleDelete = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <div>
      <h2>Preencha seus dados</h2>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="Telefone"
      />

      <button onClick={handleSave}>
        {editingId !== null ? "Salvar alterações" : "Adicionar contato"}
      </button>
      <div>
    <h3>Lista de Contatos</h3>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            <p>Nome: {contato.nome}</p>
            <p>Email: {contato.email}</p>
            <p>Telefone: {contato.tel}</p>
            <button onClick={() => handleEdit(contato.id)}>Editar</button>
            <button onClick={() => handleDelete(contato.id)}>Excluir</button>
          </li>
        ))}
        <Contato/>
      </ul>
    </div>
    </div>
  );
};

export default ListaContato;
