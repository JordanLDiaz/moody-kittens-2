import { appState } from "../AppState.js"

class CatsService {
  pet(catName) {
    let cat = appState.cats.find(c => c.name == catName)
    // @ts-ignore
    cat.pets++
  }

}

export const catsService = new CatsService()