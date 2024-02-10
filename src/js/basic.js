export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) throw new Error('Имя должно быть не меньше 2 и не больше 10 символов');
    else this.name = name;

    class CharacterType {
      constructor(characterType, attack, defence) {
        this.characterType = characterType;
        this.attack = attack;
        this.defence = defence;
      }
    }

    const characterTypes = [];
    characterTypes.push(new CharacterType('Bowerman', 25, 25));
    characterTypes.push(new CharacterType('Swordsman', 40, 10));
    characterTypes.push(new CharacterType('Magician', 10, 40));
    characterTypes.push(new CharacterType('Daemon', 10, 40));
    characterTypes.push(new CharacterType('Undead', 25, 25));
    characterTypes.push(new CharacterType('Zombie', 40, 10));

    const characterType = characterTypes.find((el) => el.characterType === type);
    if (!characterType) throw new Error('Неверный тип персонажа');
    else {
      this.type = type;
      this.attack = characterType.attack;
      this.defence = characterType.defence;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) throw new Error('Нельзя повысить левел мертвого персонажа');
    else {
      this.level += 1;
      this.health = 100;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
    }
  }

  damage(points) {
    if (this.health !== 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) this.health = 0;
    }
  }
}