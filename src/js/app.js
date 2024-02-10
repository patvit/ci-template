// TODO: write your code here
import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

import Character from './basic';

export class Bowerman extends Character {
}

export class Swordsman extends Character {
}

export class Magician extends Character {
}

export class Daemon extends Character {
}

export class Undead extends Character {
}

export class Zombie extends Character {
}

const bowerman = new Bowerman('Bow Man', 'Bowerman');
const swordsman = new Swordsman('Swords Man', 'Swordsman');
const magician = new Magician('MagiciaN', 'Magician');
const daemon = new Daemon('DaemoN', 'Daemon');
const undead = new Undead('UndeaD', 'Undead');
const zombie = new Zombie('ZombiE', 'Zombie');

console.log(Character.prototype);
console.log(Character.prototype.name);
