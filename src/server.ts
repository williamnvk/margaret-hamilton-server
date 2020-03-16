import app from './app'
import * as dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on port ${process.env.SERVER_PORT}`)
)
