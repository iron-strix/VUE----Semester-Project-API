import './utils/dotenv'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import logger from './utils/logger'
import router from './routes'
import { notFound, errorHandler } from './utils/errors'

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(morgan(process.env.MORGAN_LOG)) // logging
app.use(
  cors({
    origin: process.env.ORIGIN,
    exposedHeaders: [],
  }),
) // cross origin
app.use(helmet()) // secures headers
app.use(bodyParser.json()) // allows parsing body request

app.use(router)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>
  logger.info(`Application started at http://localhost:${process.env.PORT}`),
)
