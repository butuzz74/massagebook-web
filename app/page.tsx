"use client";

import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

export default function Home() {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        WebApp.ready();
        const user = WebApp.initDataUnsafe?.user;
        if (user) {
            setUsername(user.first_name);
        }
    }, []);

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
