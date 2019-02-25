class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (typeof this.currentShip !== 'object') {
      return 'had no effect'
    } else if (this.position === 'pilot') {
      this.currentShip.warpDrive = 'engaged'
    }
  }

  setsInvisibility() {
    if (typeof this.currentShip !== 'object') {
      return 'had no effect'
    } else if (this.position === 'defender') {
      this.currentShip.invisibility = true
    }
  }

  chargePhasers() {
    // if (this.position !== 'gunner') return
    console.log(this.position, this)
    if (typeof this.currentShip !== 'object') {
      return 'had no effect'
    } else if (this.position === 'gunner') {
      this.currentShip.phasersCharge = 'charged'
    }
  }
}
