"use client";

import { configForHomePage } from "../config/configForHomePage";
import Image from "next/image";
import NavigationButton from "@/UIComponents/NavigationButton";
import WebApp from "@twa-dev/sdk";
import { useEffect, useRef } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { TelegramUserData } from "@/types/types";

export default function Home() {
    const { setBookingField } = useBookingStore();
    const webAppRef = useRef<typeof window.Telegram.WebApp | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            webAppRef.current = window.Telegram.WebApp;
            const telegramUserID = webAppRef.current.initDataUnsafe.user?.id;
            console.log(telegramUserID);
            if (telegramUserID) setBookingField("telegramId", telegramUserID);
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
            <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                {configForHomePage.title}
            </h1>

            <Image
                src={configForHomePage.image}
                width={220}
                height={275}
                alt="аватар"
                className="rounded-xl shadow-lg mb-6"
            />

            <p className="text-lg text-gray-700 text-center mb-6 max-w-md">
                {configForHomePage.description}
            </p>

            <NavigationButton
                text={configForHomePage.textForButton}
                customAction={configForHomePage.linkForButton}
            />
        </main>
    );
}
