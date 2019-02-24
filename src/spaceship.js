class Spaceship {
  constructor(name,crew,phasers,shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.crew.length ? (this.docked = false) : (this.docked = true)
    this.phasersCharge = 'uncharged'
    this.assignShipToCrewMember()
  }
  assignShipToCrewMember() {
    this.crew.forEach(member => member.currentShip = this);
  }
}
