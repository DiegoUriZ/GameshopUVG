const filtrosOfertas = document.querySelectorAll(".filtro-oferta");
const tarjetasOferta = document.querySelectorAll(".oferta-card");
const contadorOfertas = document.querySelector("#ofertas-count");

filtrosOfertas.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    const categoria = filtro.dataset.filter;
    let ofertasVisibles = 0;

    filtrosOfertas.forEach((opcion) => {
      const estaActivo = opcion === filtro;
      opcion.classList.toggle("activo", estaActivo);
      opcion.setAttribute("aria-pressed", String(estaActivo));
    });

    tarjetasOferta.forEach((tarjeta) => {
      const coincide = categoria === "todas" || tarjeta.dataset.category.split(" ").includes(categoria);
      tarjeta.hidden = !coincide;
      if (coincide) ofertasVisibles += 1;
    });

    contadorOfertas.textContent = `${ofertasVisibles} ${ofertasVisibles === 1 ? "oferta disponible" : "ofertas disponibles"}`;
  });
});