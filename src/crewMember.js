class CrewMember {
  constructor(position, currentShip) {
    this.position = position
    if (!currentShip) {
      this.currentShip = "Looking for a Rig"
    }
  }
  
  engageWarpDrive() {
    if (!(this.currentShip instanceof Spaceship)) {
      return 'had no effect'
    } else if (this.position === "Pilot") {
      this.currentShip.warpDrive = 'engaged'
    }
  }
  
  setsInvisibility() {
    if (!(this.currentShip instanceof Spaceship)) {
      return 'had no effect'
    } else if (this.position === "Defender") {
      this.currentShip.cloaked = true
    }
  }
  
  chargePhasers() {
    if (!(this.currentShip instanceof Spaceship)) {
      return 'had no effect'
    } else if (this.position === 'Gunner'){
      this.currentShip.phasersCharge = 'charged'
    }
  }
  
}
