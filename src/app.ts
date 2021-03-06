import express, { Application } from 'express'
import { TestController } from './controllers/test'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

class App {
  public app: Application
  public testController: TestController

  constructor() {
    this.app = express()
    this.setConfig()
    this.setMongoConfig()

    this.testController = new TestController(this.app)
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }))
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
    this.app.use(cors())
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise
    mongoose.connect(process.env.DATABASE_URL as string, {
      useNewUrlParser: true,
    })
  }
}

export default new App().app
