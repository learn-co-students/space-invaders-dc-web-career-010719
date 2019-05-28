let spaceshipId = 0
class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.id = ++spaceshipId
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.setCrew(crew)
    this.docked()
  }

  setCrew (crew) {
    this.crew = []
    if (crew) {
      crew.forEach((crew) => {
        crew.currentShip = this
        this.crew.push(crew)
      })
    }
  }

  // cloaked () {
  //   this.cloaked = !this.cloaked
  // }
  //
  // warpDrive () {
  //   if (this.warpDrive = 'disengaged') {
  //     this.warpDrive = 'engaged'
  //   } else {
  //     this.warpDrive = 'disengaged'
  //   }
  // }

  docked () {
    if (this.crew === undefined || this.crew.length == 0) {
      this.docked = true
    } else {
      this.docked = false
    }
  }

  // phasersCharge () {
  //     if (this.phasersCharge = 'uncharged') {
  //       this.phasersCharge = 'charged'
  //     } else {
  //       this.phasersCharge = 'uncharged'
  //     }
  // }
}
