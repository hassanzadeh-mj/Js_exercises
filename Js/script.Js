const $ = document
const firstValue = $.querySelector(".C")
const secondValue = $.querySelector(".F")
const converter = $.querySelector("#converter")
const result = $.querySelector(".result")
const convertButton = $.querySelector(".convertButton")
const resetButton = $.querySelector(".resetButton")
const changeButton = $.querySelector(".changeButton")

function conver() {
    if (converter.value === "") {
        result.innerHTML = "error"
        result.style.color = "red"
    } else {
        if (firstValue.innerHTML === "°C") {
            const CtoF = (converter.value * 1.8) + 32
            result.style.color = "rgb(255, 255, 102)"
            result.innerHTML = CtoF + "°F"

        } else {
            const FtoC = (converter.value - 32) / 1.8
            result.style.color = "rgb(255, 255, 102)"
            result.innerHTML = FtoC + "°C"
        }
    }
}
function Reset() {
    converter.value = ""
    result.innerHTML = ""

}
function Change() {
    if (firstValue.innerHTML === "°C") {
        firstValue.innerHTML = "°F"
        secondValue.innerHTML = "°C"
        converter.setAttribute("placeholder", "°F")
        $.title = "°F to °C"

    } else {
        firstValue.innerHTML = "°C"
        secondValue.innerHTML = "°F"
        converter.setAttribute("placeholder", "°C")
        $.title = "°C to °F"
    }

}
convertButton.addEventListener("click", conver)
resetButton.addEventListener("click", Reset)
changeButton.addEventListener("click", Change)