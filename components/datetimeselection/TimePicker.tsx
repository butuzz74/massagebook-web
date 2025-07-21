"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/bookingStore";
import NavigationButton from "@/UIComponents/NavigationButton";

export default function TimePicker({
    availableTimes,
}: {
    availableTimes: string[];
}) {
    const [selected, setSelected] = useState<string>("");
    const { setBookingField } = useBookingStore();

    return (
        <div className="mt-4 flex flex-col items-center">
            {availableTimes.length !== 0 ? (
                <>
                    {" "}
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
                    <NavigationButton
                        text="Подтвердить"
                        customAction="/clientdata"
                    />{" "}
                </>
            ) : (
                <p className="mt-4 text-center text-red-600 bg-red-100 px-4 py-2 rounded-xl shadow-sm">
                    Извините, все время забронировано. Выберите другой день
                    пожалуйста!
                </p>
            )}
        </div>
    );
}
