import Config from '../src/models/board';

var Board = new Config({ 'cards': [1, 2, 3, 4, 5, 6], 'limit': 7 });

describe('Board Test', () => {
    it('Board verif', () => {
        expect(Board).toBeDefined();
    });
    it('Board addCard', () => {
        expect(Board.addCard(675)).toBe(true);
    });
    it('Board removeCard', () => {
        expect(Board.removeCard(6)).toEqual([675]);
    });
    it('Board removeCard undefined', () => {
        expect(Board.removeCard()).toBe(false);
    });
    it('Board getAllCards', () => {
        expect(Board.getAllCards()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('Board getCardsCount', () => {
        expect(Board.getCardsCount()).toBe(6);
    });
});