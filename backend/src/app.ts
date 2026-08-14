import express from "express";
import kartingRoutes from "./routes/karting.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/kartings", kartingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API del sistema de karting funcionando");
});

export default app;