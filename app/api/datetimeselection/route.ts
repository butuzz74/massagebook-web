import { connectDB } from "../../../lib/mongodb";
import WorkDay from "@/models/WorkDay";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const workdays = await WorkDay.find().select(
            "-__v -createdAt -updated"
        );

        if (workdays.length === 0) {
            return NextResponse.json(
                { message: `Рабочих дней не найдено` },
                { status: 404 }
            );
        }

        return NextResponse.json(workdays);
    } catch (error) {
        return NextResponse.json(
            { message: "Ошибка сервера" },
            { status: 500 }
        );
    }
}
