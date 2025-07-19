"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/store/bookingStore";
import { InputMask } from "@react-input/mask";

export default function ClientForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
    const { setBookingField, massage, massageId, date, time } =
        useBookingStore();
    console.log(massage, massageId, date, time);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("Введите имя");
            return;
        }

        if (!/^\+?\d{10,15}$/.test(phone)) {
            setError("Введите корректный номер телефона");
            return;
        }

        setError("");
        setBookingField("name", name);
        setBookingField("phone", phone);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-8 space-y-4 p-6 border-4 border-fuchsia-200 not-only:rounded-xl shadow bg-white"
        >
            <h2 className="text-2xl font-bold text-center">
                Введите ваши данные
            </h2>

            {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <InputMask
                mask="+375 (__) ___-__-__"
                replacement={{ _: /\d/ }}
                placeholder="+375 (__) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                onClick={() => router.push("/checkdata")}
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
                Подтвердить
            </button>
        </form>
    );
}
