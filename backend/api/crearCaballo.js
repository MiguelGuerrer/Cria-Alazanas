import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/api/crearCaballo", async (req, res) => {
  const caballo = req.body;

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields: caballo }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return res
        .status(500)
        .json({ error: "Error al guardar en Airtable", details: data });
    }

    res.status(200).json({ message: "Caballo agregado", id: data.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;
