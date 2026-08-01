import express from "express";

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("API del sistema de karting funcionando");
});

export default app;