class Die {
  constructor(numSides = 6) {
    this.numSides = numSides;
  }


  get sides() {
    console.log("Sides: " + this.numSides);
    return this.numSides;
  }

  roll() {
    return Math.ceil(Math.random() * this.numSides);
  }
}

module.exports = Die;
