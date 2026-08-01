import express from "express";
import kartingRoutes from "./routes/karting.routes";
const app = express();
app.use("/api/kartings", kartingRoutes);
// Middleware para recibir JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API del sistema de karting funcionando");
});

export default app;