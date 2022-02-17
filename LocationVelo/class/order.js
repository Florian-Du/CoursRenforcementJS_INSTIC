import Timer from "./timer.js"

class Order {
    constructor(data){
        this.title = data.title
        this.stationName = data.stationName
        this.id = data.id
        this.sign = data.sign
        this.create()
    }

    create(){
        let ordersContainer = document.getElementById('orders')

        ordersContainer.insertAdjacentHTML('afterbegin', `
            <div class="card card-margin">
                <div class="card-header no-border">
                    <h5 class="card-title">${this.title}</h5>
                </div>
                <div class="card-body pt-0">
                    <div class="widget-49">
                        <div class="widget-49-title-wrapper">
                            <div class="widget-49-date-primary">
                                <span class="widget-49-date-day" id="time-${this.id}" data-info="expire"></span>
                            </div>
                            <div class="widget-49-meeting-info">
                                <span class="widget-49-pro-title">${this.stationName}</span>
                                <img src="${this.sign}" alt="signature">
                            </div>
                        </div>
                        <div class="widget-49-meeting-action">
                            <a href="#" class="btn btn-sm text-danger">annuler</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
        this.time = new Timer(20, this.id)
    }
}
export default Order