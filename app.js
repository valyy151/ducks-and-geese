function revealSection() {
    const firstQuestion = document.getElementById('firstQuestion');
    firstQuestion.style.display = "flex";
}

function hideHomepage() {
    const homepage = document.getElementById('homepage');
    homepage.style.display = "none";
}

const beginQuestionsButton = document.getElementById('beginQuestionsButton');
beginQuestionsButton.addEventListener('click', () => {
    revealSection(), hideHomepage();

})

function goToSecondQuestion() {
    firstQuestion.style.display = "none";
    const secondQuestion = document.getElementById('secondQuestion')
    secondQuestion.style.display = "flex"
}

const cityCountry = document.getElementById('cityCountry')
const firstButton = document.getElementById('firstButton')
firstButton.addEventListener('click', () => {
    if (cityCountry.value == 1 || cityCountry.value == 2)
        goToSecondQuestion();
    console.log(cityCountry.value)
    storage.valueOne = cityCountry.value
})

function goToThirdQuestion() {
    secondQuestion.style.display = "none"
    const thirdQuestion = document.getElementById('thirdQuestion')
    thirdQuestion.style.display = "flex"
}

const goofySophisticated = document.getElementById('goofySophisticated')
const secondButton = document.getElementById('secondButton')
secondButton.addEventListener('click', () => {
    if (goofySophisticated.value == 1 || goofySophisticated.value == 2)
        goToThirdQuestion();
    console.log(goofySophisticated.value)
    storage.valueTwo = goofySophisticated.value
})

function goToFinalSection() {
    thirdQuestion.style.display = "none"
    const finalSection = document.getElementById('finalSection')
    finalSection.style.display = "flex"
}

const thirdButton = document.getElementById('thirdButton')
const duckGeese = document.getElementById('duckGeese')

function chooseDuck() {
    const cityGoofyDuck = document.getElementById('cityGoofyDuck')
    const cityGoofyGoose = document.getElementById('cityGoofyGoose')
    const countryGoofyDuck = document.getElementById('countryGoofyDuck')
    const countryGoofyGoose = document.getElementById('countryGoofyGoose')
    const citySophisticatedDuck = document.getElementById('citySophisticatedDuck')
    const citySophisticatedGoose = document.getElementById('citySophisticatedGoose')
    const countrySophisticatedDuck = document.getElementById('countrySophisticatedDuck')
    const countrySophisticatedGoose = document.getElementById('countrySophisticatedGoose')
    if (storage.valueOne == 1 && storage.valueTwo == 1 && storage.valueThree == 1) {
        cityGoofyDuck.style.display = "flex"
    } else if (storage.valueOne == 1 && storage.valueTwo == 1 && storage.valueThree == 2) {
        cityGoofyGoose.style.display = "flex"
    } else if (storage.valueOne == 1 && storage.valueTwo == 2 && storage.valueThree == 1) {
        citySophisticatedDuck.style.display = "flex"
    } else if (storage.valueOne == 1 && storage.valueTwo == 2 && storage.valueThree == 2) {
        citySophisticatedGoose.style.display = "flex"
    } else if (storage.valueOne == 2 && storage.valueTwo == 2 && storage.valueThree == 2) {
        countrySophisticatedGoose.style.display = "flex"
    } else if (storage.valueOne == 2 && storage.valueTwo == 1 && storage.valueThree == 1) {
        countryGoofyDuck.style.display = "flex"
    } else if (storage.valueOne == 2 && storage.valueTwo == 2 && storage.valueThree == 1) {
        countrySophisticatedDuck.style.display = "flex"
    } else if (storage.valueOne == 2 && storage.valueTwo == 1 && storage.valueThree == 2) {
        countryGoofyGoose.style.display = "flex"
    }
}

thirdButton.addEventListener('click', () => {
    if (duckGeese.value == 1 || duckGeese.value == 2)
        goToFinalSection()
    console.log(duckGeese.value)
    storage.valueThree = duckGeese.value
    chooseDuck()
})

let storage = {}

const h3 = document.getElementById('h3s')

const homepageButton = document.getElementById('homepageButton')
homepageButton.addEventListener('click', () => location.reload(true))


const buttonG = document.getElementById('buttonG')
buttonG.addEventListener('click', () => window.scroll({ top: 1260 }))

const buttonF = document.getElementById('buttonF')
buttonF.addEventListener('click', () => window.scroll({ top: 2505 }))

const buttonH = document.getElementById('buttonH')
buttonH.addEventListener('click', () => window.scroll({ top: 3750 }))

const buttonJ = document.getElementById('buttonJ')
buttonJ.addEventListener('click', () => window.scroll({ top: 4720 }))

const hOne = document.getElementById('hOne')
hOne.addEventListener('click', () => location.reload(true))

const h1Boss = document.getElementById('h1Boss')
h1Boss.addEventListener('click', () => location.reload(true))