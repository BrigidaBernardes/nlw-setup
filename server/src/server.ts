import Fastify from 'fastify'

const app = Fastify()

/**Metodos: GET, POST, PUT, PATCH, DELETE */


app.get('/', () => {
    return 'Hello NLW'
})

app.listen({
    port: 3333
})
