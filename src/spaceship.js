class Spaceship {
  constructor(name, crew, phasers, shields) {
//    debugger
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.crew = this.setCrewShip(crew)
    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
  }
  
  setCrewShip(crew){
    crew.forEach((el) => {
      el.currentShip = this
    })
    return crew
  }
}
