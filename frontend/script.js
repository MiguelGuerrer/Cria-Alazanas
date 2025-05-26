async function cargarCaballos() {
  const res = await fetch("/api/obtenerCaballos");
  const caballos = await res.json();
  mostrarCaballos(caballos);
  window.listaCaballos = caballos;
}

function mostrarCaballos(caballos) {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";
  caballos.forEach((caballo) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h2>${caballo.Nombre}</h2>
      <p><strong>Edad:</strong> ${caballo.Edad}</p>
      <p><strong>Padre:</strong> ${caballo.Padre}</p>
      <p><strong>Madre:</strong> ${caballo.Madre}</p>
      <p><strong>Lesiones:</strong> ${caballo.Lesiones}</p>
      <p><strong>Vacunas:</strong> ${caballo.Vacunas}</p>
      <p><strong>Rendimiento:</strong> ${caballo.Rendimiento}</p>
    `;
    contenedor.appendChild(div);
  });
}

function filtrarCaballos() {
  const query = document.getElementById("buscador").value.toLowerCase();
  const filtrados = window.listaCaballos.filter((caballo) =>
    caballo.Nombre.toLowerCase().includes(query)
  );
  mostrarCaballos(filtrados);
}

window.onload = cargarCaballos;
