"use client";

import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "react-calendar/dist/Calendar.css";
import { useBookingStore } from "@/store/bookingStore";
import { isSameDay, format, parseISO, isAfter } from "date-fns";
import { WorkDay } from "@/types/types";
import TimePicker from "./TimePicker";

export default function DatePicker({ workdays }: { workdays: WorkDay[] }) {
    const [availableDays, setAvailableDays] = useState<Date[] | null>(null);
    const [selected, setSelected] = useState<Date | undefined>();
    const [availableTimes, setAvailableTimes] = useState<string[] | null>(null);
    const { setBookingField } = useBookingStore();

    const handleSelect = (date: Date | undefined) => {
        setSelected(date);
        if (date) {
            const formatted = date.toISOString().split("T")[0];
            setBookingField("date", formatted);
        }
    };
    const isDisabled = (date: Date) => {
        if (availableDays) {
            return !availableDays.some((availableDay) =>
                isSameDay(date, availableDay)
            );
        } else {
            return true;
        }
    };

    const handleSetAvailableTimes = (date: string) => {
        const selectedDate = workdays.find((elem) => elem.date === date);
        const availableTimesSlots = selectedDate?.slots.filter(
            (elem) => elem.available === true
        );
        if (availableTimesSlots) {
            const availableTimes = availableTimesSlots.map((elem) => elem.time);
            if (availableTimes) {
                setBookingField("date", date);
                setAvailableTimes(availableTimes);
            }
        }
    };

    useEffect(() => {
        const today = new Date();
        const workDaysDate = workdays.map((elem) => elem.date);
        const actualDates = workDaysDate.filter((dateStr) => {
            const date = parseISO(dateStr);
            return isSameDay(date, today) || isAfter(date, today);
        });
        const actualFormatedDates = actualDates.map((elem) => new Date(elem));
        setAvailableDays(actualFormatedDates);
    }, []);

    useEffect(() => {
        if (selected) {
            const formatted = format(selected, "yyyy-MM-dd");
            handleSetAvailableTimes(formatted);
        }
    }, [selected]);

    return (
        <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Выберите дату:</h2>
            {availableDays ? (
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={handleSelect}
                    disabled={isDisabled}
                    modifiersClassNames={{
                        disabled:
                            "text-gray-300 cursor-not-allowed line-through",
                        selected: "bg-blue-600 text-white rounded-full",
                        today: "",
                    }}
                    modifiersStyles={{ today: {} }}
                    className="bg-white rounded-xl shadow-md p-6"
                />
            ) : (
                <p className="mt-4 text-center text-red-600 bg-red-100 px-4 py-2 rounded-xl shadow-sm">
                    Извините, рабочее расписание пока не составлено. Попробуйте
                    чуть позже пожалуйста!
                </p>
            )}
            {availableTimes && <TimePicker availableTimes={availableTimes} />}
        </div>
    );
}
