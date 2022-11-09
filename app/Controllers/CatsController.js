import { appState } from "../AppState.js";
import { Cat } from "../models/Cat.js";
import { catsService } from "../Services/CatsService.js";

function _drawCats() {
  let cats = appState.cats
  let template = ''
  cats.forEach(c => template += c.Template)
  // @ts-ignore
  document.getElementById('cats').innerHTML = template
}

export class CatsController {
  constructor() {
    _drawCats()
  }

  pet(catName) {
    console.log('clicked', catName)
    catsService.pet(catName)
    _drawCats()
  }

  createCat() {
    window.event.preventDefault()
    const form = window.event.target
    catsService.createCat(form.catname.value)
  }
}