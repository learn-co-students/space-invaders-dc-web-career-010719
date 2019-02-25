let ShipID = 0

class Spaceship {
  constructor(name, crew, phasers=5, shields=4, cloaked=false, warpDrive="disengaged", docked=true, phasersCharge="uncharged") {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.crew.length === 0 ? this.docked = true : this.docked = false
    this.phasersCharge = phasersCharge
    this.id = ++ShipID

    this.crew.forEach(member => member.currentShip = this)
  }
}
