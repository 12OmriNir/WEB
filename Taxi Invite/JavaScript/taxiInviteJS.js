const companies = 
[{Name:"מושיק", PicURl:"../taxies/moshik.jpg"},
{Name:"גו", PicURl:"../taxies/Joe.png"},
{Name:"ג'וני", PicURl:"../taxies/johnny.jpg"},
{Name:"מני", PicURl:"../taxies/meni.jpg"},
{Name:"רונן", PicURl:"../taxies/Ronen.jpg"}]

const createRows = (company) => {
    let price = Math.floor((Math.random()*50)+1)
    let amount = localStorage.getItem("amount")

    return `<div class="row col-12" style="margin-bottom: 30px;">
        <div class="col-12">
            <img src="${company.PicURl}" class="mx-auto d-block">
        </div>

        <div class="col-12">
            <h3 class="text-center">${company.Name}</h3>
        </div>

        <div class="col-12 text-center">
            <label>מחיר לאדם: ${price}</label>
        <div class="col-12">

        <div class="col-12 text-center">
            <label>מחיר כולל: ${price * amount}</label>
        <div class="col-12">
            <button class="btn btn-primary btn-lg btn-block class="mx-auto d-block" id ="orderButton">Invite Taxi</button>
        </div>
    </div>`
}

const addTaxies = () => {

    const tag = companies.map(copmany => createRows(copmany)).join('')

    document.getElementById('taxiContainer').innerHTML += tag
}

window.onload = () => {
    addTaxies()

    document.getElementById("orderButton").addEventListener('click', showOrderStatus())
}

