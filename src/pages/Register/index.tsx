import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FormEvent, useContext, useState } from "react";
import { auth } from "../../services/FirebaseConnection";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function PageRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleInfoUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(userCredential.user, {
          displayName: name,
        });

        handleInfoUser({
          name: name,
          email: email,
          uid: userCredential.user.uid,
        });

        navigate("/home", { replace: true });
        console.log("Cadastrado com sucesso!");
      })
      .catch((err) => {
        console.log(`Erro ao cadastrar: ${err}`);
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
              onChange={(e) => setName(e.target.value)}
              id="user"
              value={name}
              type="text"
            />
          </label>
        </div>
        <div>
          <label className="text-xl uppercase" htmlFor="email">
            Email
            <Input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
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
        <Link className="text-center mt-3" to={"/"}>
          {" "}
          Já possui uma conta?{" "}
          <span className="underline text-sky-500 font-medium">Faça login</span>
        </Link>
      </form>
    </div>
  );
}
