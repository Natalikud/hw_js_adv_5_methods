import Character from './character';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
// export const magician1 = new Magician('Magician1','Magician')
// console.log(magician1)
