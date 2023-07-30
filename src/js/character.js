export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
    this.checkName();
    this.checkType();
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
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
      return;
    }

    throw new Error('Cannot levelUp. You are Gameover');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      return;
    }
    throw new Error('Gameover!');
  }
}
