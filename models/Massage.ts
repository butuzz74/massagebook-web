import { Schema, model, models } from "mongoose";

const massageSchema = new Schema(
    {
        title: String,
        description: String,
        image: String,
        duration: Number,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { collection: "massages" }
);

export default models.Massage || model("Massage", massageSchema);
