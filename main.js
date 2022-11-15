const color1 = document.querySelector("#color1")
const color2 = document.querySelector("#color2")
const color3 = document.querySelector("#color3")
const color4 = document.querySelector("#color4")
const color5= document.querySelector("#color5")

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")

const buttonSecret = document.querySelector("#buttonSecret")
const p = document.querySelector("#p")



button1.onclick = () => {
    if (color1.style.color === "pink") {
        color1.style.color = "black"
        color1.style.fontSize = "18px"
    } else {
        color1.style.color = "pink"
        color1.style.fontSize = "30px"
    }
}

button2.onclick = () => {
    if (color2.style.color === "purple") {
        color2.style.color = "black"
        color2.style.fontSize = "18px"
    } else {
        color2.style.color = "purple"
        color2.style.fontSize = "30px"
    }
}

button3.onclick = () => {
    if (color3.style.color === "blue") {
        color3.style.color = "black"
        color3.style.fontSize = "18px"
    } else {
        color3.style.color = "blue"
        color3.style.fontSize = "30px"
    }
}

button4.onclick = () => {
    if (color4.style.color === "green") {
        color4.style.color = "black"
        color4.style.fontSize = "18px"
    } else {
        color4.style.color = "green"
        color4.style.fontSize = "30px"
    }
}

button5.onclick = () => {
    if (color5.style.color === "red") {
        color5.style.color = "black"
        color5.style.fontSize = "18px"
    } else {
        color5.style.color = "red"
        color5.style.fontSize = "30px"
    }
}

buttonSecret.onclick = () => {
    if (p.style.color === "black") {
        p.style.color = "red"
        buttonSecret.innerHTML = "PACA PIRAÑA"
        p.innerHTML = "O ME MONTO O NO ME MONTO"
    } else {
        p.style.color = "black"
        buttonSecret.innerHTML = "VENENO"
        p.innerHTML = "DIGO"
    }
}