import { connectDB } from "../../../lib/mongodb";
import Booking from "@/models/Booking";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        if (body) {
            await connectDB();
            const newBooking = await Booking.create({ ...body });
            return NextResponse.json(newBooking);
        }
    } catch (error) {
        return NextResponse.json(
            { message: "Ошибка сервера" },
            { status: 500 }
        );
    }
}
