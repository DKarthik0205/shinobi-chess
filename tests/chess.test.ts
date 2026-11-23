import { describe, it, expect } from 'vitest';
import { Chess } from 'chess.js';
import { characterFor } from '../src/characters';
describe('character mapping', () => {
  it('maps all 32 starting pieces to a character', () => {
    const g = new Chess(); let n = 0;
    for (const row of g.board()) for (const p of row) if (p) { expect(characterFor(p.color, p.type).name).toBeTruthy(); n++; }
    expect(n).toBe(32);
  });
  it('uses the specified kings and queens', () => {
    expect(characterFor('w', 'k').name).toBe('Naruto'); expect(characterFor('b', 'k').name).toBe('Sasuke');
    expect(characterFor('w', 'q').name).toBe('Hinata'); expect(characterFor('b', 'q').name).toBe('Sakura');
  });
});
describe('chess rules', () => {
  it('rejects illegal moves', () => { expect(() => new Chess().move({ from: 'e2', to: 'e5' })).toThrow(); });
  it('detects fool’s mate', () => {
    const g = new Chess(); for (const m of ['f3', 'e5', 'g4', 'Qh4']) g.move(m);
    expect(g.isCheckmate()).toBe(true);
  });
  it('detects stalemate', () => { expect(new Chess('7k/5Q2/6K1/8/8/8/8/8 b - - 0 1').isStalemate()).toBe(true); });
  it('handles capture, en passant and castling', () => {
    const g = new Chess(); for (const m of ['e4', 'd5', 'exd5']) g.move(m);
    expect(g.history({ verbose: true })[2].captured).toBe('p');
    const e = new Chess(); for (const m of ['e4', 'a6', 'e5', 'd5']) e.move(m);
    expect(e.move('exd6').flags).toContain('e');
    const c = new Chess('r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1'); expect(c.moves()).toContain('O-O');
  });
  it('records capture once in history', () => {
    const g = new Chess(); for (const m of ['e4', 'd5', 'exd5']) g.move(m);
    expect(g.history().filter(m => m.includes('x')).length).toBe(1);
  });
});
