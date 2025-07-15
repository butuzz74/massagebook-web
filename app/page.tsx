"use client";

import { useState } from "react";

export default function Home() {
    const [username] = useState<string | null>(null);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Добро пожаловать!</h1>
            {username ? (
                <p>Привет, {username} 👋</p>
            ) : (
                <p>Ожидаем данные от Telegram...</p>
            )}
        </main>
    );
}
