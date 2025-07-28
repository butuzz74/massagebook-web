"use client";
import Image from "next/image";
import Link from "next/link";
import { useBookingStore } from "@/store/bookingStore";

const ServiceCardOneForServiceIdPage = ({
    image,
    title,
    description,
    duration,
    id,
}: {
    image: string;
    title: string;
    description: string;
    duration: number;
    id: string;
}) => {
    const { setBookingField, telegramId } = useBookingStore();

    const handleSaveService = (id: string, service: string) => {
        setBookingField("massageId", id);
        setBookingField("massage", service);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
            <div className="w-72 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 mt-3 mb-3">
                <div className="relative w-full h-44">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                    />
                </div>

                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {telegramId ? telegramId : "TelegramId is undefined"}
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600">{description}</p>
                    <div className="flex items-center text-sm text-gray-500 pt-2">
                        ⏱ {duration} мин
                    </div>
                </div>
            </div>

            <Link
                onClick={() => handleSaveService(id, title)}
                href={"/datetimeselection"}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
            >
                Записаться
            </Link>
        </main>
    );
};

export default ServiceCardOneForServiceIdPage;
