import { ChangeEvent } from "react";

export type ButtonProps = {
    text: string;
    redirect?: string;
    back?: boolean;
    customAction?: string;
    customOnClick?: () => void;
};
export type ServiceType = {
    _id: string;
    title: string;
    description: string;
    image: string;
    duration: number;
};
export type ProductsType = {
    products: ServiceType[];
};

export type BookingData = {
    telegramId?: string;
    massageId?: string;
    massage?: string;
    date?: string;
    time?: string;
    name?: string;
    phone?: string;
};

export type BookingStore = BookingData & {
    setBookingField: (fielt: keyof BookingData, value: string | number) => void;
    resetBooking: () => void;
};
export type Slot = {
    time: string;
    available: boolean;
    _id?: string;
};

export type WorkDay = {
    _id?: string;
    date: string;
    slots: Slot[];
};

export type InputFormProps = {
    type: string;
    placeholder: string;
    value: string;
    onCange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type TelegramUserData = {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
};
