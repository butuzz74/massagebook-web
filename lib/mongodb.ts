import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("❌ Ошибка: переменная окружения MONGODB_URI не задана!");
}
interface MongooseGlobal {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}
declare global {
    var mongoose: MongooseGlobal | undefined;
}

const cached = global.mongoose || { conn: null, promise: null };

global.mongoose = cached;

export async function connectDB(): Promise<Mongoose> {
    if (cached.conn) {
        console.log("✅ Используем кэшированное подключение к MongoDB");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("🔄 Подключение к MongoDB...");
        cached.promise = mongoose
            .connect(MONGODB_URI, {
                dbName: "test",
                bufferCommands: false,
                autoIndex: true,
            })
            .then((mongoose) => {
                console.log("✅ Успешное подключение к MongoDB!");
                return mongoose;
            })
            .catch((err) => {
                console.error("❌ Ошибка подключения к MongoDB:", err);
                throw err;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
