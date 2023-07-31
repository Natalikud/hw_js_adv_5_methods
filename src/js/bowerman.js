import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
// export const bowerman1 = new Bowerman('Bowerman1','Bowerman')
// console.log(bowerman1)
