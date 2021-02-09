const gameBtn = document.querySelector('#gameBtn')
const settingBg = document.querySelector('.setting-bg')

const closeName = document.querySelector('#closeName')
const closeDifficulty = document.querySelector('#closeDifficulty')

const nextName = document.querySelector('#nextName')
const beforeDifficulty = document.querySelector('#beforeDifficulty')


const setName = document.querySelector('.setname')

const submitName = document.querySelector('#submitName')
let inputName = document.querySelector('#inputName')
let playerName = document.querySelector('.player-name')


const game = document.querySelector('.game')
const newGame = document.querySelector('.newGame')

const restartGame = document.querySelector('.restartGame')

function openSetting(){    
    settingBg.style.visibility = 'visible'
    settingBg.style.opacity = '1'
}
function closeSetting(){
    settingBg.style.visibility = 'hidden'
    settingBg.style.opacity = '0'
}

function openGame(){
    playerName.textContent = inputName.value
    inputName.value= ''
    endGame.style.display = 'none'
    play.style.display = 'flex'
    newGame.style.display = 'none'
    game.style.display = 'block'
    settingBg.style.visibility = 'hidden'
    settingBg.style.opacity = '0'
    initialQoute()
    currect.textContent = currectAnswers
    wrong.textContent = wrongAnswers
    remain.textContent = qoutes.length
    startTimer()
}
gameBtn.addEventListener('click', openSetting)
closeName.addEventListener('click', closeSetting)
submitName.addEventListener('click', openGame)

const qoutsContainer = document.getElementById('quote-container')
const endGame = document.getElementById('endGame')
const play = document.getElementById('play')
let message = document.getElementById('message')
let currect = document.getElementById('currect')
let wrong = document.getElementById('wrong')
let remain = document.getElementById('remain')
let currectAnswers = 0
let wrongAnswers = 0

let qoutes = [
    {qoute: "Have a Mice-Day! Best fishes!", owner: "petter"},
    {qoute: "See, we're all terrible people inside.", owner: "lois"},
    {qoute: "Home-Ec just got out, and I'm gonna go lick all their bowls.", owner: "meg"},
    {qoute: "We Irish, we have a deep sadness.", owner: "chris"},
    {qoute: "A bag of weed, a bag of weed / Everything is better with a bag of weed!", owner: "brian"},
    {qoute: "Oh, And Tell Cookie Monster Not To Phone Me Until He Finishes Rehab.", owner: "stewie"},
    {qoute: "To Learn More About Drugs, Visit Your Local Library. There's Probably A Guy Behind There Who Sells Drugs.", owner: "stewie"}, 
    {qoute: "I'm Gonna Buy A Cake When You're Dead", owner: "stewie"},
    {qoute: "Gosh, It’s Not Like The Internet To Go Crazy About Something Small And Stupid.", owner: "petter"},
    {qoute: "I May Be An Idiot, But There's One Thing I'm Not Sir, And That Is An Idiot.", owner: "petter"}
]


let random = Math.floor(Math.random()*qoutes.length)
let qouteDisplay = qoutes[random]

function initialQoute(){    
    qoutsContainer.textContent = `"${qouteDisplay.qoute}"`
    let removeQoute = qoutes.indexOf(qouteDisplay)
    qoutes.splice(removeQoute,1)
}

document.getElementById('answers').addEventListener('click', checkAnswer)


function checkAnswer(event){
    if (event.target !== event.currentTarget){ 
        if (event.target.id === qouteDisplay.owner){
            currectAnswers++
            currect.textContent = currectAnswers
        } else{
            wrongAnswers++
            wrong.textContent = wrongAnswers        
        }
        remain.textContent = qoutes.length
        randomQoute()
    }
}

function randomQoute(){          
    random = Math.floor(Math.random()*qoutes.length)
    if (qoutes.length>0){       
        qouteDisplay = qoutes[random]
        qoutsContainer.textContent = `"${qouteDisplay.qoute}"`
        let removeQoute = qoutes.indexOf(qouteDisplay)
        qoutes.splice(removeQoute,1)
        startTimer()       
    } else{       
        clearInterval(counter)
        if (currectAnswers <= 4){
            endGame.style.display = 'flex'
            play.style.display = 'none'
            message.textContent = 'you have much to learn..'
        } else if(currectAnswers > 4 && currectAnswers <= 8){
            endGame.style.display = 'flex'
            play.style.display = 'none'
            message.textContent = 'excellent! but you can do better..'
        } else {
            endGame.style.display = 'flex'
            play.style.display = 'none'
            message.textContent = 'you are just an addict!' 
        }
    }        
}

function startOver(){
    qoutes = [
        {qoute: "Have a Mice-Day! Best fishes!", owner: "petter"},
        {qoute: "See, we're all terrible people inside.", owner: "lois"},
        {qoute: "Home-Ec just got out, and I'm gonna go lick all their bowls.", owner: "meg"},
        {qoute: "We Irish, we have a deep sadness.", owner: "chris"},
        {qoute: "A bag of weed, a bag of weed / Everything is better with a bag of weed!", owner: "brian"},
        {qoute: "Oh, And Tell Cookie Monster Not To Phone Me Until He Finishes Rehab.", owner: "stewie"},
        {qoute: "To Learn More About Drugs, Visit Your Local Library. There's Probably A Guy Behind There Who Sells Drugs.", owner: "stewie"}, 
        {qoute: "I'm Gonna Buy A Cake When You're Dead", owner: "stewie"},
        {qoute: "Gosh, It’s Not Like The Internet To Go Crazy About Something Small And Stupid.", owner: "petter"},
        {qoute: "I May Be An Idiot, But There's One Thing I'm Not Sir, And That Is An Idiot.", owner: "petter"},

    ]
    initialQoute()
    currectAnswers = 0
    wrongAnswers = 0
    currect.textContent = currectAnswers
    wrong.textContent = wrongAnswers
    remain.textContent = qoutes.length
    startTimer() 
}

function startNewGame(){    
    newGame.style.display = 'flex'
    game.style.display = 'none'    
    startOver() 
}

document.getElementById('restart').addEventListener('click', startOver)
restartGame.addEventListener('click', startNewGame)


let timer = document.getElementById('timer')
let time 
timer.textContent = time
let counter = null
function startTimer(){
    clearInterval(counter)
    time = 10
    counter = setInterval(countDown, 1000)
}
function countDown(){
    if (time>0){
        time--
        timer.textContent = time
    } else {
        randomQoute()
        wrongAnswers++
        wrong.textContent = wrongAnswers 
        remain.textContent = qoutes.length 
    }
}










    



