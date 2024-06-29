import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ id, type, onChange, value }: InputProps) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      type={type}
      className="border w-full p-3 text-xl outline-none"
    />
  );
}
