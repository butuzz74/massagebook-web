"use client";
import { InputFormProps } from "@/types/types";

const InputForm = ({ type, placeholder, value, onCange }: InputFormProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onCange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};

export default InputForm;
