"use client";
import Script from "next/script";
import { useEffect } from "react";
import { BookingData } from "@/types/types";
import { BookingSummaryCard } from "@/components/checkdata/BookingSummaryCard";

const handleSendBooking = async (data: BookingData) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkdata`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }
        );

        if (!res.ok) throw new Error("Ошибка при бронировании");
    } catch (err) {
        console.error(err);
    }
};
function CheckDataPage() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.expand(); // пример взаимодействия
        }
    }, []);
    return (
        <>
            <Script
                src="https://telegram.org/js/telegram-web-app.js"
                strategy="beforeInteractive"
            />
            <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
                <BookingSummaryCard handleSendBooking={handleSendBooking} />
            </main>
        </>
    );
}

export default CheckDataPage;
