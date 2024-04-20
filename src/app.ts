import express, { Application, Request, Response } from 'express'
const app:Application = express()
import cors from 'cors'
import { studentRouters } from './app/modules/student/student.route'

//parsers
 app.use(express.json())
 app.use(cors())

 // application route
 app.use('/api/v1/students', studentRouters)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})



export default app;