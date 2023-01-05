import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/exploration', "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


const home = document.querySelector('.home')
const universe = document.querySelector('.universe')
const exploration = document.querySelector('.exploration')
const body = document.querySelector('body')

home.addEventListener('click', function() {
  body.classList.add('backgroundHome')
  body.classList.remove('backgroundUniverse')
  body.classList.remove('backgroundExploration')
})

universe.addEventListener('click', function() {
  body.classList.remove('backgroundHome')
  body.classList.add('backgroundUniverse')
  body.classList.remove('backgroundExploration')
})

exploration.addEventListener('click', function() {
  body.classList.remove('backgroundHome')
  body.classList.remove('backgroundUniverse')
  body.classList.add('backgroundExploration')
})