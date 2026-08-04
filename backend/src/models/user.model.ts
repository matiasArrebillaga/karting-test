import mongoose, {Schema} from "mongoose";
const userSchema = new Schema (
    {
        nombre:{
            type: String, required: true
        },
        apellido:{
            type: String, required: true
        },
        email:{
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        rol :{
            type: String, enum: ["Administrador", "Empleado", "Cliente"],
            default: "Cliente"
        }
    },
    {
        timestamps : true
    }
)
export default mongoose.model("User", userSchema);