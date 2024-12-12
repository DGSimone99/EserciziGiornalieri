function createCell() {
    let cellTable = document.querySelector("#cellTable")

    for (let i = 1; i <= 76; i++) {
        let cell = document.createElement("div")
        cell.className = "cellNumber"
        cell.innerText = i
        cellTable.appendChild(cell)
    }
}
createCell()

let numbers = []
let numbersPlayer = []

function randomFunc() {
    let ranNum;
    do {
        ranNum = Math.floor(Math.random() * 76) + 1
    } while (numbers.includes(ranNum))
    numbers.push(ranNum)

    let cell = document.querySelectorAll("div.cellNumber")
    let cellPlayer = document.querySelectorAll(".cellPlayer")

    cell.forEach(element => {
        if (ranNum == element.innerText) {
            element.classList.add("selected")
        }
    });
    cellPlayer.forEach(element => {
        if (ranNum == element.innerText) {
            element.classList.add("selected")
        }
    })
}

function player() {
    let play = document.querySelector("#playerTable")

    for (let i = 1; i <= 24; i++) {
        let cellPlayer = document.createElement("div")
        cellPlayer.className = "cellPlayer"

        let ranNum;
        do {
            ranNum = Math.floor(Math.random() * 76) + 1
        } while (numbersPlayer.includes(ranNum))
        numbersPlayer.push(ranNum)

        cellPlayer.innerText = ranNum
        play.appendChild(cellPlayer)
    }
}

player()
