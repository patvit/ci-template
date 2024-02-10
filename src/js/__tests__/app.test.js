import Character from '../basic';
import * as app from '../app';

test.each([app.Bowerman, app.Swordsman, app.Magician, app.Daemon, app.Undead, app.Zombie])(
  ('Sould be instance of class Character'),
  (CharacterClass) => {
    expect(CharacterClass.prototype).toBeInstanceOf(Character);
  },
);