import { adminRouter } from './routes/adminRouter'
import express, { Application } from 'express'
import path from 'path'
import cron = require('node-cron')
import swaggerUi from 'swagger-ui-express'
// import * as syncModels from './models/SyncModels'

/** for sync models on database */
// syncModels.OnInit()

const app: Application = express()
app.use(express.static(path.join(__dirname, './../dist/public/')))

/*  -------- converting json -------- */  
app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* Middleware */
app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*' )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

/** for routes */
app.use('/api/admin', adminRouter)

/** for swagger */
// const documentAdmins = require('./documents/swagger/admin.json')
// app.use('/api-docs-admin', swaggerUi.serveFiles(documentAdmins), swaggerUi.setup(documentAdmins))

/** for socket */
// const server = app.listen(socketPort)
// const io = SIO.init(server)

app.listen(9000)
