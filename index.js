
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const numberInputID = document.getElementById("number-input-id")

const convertBtn = document.getElementById("convert-btn")

const lengthID = document.getElementById("length-id")

const volumeId = document.getElementById("volume-id")


const massId = document.getElementById("mass-id")

const alertError = document.getElementById("alert-error")

convertBtn.addEventListener("click", function () {
    // 20 meters = 65.616 ft | 20 feet = 6.096 meters

    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters

    // 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

    const numberInputIdValue = Number(numberInputID.value)

    if (!isNaN(numberInputIdValue)) {
        const meterToFeet = (numberInputIdValue * 3.281).toFixed(3)
        const feetToMeter = (numberInputIdValue / 3.281).toFixed(3)

        lengthID.innerText = `${numberInputIdValue} meters = ${meterToFeet} feet | `
        lengthID.innerText += ` ${numberInputIdValue} feet = ${feetToMeter} meters`

        const literToGallon = (numberInputIdValue * 0.264).toFixed(3)
        const gallonToLiter = (numberInputIdValue / 0.264).toFixed(3)

        volumeId.innerHTML = `${numberInputIdValue} liters = ${literToGallon} gallons | `
        volumeId.innerHTML += ` ${numberInputIdValue} gallons = ${gallonToLiter} liters`

        const kilosToPounds = (numberInputIdValue * 2.204).toFixed(3)
        const poundsToKilos = (numberInputIdValue / 2.204).toFixed(3)

        massId.innerHTML = `${numberInputIdValue} kilos = ${kilosToPounds} pounds | `
        massId.innerHTML += ` ${numberInputIdValue} pounds = ${poundsToKilos} kilos`
    } else {
        alertError.innerHTML = `
        <div class="alert alert-danger" role="alert">
        Please enter a valid number
      </div>
        `
    }

})