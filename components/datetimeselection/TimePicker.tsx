"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import { useRouter } from "next/navigation";
import NavigationButton from "@/UIComponents/NavigationButton";

export default function TimePicker({
    availableTimes,
}: {
    availableTimes: string[];
}) {
    const [selected, setSelected] = useState<string>("");
    const { setBookingField, massage, massageId } = useBookingStore();
    console.log(massage, massageId);
    const router = useRouter();

    return (
        <div className="mt-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold">Выберите время:</h2>
            <div className="grid grid-cols-3 gap-2 mt-4 mb-4">
                {availableTimes.map((t) => (
                    <button
                        key={t}
                        onClick={() => {
                            setBookingField("time", t);
                            setSelected(t);
                        }}
                        className={
                            t !== selected
                                ? "bg-cyan-500 text-white px-3 py-2 rounded-md"
                                : "bg-green-500 text-white px-3 py-2 rounded-md"
                        }
                    >
                        {t}
                    </button>
                ))}
            </div>
            <NavigationButton text="Подтвердить" customAction="/clientdata" />
        </div>
    );
}
