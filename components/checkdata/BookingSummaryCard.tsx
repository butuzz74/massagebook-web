"use client";

import React from "react";
import { useBookingStore } from "@/store/bookingStore";
import NavigationButton from "@/UIComponents/NavigationButton";
import { BookingData } from "@/types/types";

export const BookingSummaryCard = ({
    handleSendBooking,
    handleSendBotBooking,
}: {
    handleSendBooking: (data: BookingData) => void;
    handleSendBotBooking: (data: BookingData) => Promise<"Success" | undefined>;
}) => {
    const { massageId, massage, date, time, name, phone, telegramId } =
        useBookingStore();

    return (
        <div className="flex flex-col items-center max-w-md mx-auto mt-6 rounded-2xl shadow-md p-6 bg-white">
            <h2 className="text-xl font-semibold mb-8 text-gray-800">
                Подтверждение записи
            </h2>
            <div className="space-y-2 text-gray-700 mb-8">
                <div>
                    <span className="font-medium">Услуга: </span>
                    <span>{massage}</span>
                </div>
                <div>
                    <span className="font-medium">Дата: </span>
                    <span>{date}</span>
                </div>
                <div>
                    <span className="font-medium">Время: </span>
                    <span>{time}</span>
                </div>
                <div>
                    <span className="font-medium">Имя: </span>
                    <span>{name}</span>
                </div>
                <div>
                    <span className="font-medium">Телефон: </span>
                    <span>{phone}</span>
                </div>
            </div>
            <NavigationButton
                text="Отправить заказ"
                customOnClick={async () => {
                    handleSendBooking({
                        massageId,
                        massage,
                        date,
                        time,
                        name,
                        phone,
                        telegramId,
                    });
                    await handleSendBotBooking({
                        massage,
                        date,
                        time,
                        name,
                        phone,
                        telegramId,
                    });
                    if (
                        typeof window !== "undefined" &&
                        window.Telegram?.WebApp
                    )
                        window.Telegram.WebApp.close();
                }}
            />
        </div>
    );
};
