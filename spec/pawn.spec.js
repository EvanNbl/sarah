import Config from '../src/models/pawn'

var Pawn = new Config(100, 30, 30);
var Pawn2 = new Config(100, 30, 30);
var strikeBack = true;

describe('Pawn Test', () => {
    it('Pawn verif', () => {
        expect(Pawn).toBeDefined();
    });
    it('Pawn getLife', () => {
        expect(Pawn.getLife()).toEqual(100);
    });
    it('Pawn getStrength', () => {
        expect(Pawn.getStrength()).toEqual(30);
    });
    it('Pawn getDef', () => {
        expect(Pawn.getDef()).toEqual(30);
    });
    it('Pawn attack', () => {
        expect(Pawn.attack(Pawn2)).toEqual(40);
    });
    it('Pawn receiveAttack', () => {
        expect(Pawn.receiveAttack(Pawn2)).not.toBe(true);
    });
    it('Pawn receiveAttack', () => {
        expect(Pawn.receiveAttack(Pawn2, strikeBack)).toBe(true);
    });
});