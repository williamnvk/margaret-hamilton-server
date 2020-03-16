import { Request, Response } from 'express'
import { MongooseDocument } from 'mongoose'
import { Test } from '../models/test'
import { WELCOME_MESSAGE } from '../constants'

export class TestService {
  public welcomeMessage(req: Request, res: Response) {
    res.status(200).send(WELCOME_MESSAGE)
  }

  public getAllTest(req: Request, res: Response) {
    Test.find({}, (error: Error, test: MongooseDocument) => {
      if (error) {
        res.send(error)
      }
      res.json(test)
    })
  }

  public addNewTest(req: Request, res: Response) {
    const newTest = new Test(req.body)
    newTest.save((error: Error, test: MongooseDocument) => {
      if (error) {
        res.send(error)
      }
      res.json(test)
    })
  }

  public deleteTest(req: Request, res: Response) {
    const testID = req.params.id
    Test.findByIdAndDelete(testID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error)
      }
      const message = deleted ? 'Deleted successfully' : 'Test not found :('
      res.send(message)
    })
  }

  //Updating a test

  public updateTest(req: Request, res: Response) {
    const testId = req.params.id
    Test.findByIdAndUpdate(testId, req.body, (error: Error, test: any) => {
      if (error) {
        res.send(error)
      }
      const message = test ? 'Updated successfully' : 'Test not found :('
      res.send(message)
    })
  }
}
