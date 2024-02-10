import sum from '../basic';

// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });

import Character from '../basic';

test('To be name', () => {
  const result = new Character('Player', 'Bowerman');
  expect(result).toHaveProperty('name', 'Player');
});

test('To be Throw \'Имя должно быть не меньше 2 и не больше 10 символов\'', () => {
  expect(() => { const player = new Character('P', 'Bowerman'); }).toThrowError('Имя должно быть не меньше 2 и не больше 10 символов');
  expect(() => { const player = new Character('12345678901', 'Bowerman'); }).toThrowError('Имя должно быть не меньше 2 и не больше 10 символов');
});

test('To be Throw \'Неверный тип персонажа\'', () => {
  expect(() => { const player = new Character('Player', 'iii'); }).toThrowError('Неверный тип персонажа');
});

test('To be health = 100', () => {
  const result = new Character('Player', 'Bowerman');
  expect(result).toHaveProperty('health', 100);
});

test('To be level = 1', () => {
  const result = new Character('Player', 'Bowerman');
  expect(result).toHaveProperty('level', 1);
});

test.each([
  ['Bowerman', { type: 'Bowerman', attack: 25, defence: 25 }],
  ['Swordsman', { type: 'Swordsman', attack: 40, defence: 10 }],
  ['Magician', { type: 'Magician', attack: 10, defence: 40 }],
  ['Daemon', { type: 'Daemon', attack: 10, defence: 40 }],
  ['Undead', { type: 'Undead', attack: 25, defence: 25 }],
  ['Zombie', { type: 'Zombie', attack: 40, defence: 10 }],
])(
  ('Sould be the correct type and properties'),
  (characterType, expected) => {
    const result = new Character('Player', characterType);
    expect({ type: result.type, attack: result.attack, defence: result.defence }).toEqual(expected);
  },
);

test('To be Throw \'Нельзя повысить левел мертвого персонажа\'', () => {
  const player = new Character('Player', 'Bowerman');
  player.health = 0;
  expect(() => { player.levelUp(); }).toThrowError('Нельзя повысить левел мертвого персонажа');
});

test('To be the correct level up', () => {
  const player = new Character('Player', 'Bowerman');
  player.levelUp();
  expect(player.level).toBe(2);
  expect(player.health).toBe(100);
  expect(player.attack).toBe(30);
  expect(player.defence).toBe(30);
});

test('To be the correct damage', () => {
  const player = new Character('Player', 'Bowerman');
  player.damage(10);
  expect(player.health).toBe(92.5);
});

test('Do not cause damage when health is equal to zero', () => {
  const player = new Character('Player', 'Bowerman');
  player.health = 0;
  player.damage(10);
  expect(player.health).toBe(0);
});

test('With fatal damage, health should not be less than zero', () => {
  const player = new Character('Player', 'Bowerman');
  player.damage(200);
  expect(player.health).toBe(0);
});

test('Sould be levelUp method', () => {
  expect(Character.prototype).toHaveProperty('levelUp');
});

test('Sould be damage method', () => {
  expect(Character.prototype).toHaveProperty('damage');
});