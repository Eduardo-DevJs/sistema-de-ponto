
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";

export default function PageRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogout = async (e: FormEvent) => {

  // };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-col bg-white p-5 shadow-lg rounded-md">
        <h2 className="font-bold mb-5 uppercase text-center text-2xl">
          System<span className="text-green-400">Points</span> ⏰
        </h2>
        <div>
          <label className="text-xl uppercase" htmlFor="user">
            Usuário
            <Input
              onChange={(e) => setName(e.target.value)}
              id="user"
              value={name}
              type="text"
            />
          </label>
        </div>
        <div>
          <label className="text-xl uppercase" htmlFor="user">
            Email
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="user"
              value={email}
              type="text"
            />
          </label>
        </div>
        <div>
          <label className="text-xl uppercase" htmlFor="password">
            Senha
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              type="password"
            />
          </label>
        </div>
        <Button>Cadastrar</Button>

      </form>
    </div>
  );
}
