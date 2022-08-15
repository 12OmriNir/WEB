const cities = ['Gaza', 'Lod', 'Nes Ziona', 'Arad', 'Afula', 'Beit Nir', 'Ramla']

const render = () => {

   const tag =  cities.map((city) => `<option value = ${city}>${city}</option>`).join("")
   
   document.getElementById('ToSelector').innerHTML = tag
   document.getElementById('FromSelector').innerHTML = tag
}


window.onload = () => {

    render()

    document.getElementById('submitButton').addEventListener('click', () => {
        let unFixedAreas = ''

        let hourInput = document.getElementById('hourInput')
        let dateInput = document.getElementById('dateInput')
        let amountInput = document.getElementById('amountInput')
        let fromSelector = document.getElementById('FromSelector')
        let toSelector = document.getElementById('ToSelector')

        console.log("test", fromSelector.options[fromSelector.selectedIndex].value)
        if(!hourInput.value){

            unFixedAreas += ' ,שדה שעה'
        }

        if(!dateInput.value){

            unFixedAreas += ' ,שדה תאריך'
        }

        console.log(amountInput.value)
        if(!(amountInput.value) || typeof(+amountInput.value)!=='number' || +amountInput.value > 6){

            unFixedAreas += ' ,שדה כמות אנשים'
        }

        if(unFixedAreas){
            alert(`בבקשה תקן את השדות הבאים: ${unFixedAreas}`)
        }
        else{
            localStorage.clear

            localStorage.setItem("From", fromSelector.options[fromSelector.selectedIndex].value)
            localStorage.setItem("To", toSelector.options[toSelector.selectedIndex].value)
            localStorage.setItem("date", dateInput.value)
            localStorage.setItem("hour", hourInput.value)
            localStorage.setItem("amount", amountInput.value)

            window.location.replace('InviteTaxi.html')
        }
    })
}