export class Router {

    routes = {}

    add (routeName, page){
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle(){
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]

        // fetch é uma promessa e assicronismo e o then é quando vai retornar a informação
        // fetch = ir buscar a rota . then = quando concluir prometo que vou executar a função
        fetch(route)
        .then(data=> data.text() )
        .then( html => {
            document.querySelector('.app').innerHTML = html
        })

    }
}