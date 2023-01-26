let teamA = document.querySelectorAll('.team')[0]
let teamB = document.querySelectorAll('.team')[1]
let teamC = document.querySelectorAll('.team')[2]
let panelA =document.querySelectorAll('.panelTeam')[0]
let panelB =document.querySelectorAll('.panelTeam')[1]
let panelC =document.querySelectorAll('.panelTeam')[2]
let btnTeamA = document.querySelectorAll('.teamBtn')[0]
let btnTeamB = document.querySelectorAll('.teamBtn')[1]
let btnTeamC = document.querySelectorAll('.teamBtn')[2]

btnTeamA.addEventListener('click',()=>{
    panelA.classList.toggle('d-none')
    panelA.classList.toggle('flex')
})
btnTeamB.addEventListener('click',()=>{
    panelB.classList.toggle('d-none')
    panelB.classList.toggle('flex')
})
btnTeamC.addEventListener('click',()=>{
    panelC.classList.toggle('d-none')
    panelC.classList.toggle('flex')
})