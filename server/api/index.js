import express from 'express'
import cors from 'cors'
import * as Sentry from "@sentry/node"
import 'dotenv/config'
import '../config/instrument.js'
import connectDB from '../config/db.js'
import { clerkWebhooks } from '../controller/webhooks.js'


//initialize express
const app = express()

//connect to database
await connectDB()


//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res) => {
   res.send("API Working").status(200)
})
// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("This is a test error for Sentry!");
//   });

app.post('/webhooks', clerkWebhooks)



//port
const PORT = process.env.PORT || 3000

Sentry.setupExpressErrorHandler(app)

app.listen(PORT, () => {
   console.log(`server is running in the port ${PORT}`);
})