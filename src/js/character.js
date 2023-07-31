export default class Character {
  constructor(name, type) {
    this.name = name;
    this.checkName();

    this.type = type;
    this.checkType();

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  checkName() {
    if ((this.name.length < 2) || (this.name.length > 10)) {
      throw new Error('Error: name - min-2, max-10 symbols');
    }
  }

  checkType() {
    const typeList = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (!typeList.includes(this.type)) {
      throw new Error('Error: unexpected type');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Cannot levelUp. You are Gameover');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Gameover!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
