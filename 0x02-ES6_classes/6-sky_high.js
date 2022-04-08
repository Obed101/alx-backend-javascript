import Building from './5-building.js'

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors){
    this.sqft = sqft;
    this.floors = floors;
  }
  get sqft() {
    return this.sqft;
  }

  get floors() {
    return this.floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
