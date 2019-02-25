class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    // if (typeof this.currentShip !== 'object')
    //   return 'had no effect'

    // if (this.position !== 'pilot') return
    // this.currentShip.warpDrive = 'engaged'

    // console.log(this.position, this)
    // if (typeof this.currentShip !== 'object') {
    //   return 'had no effect'
    // } else if (this.position === 'pilot') {
    //   this.currentShip.warpDrive = 'engaged'
    // }

    return this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig' ?
    ( this.currentShip.warpDrive = 'engaged' ) : 'had no effect';
  }

  setsInvisibility() {
    // if (this.position !== 'defender') return

    // console.log(this.position, this)
    // if (typeof this.currentShip !== 'object') {
    //   return 'had no effect'
    // } else if (this.position === 'defender') {
    //   this.currentShip.invisibility = true
    // }

    return this.position === 'Defender' && this.currentShip !== 'Looking for a Rig' ?
    ( this.currentShip.cloaked = true ) :
    'had no effect';
  }

  chargePhasers() {
    // // if (this.position !== 'gunner') return
    // console.log(this.position, this)
    // if (typeof this.currentShip !== 'object') {
    //   return 'had no effect'
    // } else if (this.position === 'gunner') {
    //   this.currentShip.phasersCharge = 'charged'
    // }
    return this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig' ?
    ( this.currentShip.phasersCharge = 'charged' ) :
    'had no effect';
  }
}
