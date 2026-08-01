import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/database";

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);
const PORT = process.env.PORT || 3001;

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});