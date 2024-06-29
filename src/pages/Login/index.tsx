import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { auth } from "../../services/FirebaseConnection";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PageLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logado com sucesso");
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(`Erro ao logar ${err}`);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogout}
        className="flex flex-col bg-white p-5 shadow-lg rounded-md"
      >
        <h2 className="font-bold mb-5 uppercase text-center text-2xl">
          System<span className="text-green-400">Points</span> ⏰
        </h2>
        <div>
          <label className="text-xl uppercase" htmlFor="user">
            Usuário
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="user"
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
              type="password"
            />
          </label>
        </div>
        <Button>Entrar</Button>
        <Link className="text-center mt-3" to={"/register"}>
          Não tem conta? <span className="underline">Cadastra-se</span>
        </Link>
      </form>
    </div>
  );
}
