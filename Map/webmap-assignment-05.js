
function map5() {
let newMap5 = L.map('mapid3').setView([41, -101], 4)
newMap5.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

let lightMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(newMap5)
let darkMap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png')
let soilMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')

let basemaps = {
   'Light basemap': lightMap,
   'Dark basemap': darkMap,
   'Soil basemap': soilMap
 }

 L.control.layers(basemaps).addTo(newMap5)

 function mapStyle (feature) {
   let population = feature.properties.POPULATION
   let color = 'blue'
   if (population < 6514000) {
     color = 'red'
   }
   let myStyle = {
     color: color,
     weight: 1,
     fillOpacity: 0.2
   }
   return mapStyle
 }
 function mapPopup (feature, layer) {
   let name = feature.properties.STATE_NAME
   let population = feature.properties.POPULATION
   layer.bindPopup('Median population of ' + name + ': ' + population + '<br>National average per state: ~6,514,000 million')
 }
  let mapOptions = {
    style: mapStyle,
    onEachFeature: mapPopup
  }
  L.geoJSON(stateDemographics, mapOptions).addTo(newMap5)
}
map5()
