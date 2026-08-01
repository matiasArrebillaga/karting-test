import mongoose, { Schema } from "mongoose";

const kartingSchema = new Schema(
    {
        categoria: {
            type: String,
            required: true
        },

        modelo: {
            type: String,
            required: true
        },

        estado: {
            type: String,
            required: true,
            enum: [
                "Disponible",
                "Alquilado",
                "Fuera de servicio"
            ],
            default: "Disponible"
        },

        fechaAdqui: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Karting", kartingSchema);