const optionsNum = [0, 1, 2]
const options = document.querySelectorAll('.option')
const optionsSvg = ['<svg class="big" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#3B4262" d="M45.06 12.22c-.642-8.096-9.734-7.269-9.734-7.269-3.837-6.765-9.832-1.865-9.832-1.865-4.606-6.63-10.38-.486-10.38-.486-9.957-1.074-9.571 7.066-9.571 7.066-.234 2.588 1.403 10.593 1.403 10.593-1.477-4.614-4.68-.784-4.68-.784-3.94 6.078-.975 9.405-.975 9.405 5.33 6.246 16.688 13.743 16.688 13.743 4.113 2.356 2.373 4.457 2.373 4.457l24.876-4.11.571-4.718c3.782-11.436-.739-26.032-.739-26.032z"/></svg>', '<svg class="big" xmlns="http://www.w3.org/2000/svg" width="49" height="59"><path fill="#3B4262" d="M47.125 11.832a2.922 2.922 0 00-1.232-.198c-.57.04-1.029.271-1.302.65-1.604 2.248-2.919 6.493-3.979 9.905-.486 1.577-1.14 3.688-1.612 4.69-.493-2.807.064-13.09.28-17.05l.003-.064c.15-2.751.17-3.234.138-3.446-.238-1.509-.843-2.5-1.799-2.943-.966-.45-2.22-.25-3.572.563-.677.41-.865 1.816-1.446 8.19l-.002.028c-.32 3.502-1.058 11.566-1.965 12.91-1.023-1.88-2.431-12.555-3.039-17.176-.425-3.236-.673-5.094-.84-5.655-.35-1.176-1.83-2.176-3.295-2.232-1.22-.06-2.22.56-2.698 1.638-.894.995-.578 4.292.41 12.102.47 3.718 1.44 11.395.83 12.257-1.219-.133-3.31-4.942-6.215-14.299-.816-2.62-1.068-3.408-1.318-3.753-.494-1.202-2.172-2.129-3.676-2.024a3.183 3.183 0 00-.377.049c-.787.156-2.584.881-2.2 4.226 1.06 4.637 2.213 8.041 3.331 11.346l.023.066c.669 1.98 1.302 3.85 1.89 5.925 1.385 4.9.846 7.94.84 7.975-.046.312-.143.503-.288.57a.556.556 0 01-.195.045c-.44.03-1.098-.26-1.437-.45-.776-1.482-4.636-8.544-8.134-9.524l-.126-.037-.127.012c-1.283.121-2.226.606-2.803 1.441-.914 1.32-.535 3.002-.444 3.34l.052.12c.028.051 2.834 5.165 3.268 7.544.374 2.04 2.311 4.25 3.869 6.026l.064.073c.508.58.946 1.083 1.292 1.548 4.519 4.713 11.665 8.677 11.723 8.71.892.657 1.387 1.293 1.44 1.84a.798.798 0 01-.16.58l-.155.162.988.96 18.853-1.324.804-3.684c2.486-10.402 1.967-19.272 1.958-19.33.01-.327.706-3.483 1.266-6.033l.017-.065c1.117-5.08 2.505-11.4 2.772-13.803.116-1.028-.542-1.972-1.675-2.401z"/></svg>', '<svg class="big" xmlns="http://www.w3.org/2000/svg" width="51" height="58"><path fill="#3B4262" d="M13.971 25.702l6.012-8.415c-2.499-.415-7.088-.507-10.846 3.235C3.212 26.421.812 39.163.312 42.248L15.37 57.24c2.711-.232 14.713-1.827 26.279-13.34.122-.249 2.94-2.321.636-4.614-1.1-1.095-2.919-1.074-4.042.044-.572.57-1.461.577-2.021.02-.56-.557-.552-1.443.02-2.012l4.087-4.069c2.076-2.067.119-5.555-2.78-4.717l-3.345 2.851c-.611.53-1.52.439-2.022-.14-.519-.597-.408-1.503.183-2.013 11.687-10.208 9.98-8.979 17.5-15.995 2.809-2.329-.725-6.447-3.493-4.09L28.182 25.45c-.529.448-1.34.457-1.86-.02-.601-.517-.615-1.262-.222-1.85L38.787 3.944c1.854-2.5-1.795-5.277-3.749-2.757L16.28 27.307c-.452.65-1.364.8-1.985.345a1.377 1.377 0 01-.323-1.95z"/></svg>']
const borderColors = ['hsl(349, 70%, 56%)', 'hsl(230, 89%, 65%)', 'hsl(40, 84%, 53%)']
let computerOption
let userOption
let result
let score = 0

options.forEach((option) => {
    option.addEventListener('click', (e) => {
        setTimeout(moveToNext, 200)
        setTimeout(generateComputerOption, 300)
        displayUserOption(e)
        setTimeout(checkResult, 500)
        setTimeout(showResult, 800)
        setTimeout(showWinner, 800)
        updateScore()
    })
})

const rulesButton = document.querySelector('.rules__btn')
const rulesClose = document.querySelector('.rules-close')
const rulesContainer = document.querySelector('.rules-c')
const resultContainer = document.querySelector('.result-container')
const chooseContainer = document.querySelector('.choose-container')
const computerOptionEl = document.querySelector('.computer-option')
const userOptionEl = document.querySelector('.user-option')
const resultEl = document.querySelector('.result')
const resultText = document.querySelector('.result-text')
const resultButton = document.querySelector('.result-button')
const scoreEl = document.querySelector('.score__number')

rulesContainer.addEventListener('click', hideRules)
rulesButton.addEventListener('click', showRules)
rulesClose.addEventListener('click', hideRules)
resultButton.addEventListener('click', backToStart)

function showRules() {
    rulesContainer.classList.add('active')
}

function hideRules() {
    rulesContainer.classList.remove('active')
}

function moveToNext() {
    resultContainer.classList.add('active')
    chooseContainer.classList.remove('active')
}

function backToStart() {
    resultContainer.classList.remove('active')
    chooseContainer.classList.add('active')
    resultEl.classList.remove('active')
    computerOptionEl.innerHTML = ''
    computerOptionEl.style.border = `20px solid transparent`
    computerOptionEl.style.backgroundColor = `hsl(214, 47%, 23%)`
    userOptionEl.classList.remove('slide')
    computerOptionEl.classList.remove('slide')
    computerOptionEl.classList.remove('winner')
    userOptionEl.classList.remove('winner')
}

function generateComputerOption() {
    computerOption = optionsNum[Math.floor(Math.random() * 3)]
    computerOptionEl.innerHTML = `${optionsSvg[computerOption]} <div class="winner-circle"></div>`
    computerOptionEl.style.border = `20px solid ${borderColors[computerOption]}`
    computerOptionEl.style.backgroundColor = `rgb(218, 218, 218)`
}

function displayUserOption(e) {
    userOption = e.target.getAttribute('data-name')
    userOptionEl.innerHTML = `${optionsSvg[userOption]} <div class="winner-circle"></div>`
    userOptionEl.style.border = `20px solid ${borderColors[userOption]}`
}

function checkResult() {
    if (computerOption == userOption) {
        result = 'draw'
    }
    if (userOption == 1 && computerOption == 0) {
        result = 'win'
    }
    if (userOption == 1 && computerOption == 2) {
        result = 'lost'
    }
    if (userOption == 2 && computerOption == 0) {
        result = 'lost'
    }
    if (userOption == 2 && computerOption == 1) {
        result = 'win'
    }
    if (userOption == 0 && computerOption == 1) {
        result = 'lost'
    }
    if (userOption == 0 && computerOption == 2) {
        result = 'win'
    }
}

function showResult() {
    resultEl.classList.add('active')
    userOptionEl.classList.add('slide')
    computerOptionEl.classList.add('slide')
    if (result == 'draw') {
        resultText.innerText = 'DRAW'
        resultButton.style.color = '#333'
    }
    if (result == 'win') {
        resultText.innerText = 'YOU WIN'
        resultButton.style.color = 'hsl(230, 89%, 65%)'
        score++
        updateScore()
    }
    if (result == 'lost') {
        resultText.innerText = 'YOU LOST'
        resultButton.style.color = 'hsl(349, 70%, 56%)'
        score--
        updateScore()
    }
}

function updateScore() {
    scoreEl.innerText = score
}

function showWinner() {
    if (result == 'win') {
        userOptionEl.classList.add('winner')
    }
    if (result == 'lost') {
        computerOptionEl.classList.add('winner')
    }
}
updateScore()