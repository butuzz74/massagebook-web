import { connectDB } from "../../../lib/mongodb";
import Massage from "../../../models/Massage";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        return NextResponse.json({ message: "MongoDB подключена" });
        const massages = await Massage.find().select(
            "-__v -createdAt -updated"
        );

        if (massages.length === 0) {
            return NextResponse.json({
                products: [],
            });
        }

        return NextResponse.json({
            products: massages,
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Ошибка сервера" },
            { status: 500 }
        );
    }
}
