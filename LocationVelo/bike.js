import Map from './class/map.js'
import StationMarker from './class/station.js'

async function getApiData(url) {
    map.init(L)
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

const apiKey = "dee1a99085af190d99b3ebd9b448222bdf23b493"
const stationsnUrl = `https://api.jcdecaux.com/vls/v3/stations?contract=%city%&apiKey=${apiKey}`

const map = new Map(L)
map.init()

let searchButton = document.getElementById('sButton')
let city = document.getElementById('city')

searchButton.addEventListener('click', (e) => {
    let newUrl = stationsnUrl.replace('%city%', city.value)
    map.deleteMarkers()
    getApiData(newUrl).then(stations => {
        if (!stations.error) {
            map.setDefaultPos([stations[0].position.latitude, stations[0].position.longitude])
            stations.forEach(station => {
                let stationMarker = new StationMarker(station,'', map.getMap(), L)
                stationMarker.setContent(`
                    ${station.name}<br>
                    Vélos disponible : ${station.mainStands.availabilities.bikes} / ${station.mainStands.capacity}<br>
                    Actuellement ${station.status === "OPEN" ? '<span class="text-success">ouverte</span>' : '<span class="text-danger">fermée</span>'}<br>
                `)
                stationMarker.create()
            });
        } else {
            alert(stations.error)
        }
    })


    let reserveButtons = document.querySelectorAll('button[data-utility]')
    reserveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            let stationId = button.getAttribute('data-station-id')
            localStorage.setItem('stationId', stationId)
        })
    })

})

//console.log(stations)
var buttonNext = document.getElementById("carousel__button--next")
buttonNext.addEventListener('click', () => {
    var lesphotos = document.getElementsByClassName("carousel__photo")
    for (let i = 0; i < lesphotos.length; i++) {
        if (lesphotos[i].classList.contains("active") && i != 2) {
            lesphotos[i+1].setAttribute("class","carousel__photo active");
            lesphotos[i].setAttribute("class","carousel__photo");
            break;
        }else if(lesphotos[i].classList.contains("active") && i == 2) {
            lesphotos[0].setAttribute("class","carousel__photo active");
            lesphotos[i].setAttribute("class","carousel__photo");
            break;
        }else if(lesphotos[i].classList.contains("active")) {
            lesphotos[i+1].setAttribute("class","carousel__photo active");
            lesphotos[i].setAttribute("class","carousel__photo");
            break;
        }
    }
})

var buttonPrev = document.getElementById("carousel__button--prev")
buttonPrev.addEventListener('click', () => {
    var lesphotos = document.getElementsByClassName("carousel__photo")
    for (let i = 0; i < lesphotos.length; i++) {
        if (lesphotos[i].classList.contains("active") && i != 0) {
            lesphotos[i-1].setAttribute("class","carousel__photo active");
            lesphotos[i].setAttribute("class","carousel__photo");
            break;
        }else if(lesphotos[i].classList.contains("active") && i == 0) {
            lesphotos[2].setAttribute("class","carousel__photo active");
            lesphotos[i].setAttribute("class","carousel__photo");
            break;
        }else if(lesphotos[i].classList.contains("active")) {
            lesphotos[i-1].setAttribute("class","carousel__photo active");
            lesphotos[i].setAttribute("class","carousel__photo");
            break;
        }
    }
})
   