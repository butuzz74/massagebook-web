"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "react-calendar/dist/Calendar.css";
import { useBookingStore } from "@/store/bookingStore";
import { isSameDay, format } from "date-fns";
import { WorkDay } from "@/types/types";
import TimePicker from "./TimePicker";

export default function DatePicker({ workdays }: { workdays: WorkDay[] }) {
    const [selected, setSelected] = useState<Date | undefined>();
    const [availableTimes, setAvailableTimes] = useState<string[] | null>(null);
    const { setBookingField } = useBookingStore();
    const availableDays = workdays.map((elem) => new Date(elem.date));

    const handleSelect = (date: Date | undefined) => {
        setSelected(date);
        if (date) {
            const formatted = date.toISOString().split("T")[0];
            setBookingField("date", formatted);
        }
    };
    const isDisabled = (date: Date) => {
        return !availableDays.some((availableDay) =>
            isSameDay(date, availableDay)
        );
    };

    const handleSetAvailableTimes = (date: string) => {
        const selectedDate = workdays.find((elem) => elem.date === date);
        const availableTimes = selectedDate?.slots.map((elem) => elem.time);
        if (availableTimes) {
            setBookingField("date", date);
            setAvailableTimes(availableTimes);
        }
    };

    useEffect(() => {
        if (selected) {
            const formatted = format(selected, "yyyy-MM-dd");
            handleSetAvailableTimes(formatted);
        }
    }, [selected]);

    return (
        <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Выберите дату:</h2>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={handleSelect}
                disabled={isDisabled}
                modifiersClassNames={{
                    disabled: "text-gray-300 cursor-not-allowed line-through",
                    selected: "bg-blue-600 text-white rounded-full",
                    today: "",
                }}
                modifiersStyles={{ today: {} }}
                className="bg-white rounded-xl shadow-md p-6"
            />
            {availableTimes && <TimePicker availableTimes={availableTimes} />}
        </div>
    );
}
