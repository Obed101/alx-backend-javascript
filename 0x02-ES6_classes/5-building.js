export default abstract class Building {
  constructor(sqft) {
    this._sqft = Number(sqft)
  }

  set sqft(sqft) {
    this._sqft = Number(sqft);
  }

  get sqft() {
    return this._sqft;
  }

  abstract evacuationWarningMessage(): Person {
    throw(`Class extending Building must override evacuationWarningMessage`);
  }
}
