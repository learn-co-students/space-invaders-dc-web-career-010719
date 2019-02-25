let crewMemberId = 0
class CrewMember {
  constructor (position, ship) {
    this.position = position
    this.id = ++crewMemberId
    this.setShip(ship)
  }

  setShip (ship) {
    if (ship) {
      this.currentShip = ship
      ship.crewMembers.push(this)
    } else {
      this.currentShip = 'Looking for a Rig'
    }
  }

  chargePhasers () {
    if (this.position === 'Gunner' && this.currentShip != 'Looking for a Rig') {
       this.currentShip.phasersCharge = 'charged'
    } else {
      return 'had no effect'
    }
  }

  engageWarpDrive () {
    if (this.position === 'Pilot' && this.currentShip != 'Looking for a Rig') {
       this.currentShip.warpDrive = 'engaged'
    } else {
      return 'had no effect'
    }
  }

  setsInvisibility () {
    if (this.position === 'Defender' && this.currentShip != 'Looking for a Rig') {
       this.currentShip.cloaked = true
    } else {
      return 'had no effect'
    }
  }
}
