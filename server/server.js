import express from 'express'
import './config/instrument.js'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node" 
import { clerkWebhooks } from './controller/webhooks.js'


//initialize express
const app = express()

//connect to database

await connectDB()


//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req,res) => {
   res.send("API Working")
})
// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("This is a test error for Sentry!");
//   });

app.post('/webhooks' , clerkWebhooks)



//port
const PORT = process.env.PORT || 3000

Sentry.setupExpressErrorHandler(app)

app.listen(PORT ,() => {
   console.log(`server is running in the port ${PORT}`);
   
})