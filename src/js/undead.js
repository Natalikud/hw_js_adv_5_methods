import Character from './character';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
// export const undead1 = new Undead('Undead1','Undead')
