import { Router } from "./router.js"

const router = new Router()

router.add("/" , "/pages/home.html")
router.add("/univer" , "/pages/univer.html")
router.add("/explor" , "/pages/explor.html")
router.add(404 , "/pages/404.html")

router.handle()

// serve para retornar ou passar as paginas pelas setas do navegador <- ->
window.onpopstate = () => router.handle()


window.route =() => router.route()