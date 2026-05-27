// ==========================
// CREAR MAPA
// ==========================

const map = L.map('map').setView([-34.5905, -58.4100], 12);

// ==========================
// MAPA BASE
// ==========================

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '© OpenStreetMap'

}).addTo(map);

// ==========================
// RECORRIDO LINEA D
// ==========================

const lineaD = [

    [-34.5777, -58.3816], // Congreso de Tucumán
    [-34.5810, -58.3850], // Juramento
    [-34.5882, -58.3925], // José Hernández
    [-34.5947, -58.3971], // Olleros
    [-34.5994, -58.4014], // Ministro Carranza
    [-34.6037, -58.4038], // Palermo
    [-34.5889, -58.4102], // Plaza Italia
    [-34.5856, -58.4150], // Scalabrini Ortiz
    [-34.5817, -58.4210], // Bulnes
    [-34.5772, -58.4260], // Agüero
    [-34.5730, -58.4305], // Pueyrredón
    [-34.5684, -58.4370], // Facultad de Medicina
    [-34.5632, -58.4442], // Callao
    [-34.5585, -58.4505], // Tribunales
    [-34.5530, -58.4560], // 9 de Julio
    [-34.5477, -58.4620]  // Catedral

];

// ==========================
// DIBUJAR LINEA
// ==========================

L.polyline(lineaD, {

    color:'#0a8f3d',
    weight:8,
    opacity:0.9

}).addTo(map);

// ==========================
// ESTACIONES
// ==========================

const estaciones = [

    {
        nombre:"Congreso de Tucumán",
        coords:[-34.5777, -58.3816]
    },

    {
        nombre:"Juramento",
        coords:[-34.5810, -58.3850]
    },

    {
        nombre:"José Hernández",
        coords:[-34.5882, -58.3925]
    },

    {
        nombre:"Olleros",
        coords:[-34.5947, -58.3971]
    },

    {
        nombre:"Ministro Carranza",
        coords:[-34.5994, -58.4014]
    },

    {
        nombre:"Palermo",
        coords:[-34.6037, -58.4038]
    },

    {
        nombre:"Plaza Italia",
        coords:[-34.5889, -58.4102]
    },

    {
        nombre:"Scalabrini Ortiz",
        coords:[-34.5856, -58.4150]
    },

    {
        nombre:"Bulnes",
        coords:[-34.5817, -58.4210]
    },

    {
        nombre:"Agüero",
        coords:[-34.5772, -58.4260]
    },

    {
        nombre:"Pueyrredón",
        coords:[-34.5730, -58.4305]
    },

    {
        nombre:"Facultad de Medicina",
        coords:[-34.5684, -58.4370]
    },

    {
        nombre:"Callao",
        coords:[-34.5632, -58.4442]
    },

    {
        nombre:"Tribunales",
        coords:[-34.5585, -58.4505]
    },

    {
        nombre:"9 de Julio",
        coords:[-34.5530, -58.4560]
    },

    {
        nombre:"Catedral",
        coords:[-34.5477, -58.4620]
    }

];

// ==========================
// MARCADORES
// ==========================

estaciones.forEach(estacion => {

    L.circleMarker(estacion.coords, {

        radius:8,
        fillColor:"#0a8f3d",
        color:"#ffffff",
        weight:2,
        fillOpacity:1

    })

    .addTo(map)

    .bindPopup(`

        <h3>${estacion.nombre}</h3>

        <p>Estación Línea D</p>

    `);

});
