import express from "express";
import kartingRoutes from "./routes/karting.routes";

const app = express();

app.use(express.json());

app.use("/api/kartings", kartingRoutes);

app.get("/", (req, res) => {
    res.send("API del sistema de karting funcionando");
});

export default app;