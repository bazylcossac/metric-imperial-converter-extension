const numberinput = document.getElementById("number-input")
const convert = document.getElementById("convert")
const darkmode = document.getElementById("darkmode")
let lenghtvalue = document.getElementById("lenght")
let volumevalue = document.getElementById("volume")
let massvalue = document.getElementById("mass")
const documentbody = document.body
let localnumber = localStorage.getItem("value")
console.log(localnumber)
let number = 0



convert.addEventListener("click", function() {

    number = numberinput.value
    console.log(number)
    localStorage.setItem("value", number)
    lenght()
    volume()
    mass()


})



if (localnumber) {
    number = localnumber
    lenght()
    volume()
    mass()

}



darkmode.addEventListener("click", darkmodee)





function lenght() {

    let meter = number / 3.281
    let feet = number * 3.281
    lenghtvalue.innerHTML = `${number} meters = ${feet.toFixed(4)} feet / ${number} feet = ${meter.toFixed(4) } meters`
}

function volume() {

    let liters = number / 0.264
    let gallons = number * 0.264
    volumevalue.innerHTML = `${number} liters = ${gallons.toFixed(4)} gallons / ${number} gallons = ${liters.toFixed(4) }liters`
}


function mass() {

    let kilograms = number / 2.204
    let pounds = number * 2.204
    massvalue.innerHTML = `${number} kilograms = ${pounds.toFixed(4)} pounds / ${number} pounds = ${kilograms.toFixed(4)}kilograms`
}

function darkmodee() {
    if (darkmode.textContent === "DARKMODE") {
        documentbody.classList.toggle("dark-mode")
        darkmode.textContent = "LIGHTMODE"
    } else {
        darkmode.textContent = "DARKMODE"
        documentbody.classList.toggle("dark-mode")
    }

}