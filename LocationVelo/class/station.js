import Form from "./form.js"

class StationMarker {
    constructor(station, content, map, layer) {
        this.station = station
        this.pos = [station.position.latitude, station.position.longitude]
        this.content = content
        this.map = map
        this.layer = layer
        this.available
        this.id = station.number
    }

    create() {
        let marker = this.layer.marker(this.pos)
        marker.addTo(this.map).on('click', (e) => {
            this.layer.popup()
                .setLatLng(this.pos)
                .setContent(this.content + `<button class="btn btn-primary" id="${this.id}" data-station-id="${this.id}" data-utility="reserve">Réserver</button>`)
                .openOn(this.map);

            let reserveButton = document.getElementById(`${this.id}`)

            reserveButton.addEventListener('click', (e) => {
                this.reserve(marker)
            })
        });
    }

    reserve(marker) {
        let title = 'Formulaire de reservation'
        let formObj = {
            firstName: {
              name: "firstName",
              placeholder: "Prénom"
            },
            lastName: {
              name: "lastName",
              placeholder: "Nom"
            }
        }
        const form = new Form(title, marker, formObj, this.station)
    }


    getPos() {
        return this.pos
    }

    setContent(content) {
        this.content = content
    }

    getContent() {
        return this.content
    }

    getId() {
        return this.id
    }
}
export default StationMarker