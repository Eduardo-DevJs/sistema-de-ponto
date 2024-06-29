import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button({ onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 uppercase text-white font-bold text-xl p-3 rounded-md mt-5"
    >
      Entrar
    </button>
  );
}
