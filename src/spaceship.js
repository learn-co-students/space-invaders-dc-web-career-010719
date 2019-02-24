
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.docked = this.docked()
  }

  docked(){
    if (this.crew.map(i => i.position ).includes('Pilot') && this.crew.map(i => i.position ).includes('Defender') &&
    this.crew.map(i => i.position ).includes('Gunner')) {
      this.activateCrew()
      return false
    } else {
      return true
    }
  }

  activateCrew(){
    for (const i of this.crew) {
      i.currentShip = this
    }
  }
}
