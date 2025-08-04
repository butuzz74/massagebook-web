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

const handleSendBotBooking = async (data: BookingData) => {
    try {
        const res = await fetch(`${process.env.BOT_URL}/booking`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error("Ошибка при бронировании");
    } catch (err) {
        console.error(err);
    }
};

function CheckDataPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around px-4 py-8 bg-gradient-to-b from-white to-blue-50">
            <BookingSummaryCard
                handleSendBooking={handleSendBooking}
                handleSendBotBooking={handleSendBotBooking}
            />
        </main>
    );
}

export default CheckDataPage;
