import { appState } from "../AppState.js"

class CatsService {
  createCat(catName) {
    const newCat = new Cat(catName)
  }
  pet(catName) {
    let cat = appState.cats.find(c => c.name == catName)
    // @ts-ignore
    cat.pets++
  }

}

export const catsService = new CatsService()