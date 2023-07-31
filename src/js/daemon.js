import Character from './character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
// export const daemon1 = new Daemon('Daemon1','Daemon')
// console.log(daemon1)
