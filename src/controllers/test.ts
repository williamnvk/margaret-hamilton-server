import { TestService } from '../services/test'
import { Application } from 'express'

export class TestController {
  private testService: TestService

  constructor(private app: Application) {
    this.testService = new TestService()
    this.routes()
  }

  public routes() {
    this.app.route('/').get(this.testService.welcomeMessage)

    // tests
    this.app.route('/tests').get(this.testService.getAllTest)
    this.app.route('/test').post(this.testService.addNewTest)
    this.app
      .route('/test/:id')
      .delete(this.testService.deleteTest)
      .put(this.testService.updateTest)
  }
}
