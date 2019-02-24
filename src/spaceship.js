class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.crew = crew
    if (crew.length == 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'
    this.notifyCrew()
  }

  notifyCrew() {
    this.crew.forEach(function (crewMember) {
      crewMember.currentShip = this
    }.bind(this)
    )
  }

}
