import app from './app'
import { PORT } from './constants/index'

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
