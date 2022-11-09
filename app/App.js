import { CatsController } from "./Controllers/CatsController.js";
import { Cat } from "./models/Cat.js"

class App {
  catsController = new CatsController()
}

window['app'] = new App()