"use client";

import React from "react";
import { useBookingStore } from "@/store/bookingStore";
import NavigationButton from "@/UIComponents/NavigationButton";
import { BookingData } from "@/types/types";

export const BookingSummaryCard = ({
    handleSendBooking,
}: {
    handleSendBooking: (data: BookingData) => void;
}) => {
    const { massageId, massage, date, time, name, phone } = useBookingStore();
    console.log(massage, massageId, date, time, name, phone);
    return (
        <div className="max-w-md mx-auto mt-6 rounded-2xl shadow-md p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Подтверждение записи
            </h2>
            <div className="space-y-2 text-gray-700">
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
                customOnClick={() =>
                    handleSendBooking({
                        massageId,
                        massage,
                        date,
                        time,
                        name,
                        phone,
                    })
                }
            />
        </div>
    );
};
