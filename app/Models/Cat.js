export class Cat {
  constructor(name, age = 0, imgUrl) {
    this.name = name
    this.age = age
    this.imgUrl = imgUrl || 'https://robohash.org/${name}?set=set4'
    this.pets = 0
    this.moodIndex = 0
    this.tolerance = Math.floor(Math.random() * 4)
  }




  // NOTE getter function that links to our c.Template in controller
  get Template() {
    return `
    <div class="col-12 col-md-3 p-3">
      <div class="bg-dark rounded shadow" onclick="app.catsController.pet('${this.name}')">
      <img class="w-100" src="${this.imgUrl}" alt="cat image">
      <div class="m-3 p-3 text-center bg-white rounded-top">
        <h3>${this.name}: Pets: ${this.pets}</h3>
      </div>
    </div>
  </div>
    `
  }




}
