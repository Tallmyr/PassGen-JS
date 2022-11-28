function updateRangeValue(newVal) {
    if (newVal <= 6) {
        document.getElementById("length_text").color = "red"
    }
    document.getElementById("length_text").innerHTML = newVal

}

function generatePassword(){
    let letters = document.getElementById("Letters").checked
    let numbers = document.getElementById("Numbers").checked
    let symbols = document.getElementById("Symbols").checked
    let similar = document.getElementById("Similar").checked

    let length = document.getElementById("length_slider").value

    

}
