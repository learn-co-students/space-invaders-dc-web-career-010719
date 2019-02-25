// class Spaceship {
//   constructor(name, crewMembers, phasers, shields) {
//     this.name = name
//     this.crewMembers = crewMembers
//     this.phasers = phasers
//     this.shields = shields
//     this.cloaked = false
//     this.warpDrive = "disengaged"
//     this.phasersCharge = 'uncharged'
//     crewMembers.length ? ( this.docked = false ) : ( this.docked = true );
//     this.addCrew()
//  }
//     addCrew() {
//       this.crewMembers.forEach( crewMember => ( crewMember.currentShip = this ) );
//  }
// }

class Spaceship {
  constructor( name, crew, phasers, shields ) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    crew.length ? ( this.docked = false ) : ( this.docked = true );
    this.notifyCrew();
  }

  notifyCrew() {
    this.crew.forEach( crewMember => ( crewMember.currentShip = this ) );
  }
}
