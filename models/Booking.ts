import { Schema, model, models } from "mongoose";

const bookingSchema = new Schema(
    {
        massageId: { type: Schema.Types.ObjectId, ref: "Massage" },
        telegramId: Number,
        massage: String,
        date: String,
        time: String,
        name: String,
        phone: String,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { collection: "bookings" }
);

export default models.Booking || model("Booking", bookingSchema);
