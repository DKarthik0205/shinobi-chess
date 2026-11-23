export type Color = 'w' | 'b';
export type PieceType = 'k' | 'q' | 'b' | 'n' | 'r' | 'p';
export const CHARACTERS: Record<Color, Record<PieceType, { name: string; ability: string }>> = {
  w: { k: { name: 'Naruto', ability: 'Rasengan' }, q: { name: 'Hinata', ability: 'Gentle Fist' }, b: { name: 'Minato', ability: 'Flying Raijin' }, n: { name: 'Kurama', ability: 'Tailed Beast Bomb' }, r: { name: 'Jiraiya', ability: 'Toad Rasengan' }, p: { name: 'Leaf shinobi', ability: 'Kunai Barrage' } },
  b: { k: { name: 'Sasuke', ability: 'Chidori' }, q: { name: 'Sakura', ability: 'Cherry Blossom Impact' }, b: { name: 'Kakashi', ability: 'Lightning Blade' }, n: { name: 'Orochimaru', ability: 'Striking Snakes' }, r: { name: 'Pain', ability: 'Shinra Tensei' }, p: { name: 'Rogue shinobi', ability: 'Shuriken Volley' } },
};
export const characterFor = (c: Color, t: PieceType) => CHARACTERS[c][t];
