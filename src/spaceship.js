

class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name//
    this.crew = crew
    if (crew.length){//
      this.docked = false//
    }else{//
      this.docked = true
    }
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false//
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.addcrew()
  }
  addcrew(){
    this.crew.forEach((crew)=> {crew.currentShip = this})
  }

}
