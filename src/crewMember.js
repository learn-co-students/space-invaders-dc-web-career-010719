
class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }
  engageWarpDrive(){
    return this.currentShip != "Looking for a Rig" && this.position === 'Pilot' ? this.currentShip.warpDrive = 'engaged' : "had no effect"
  }
  setsInvisibility(){
    return this.currentShip != "Looking for a Rig" && this.position === 'Defender' ? this.currentShip.cloaked = true : "had no effect"
  }
  chargePhasers(){
    return this.currentShip != "Looking for a Rig" && this.position === 'Gunner' ? this.currentShip.phasersCharge = 'charged' : "had no effect"
  }
}
