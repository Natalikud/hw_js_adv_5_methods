import Character from './character';

export default class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
// export const zombie1 = new Zombie('Zombie1','Zombie')
// console.log(zombie1)
