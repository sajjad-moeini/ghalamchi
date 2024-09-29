import React, { ChangeEvent } from "react";

interface Props {
  title: string;
  setTitle: (value: string) => void;
  removeErr: (value: boolean) => void;
  placeholder: string;
  type: "input" | "textArea";

}

const CustomInput: React.FC<Props> = ({ title, setTitle, placeholder, type,removeErr }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    removeErr(false)
  };

  return type === "textArea" ? (
    <textarea
      className="px-4 py-2 text-white bg-gray-500 rounded-lg w-full outline-blue-500"
      value={title}
      onChange={handleChange}
      placeholder={placeholder}
    />
  ) : (
    <input
      type="text"
      className="px-4 py-2 text-white bg-gray-500 rounded-lg w-full outline-blue-500"
      value={title}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
