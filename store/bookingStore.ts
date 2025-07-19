import { create } from "zustand";
import { BookingStore } from "../types/types";

export const useBookingStore = create<BookingStore>((set) => ({
    massageId: undefined,
    massage: undefined,
    date: undefined,
    time: undefined,
    name: undefined,
    phone: undefined,
    setBookingField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),
    resetBooking: () =>
        set({
            massageId: undefined,
            massage: undefined,
            date: undefined,
            time: undefined,
            name: undefined,
            phone: undefined,
        }),
}));
