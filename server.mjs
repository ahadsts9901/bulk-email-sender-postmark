import express from 'express'
import cors from 'cors'
import bulkEmailRoute from './routes/bulk-email.mjs'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', bulkEmailRoute)

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`app running on port ${PORT}`))