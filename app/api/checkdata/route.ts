import { connectDB } from "../../../lib/mongodb";
import Booking from "@/models/Booking";
import WorkDay from "@/models/WorkDay";
import { NextResponse, NextRequest } from "next/server";

type TimeSlotS = { time: string; available: boolean; _id?: string };

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        if (body) {
            await connectDB();
            const newBooking = await Booking.create({ ...body });
            const workDay = await WorkDay.findOne({ date: body.date });
            if (workDay) {
                workDay.slots.forEach((slot: TimeSlotS) =>
                    slot.time === String(body.time)
                        ? (slot.available = false)
                        : (slot.available = slot.available)
                );
                await workDay.save();
            }

            return NextResponse.json(newBooking);
        }
    } catch (error) {
        return NextResponse.json(
            { message: "Ошибка сервера" },
            { status: 500 }
        );
    }
}
