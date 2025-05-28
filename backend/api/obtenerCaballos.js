// api/obtenerCaballos.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    const caballos = data.records
    .map((r) => r.fields)
    .filter((c) => c.Nombre);

    res.json(caballos);
  } catch (error) {
    console.error("Error al obtener caballos:", error);
    res.status(500).json({ error: "Error al obtener caballos" });
  }
  
});

export default router;
