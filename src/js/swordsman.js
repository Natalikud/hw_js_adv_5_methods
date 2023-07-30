import Character from './character';

export default class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
// export const swordsman1 = new Swordsman('Swordsman1','Swordsman')
// console.log(swordsman1)
