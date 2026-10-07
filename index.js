import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import dbConnector from "./config/dbConfig.js"
import { PORT, NODE_ENV, CLIENT_URL } from "./config/config.js"

import userRouter from "./routes/user.routes.js"
import errorMiddleware from "./middlewares/errors.middleware.js"

console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);

const app = express()

app.set('trust proxy', 1)

const allowedOrigins = (CLIENT_URL || 'http://localhost:3000').split(',').map((url) => url.trim()).filter(Boolean)

app.use(cors({
    origin(origin, callback) {
        if(!origin || allowedOrigins.includes(origin)){
            return callback(null, true)
        }

        return callback(new Error(`CORS blocked for origin: ${origin}`))
    },
    credentials: true
}))

app.use(helmet())
app.use(morgan(NODE_ENV === 'production' ? 'combined' : 'dev'))

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: "Renta is working fine"
    })
})

app.use('/api/users', userRouter)

app.use(errorMiddleware)

const startServer = async ()=> {
    
    await dbConnector()
    app.listen(PORT, ()=>
        console.log(`The Renta server (${NODE_ENV || 'development'}) is running on port ${PORT}`)
    )
}

await startServer()