// ==========================
// CREAR MAPA
// ==========================

const map = L.map('map');

// ==========================
// MAPA BASE
// ==========================

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);
// ==========================
// ESTACIONES LÍNEA D
// ==========================

const estaciones = [

    { nombre: "Catedral", coords: [-34.6075, -58.3743] },
    { nombre: "9 de Julio", coords: [-34.6043, -58.3806] },
    { nombre: "Tribunales", coords: [-34.6016, -58.3854] },
    { nombre: "Callao", coords: [-34.5992, -58.3920] },
    { nombre: "Facultad de Medicina", coords: [-34.5971, -58.3973] },
    { nombre: "Pueyrredón", coords: [-34.5942, -58.4027] },
    { nombre: "Agüero", coords: [-34.5911, -58.4088] },
    { nombre: "Bulnes", coords: [-34.5881, -58.4147] },
    { nombre: "Scalabrini Ortiz", coords: [-34.5848, -58.4208] },
    { nombre: "Plaza Italia", coords: [-34.5819, -58.4259] },
    { nombre: "Palermo", coords: [-34.5789, -58.4318] },
    { nombre: "Ministro Carranza", coords: [-34.5754, -58.4377] },
    { nombre: "Olleros", coords: [-34.5718, -58.4443] },
    { nombre: "José Hernández", coords: [-34.5678, -58.4516] },
    { nombre: "Juramento", coords: [-34.5638, -58.4587] },
    { nombre: "Congreso de Tucumán", coords: [-34.5568, -58.4656] }

];

// ==========================
// DIBUJAR LÍNEA
// ==========================

const recorrido = estaciones.map(estacion => estacion.coords);

const linea = L.polyline(recorrido, {
    color: "#0a8f3d",
    weight: 6,
    opacity: 1
}).addTo(map);

// ==========================
// MARCADORES
// ==========================

estaciones.forEach(estacion => {

    L.circleMarker(estacion.coords, {
        radius: 7,
        fillColor: "#0a8f3d",
        color: "#ffffff",
        weight: 2,
        fillOpacity: 1
    })
    .addTo(map)
    .bindPopup(`<strong>${estacion.nombre}</strong><br>Línea D`);

});

// ==========================
// AJUSTAR VISTA
// ==========================

map.fitBounds(linea.getBounds(), {
    padding: [40, 40]
});

// ==========================
// ACTUALIZAR TAMAÑO
// ==========================

window.addEventListener("load", () => {
    setTimeout(() => {
        map.invalidateSize();
    }, 300);
});
