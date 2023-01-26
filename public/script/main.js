let ball = document.querySelector('#ball')
let nav = document.querySelector('#navMenu')
let welcome = document.querySelectorAll('.welcome')[0]
let news = document.querySelectorAll('.news')[0]
let myNews = document.querySelectorAll('.myNews')[0]
let article = document.querySelectorAll('.article')
let newsLogo = document.querySelectorAll('.newsLogo')[0]

function enter() {
    nav.classList.toggle('d-none')
    welcome.classList.toggle('d-none')
    myNews.classList.toggle('d-none')
    news.classList.toggle('d-none')
    newsLogo.classList.toggle('d-none')
    for (let i = 0; i < article.length; i++) {
        const element = article[i];
        element.classList.toggle('d-none')
    }
}

ball.addEventListener('click',enter)
