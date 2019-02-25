let CrewID = 0

class CrewMember {
  constructor(position, currentShip="Looking for a Rig") {
    this.position = position
    this.currentShip = currentShip
    this.id = ++CrewID
  }

  employed() {
    return (this.currentShip != "Looking for a Rig" ? true : false)
  }

  engageWarpDrive() {
    if (this.position === "Pilot" && this.employed() === true) {
      return this.currentShip.warpDrive = "engaged"
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.position === "Defender" && this.employed() === true) {
      return this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.employed() === true) {
      this.currentShip.phasersCharge = "charged"
    } else {
      return "had no effect"
    }
  }

}
