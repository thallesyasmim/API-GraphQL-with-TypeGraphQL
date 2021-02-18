import { buildSchema } from 'type-graphql'
import 'reflect-metadata'
import './utils/connection'
import { ApolloServer } from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'

async function bootstrap() { // Initialization Function
    const schema = await buildSchema({
        resolvers: [CategoryResolver]
    })


    const server = new ApolloServer({ schema }) 

    server.listen(4100, () => console.info('Server is running'))
}

bootstrap()

