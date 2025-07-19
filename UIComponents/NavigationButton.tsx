"use client";
import { useRouter } from "next/navigation";
import { ButtonProps } from "../types/types";

const NavigationButton = ({
    text,
    redirect,
    back,
    customAction,
    customOnClick,
}: ButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (redirect) {
            router.push(redirect);
        } else if (back) {
            router.back();
        } else if (customAction) {
            router.push(`${customAction}`);
        } else if (customOnClick) {
            customOnClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition`}
        >
            {text}
        </button>
    );
};

export default NavigationButton;
