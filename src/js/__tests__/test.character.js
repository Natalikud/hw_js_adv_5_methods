import {
  Bowerman, Swordsman, Daemon, Magician, Undead, Zombie,
} from '../app';

test('testing levelUp method (ok)', () => {
  const player1 = new Bowerman('Bowerman1', 'Bowerman');
  const expected = {
    name: 'Bowerman1', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30,
  };
  player1.levelUp();
  expect(player1).toEqual(expected);
});

test('testing levelUp method (error)', () => {
  const player1 = new Bowerman('Bowerman1', 'Bowerman');
  player1.health = 0;
  expect(() => { player1.levelUp(); }).toThrow(new Error('Cannot levelUp. You are Gameover'));
});

test('testing damage method (ok)', () => {
  const player1 = new Bowerman('Bowerman1', 'Bowerman');
  const expected = {
    name: 'Bowerman1', type: 'Bowerman', health: 92.5, level: 1, attack: 25, defence: 25,
  };
  player1.damage(10);
  expect(player1).toEqual(expected);
});

test('testing damage method (error)', () => {
  const player1 = new Bowerman('Bowerman1', 'Bowerman');
  player1.health = 0;
  expect(() => { player1.damage(10); }).toThrow(new Error('Gameover!'));
});

// отдельные тесты на каждый класс
test('test create Bowerman geroe', () => {
  const expected = {
    name: 'Bowerman1', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const result = new Bowerman('Bowerman1', 'Bowerman');
  expect(result).toEqual(expected);
});

test('test create Swordsman geroe', () => {
  const expected = {
    name: 'Swordsman1', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const result = new Swordsman('Swordsman1', 'Swordsman');
  expect(result).toEqual(expected);
});

test('test create Daemon geroe', () => {
  const expected = {
    name: 'Daemon1', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  const result = new Daemon('Daemon1', 'Daemon');
  expect(result).toEqual(expected);
});

test('test create Magician geroe', () => {
  const expected = {
    name: 'Magician1', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  };
  const result = new Magician('Magician1', 'Magician');
  expect(result).toEqual(expected);
});

test('test create Undead geroe', () => {
  const expected = {
    name: 'Undead1', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  };
  const result = new Undead('Undead1', 'Undead');
  expect(result).toEqual(expected);
});

test('test create Zombie geroe', () => {
  const expected = {
    name: 'Zombie1', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const result = new Zombie('Zombie1', 'Zombie');
  expect(result).toEqual(expected);
});

// тест на все классы по массиву (сократить код, пример 2 класса)
test.each([
  [Bowerman, 'Bowerman1', 'Bowerman', {
    name: 'Bowerman1', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  [Swordsman, 'Swordsman1', 'Swordsman', {
    name: 'Swordsman1', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
])('test all classes creation with %s classname and %i player', (Classname, player, type, expected) => {
  const result = new Classname(player, type);
  expect(result).toEqual(expected);
});

// тест ошибок
test('test name error : text<2 ', () => {
  expect(() => { new Zombie('N', 'Zombie'); }).toThrow(new Error('Error: name - min-2, max-10 symbols'));
});

test('test name error : text>10 ', () => {
  expect(() => { new Zombie('Too much symbols', 'Zombie'); }).toThrow(new Error('Error: name - min-2, max-10 symbols'));
});

test('test type error', () => {
  expect(() => { new Zombie('Unknown', 'Unknown type'); }).toThrow(new Error('Error: unexpected type'));
});
