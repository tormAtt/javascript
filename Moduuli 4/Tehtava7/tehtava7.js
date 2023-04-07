'use strict';

const form = document.querySelector("#form");
const pLinegroup = L.layerGroup()

let map = L.map('map').setView([60.1785553, 24.8786212], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const apiAddress = 'https://dev-api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

function getRoute(osoite){

  const GQLQuery = `{
  plan(
    from: {lat: ${osoite.lat}, lon: ${osoite.lon}}
    to: {lat: 60.224420, lon: 24.758230}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;


  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "digitransit-subscription-key": "c6de4941d95147f19692d27ef05d7824",
    },
    body: JSON.stringify({query: GQLQuery}),
  };

  fetch(apiAddress, fetchOptions).then(function(response){return response.json();}).then(function(result){
    startAndEnd(result.data.plan.itineraries[0].legs);
    const googleEncodedRoute = result.data.plan.itineraries[0].legs;
    emptyPreviousSearch()
    for(let i = 0; i < googleEncodedRoute.length; i++) {
      let color = '';
            switch (googleEncodedRoute[i].mode) {
                case 'WALK':
                    color = 'green';
                    break;
                case 'BUS':
                    color = 'red';
                    break;
                case 'RAIL':
                    color = 'cyan'
                    break;
                case 'TRAM':
                    color = 'magenta'
                    break;
                default:
                    color = 'blue';
                    break;
            }
      const route = (googleEncodedRoute[i].legGeometry.points);
      const pObjects = L.Polyline.fromEncoded(route).getLatLngs();
      L.polyline(pObjects).setStyle({
                color
            }).addTo(pLinegroup);
      pLinegroup.addLayer(L.polyline(pObjects, {color: color}))
      pLinegroup.addTo(map)
      }
    map.fitBounds([[osoite.lat, osoite.lon], [60.224420, 24.758230]]);
  }).catch(function(error) {
    console.log(error.message)
  });

}

function emptyPreviousSearch() {
  for(let i in map._layers) {
        if(map._layers[i]._path != undefined) {
            try {
                map.removeLayer(map._layers[i]);
            }
            catch(e) {
                console.log("Ongelma: " + e + map._layers[i]);
            }
        }
    }
}


function zeroToFront(luku) {
  if(luku < 10) {
    return "0" + luku;
  } else {
    return luku;
  }
}

function startAndEnd(reitti) {
    document.getElementById("alku").innerHTML = "Alkuaika: ";
    document.getElementById("loppu").innerHTML = "Loppuaika: ";

    const alkuAika = new Date(reitti[0].startTime);
    const loppuAika = new Date(reitti[reitti.length-1].endTime);
    const alkuAikaLopullinen = `${alkuAika.getHours()}:${zeroToFront(alkuAika.getMinutes())}:${zeroToFront(alkuAika.getSeconds())}`;
    const loppuAikaLopullinen = `${loppuAika.getHours()}:${zeroToFront(loppuAika.getMinutes())}:${zeroToFront(loppuAika.getSeconds())}`;

    document.getElementById("alku").appendChild(document.createTextNode(alkuAikaLopullinen.toString()));
    document.getElementById("loppu").appendChild(document.createTextNode(loppuAikaLopullinen.toString()));
}

function Coordinates(json) {
  const lat = json.features[0].geometry.coordinates[1];
  const lon = json.features[0].geometry.coordinates[0];
  const osoite = {
    lat: lat,
    lon: lon,
  }
  getRoute(osoite);
}

async function getAddress(evt) {
  evt.preventDefault();
  const haku = document.querySelector("input[name=h]").value.replace(" ", "");
  try {
    const response = await fetch(`http://dev-api.digitransit.fi/geocoding/v1/search?text=${haku}&focus.point.lat=60.224420&focus.point.lon=24.758230&size=1&digitransit-subscription-key=c6de4941d95147f19692d27ef05d7824`);
    const json = await response.json();
    Coordinates(json);
  } catch(error) {
    console.log(error.message);
  }
}

form.addEventListener("submit", getAddress)


