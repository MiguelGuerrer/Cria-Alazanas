import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import obtenerCaballos from "./api/obtenerCaballos.js";
import crearCaballo from "./api/crearCaballo.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de API
app.use("/api/obtenerCaballos", obtenerCaballos);
app.use("/api/crearCaballo", crearCaballo);

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("Servidor Cría Alazanas funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
