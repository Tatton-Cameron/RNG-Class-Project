const coin = document.getElementById("coin");

const numberGenteratorLowEnd = document.getElementById("low-end")
const numberGenteratorHighEnd = document.getElementById("high-end")
const generateNumberButton = document.getElementById("generate")
const generatedNumberResult = document.getElementById("generated-number-result")

const listToPickFrom = document.getElementById('list-to-pick-from')
const addToList = document.getElementById("add-to-list")
const selectFromListButton = document.getElementById("select-from-list-button")

coin.addEventListener("click",coinClick);
addToList.addEventListener("keyup", addItemToList);
selectFromListButton.addEventListener("click", selectItemFromList)
generateNumberButton.addEventListener("click", generateNumber)

function getRandomNumber(min, max) {
    let range = max - min
    let rand = Math.random() * range
    return Math.ceil(min + rand)
}

function coinClick() {
    document.getElementById('Coin-Results').style.display = 'flex';
    let roll = Math.floor(Math.random()*2) + 1;
    let tails = document.getElementById('Tails-results').innerHTML;
    let heads = document.getElementById('Heads-results').innerHTML;

    if (roll == 1) {
        coin.innerText = "Tails";
        tails++;
        document.getElementById('Tails-results').innerHTML = tails;
    } else {
        coin.innerText = "Heads";
        heads++;
        document.getElementById('Heads-results').innerHTML = heads;
    }   
}

function generateNumber() {
    let highEnd = numberGenteratorHighEnd.value
    let lowEnd = numberGenteratorLowEnd.value

    highEnd = Number(highEnd)
    lowEnd = Number(lowEnd)

    if (highEnd < lowEnd) {
        highEnd += 1
    }

    let result = getRandomNumber(lowEnd - 1, highEnd)
    generatedNumberResult.innerHTML = result
}

function addItemToList(event) {
    if (event.key === "Enter") {
        let value = event.target.value
        event.target.value = ""

        let listItem = document.createElement("li")
        listItem.innerHTML = value

        let removeButton = document.createElement("button")
        removeButton.innerHTML = "X"
        
        listItem.appendChild(removeButton)
        listToPickFrom.appendChild(listItem)

        removeButton.addEventListener("click", function() {
            listItem.remove()
        })
    }
}

function selectItemFromList() {
    for (item of listToPickFrom.childNodes) {
        item.style.backgroundColor = "#555555"
    }

    if (listToPickFrom.childNodes.length > 0) {
        let itemIndex = getRandomNumber(0, listToPickFrom.childNodes.length) - 1
        let pick = listToPickFrom.childNodes[itemIndex]
        pick.style.backgroundColor = "#77AA77"
    }
}

window.onload = function() {
    while (listToPickFrom.lastChild) {
        listToPickFrom.removeChild(listToPickFrom.lastChild)
    }
    console.dir(listToPickFrom)
}