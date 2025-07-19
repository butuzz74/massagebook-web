import { connectDB } from "../../../../lib/mongodb";
import Massage from "@/models/Massage";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const massage = await Massage.findById(id).select(
            "-__v -createdAt -updated"
        );
        if (!massage) {
            return NextResponse.json(
                { message: "Услуга не найдена" },
                { status: 404 }
            );
        }
        return NextResponse.json(massage);
    } catch (error) {
        return NextResponse.json(
            { message: "Ошибка сервера" },
            { status: 500 }
        );
    }
}
