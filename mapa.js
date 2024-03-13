// Inicialize o mapa com as coordenadas de União da Vitória
var mymap = L.map("map").setView([-26.2294, -51.0872], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Adicione um marcador
var marker = L.marker([-26.2294, -51.0872]).addTo(mymap);

// Adicione um popup ao marcador
marker
  .bindPopup("<b>União da Vitória, Paraná</b><br>Esta é a localização.")
  .openPopup();
