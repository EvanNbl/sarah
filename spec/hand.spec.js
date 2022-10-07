import Config from '../src/models/hand';

var Hand = new Config({ 'cards': [1, 2, 3, 4, 5, 6], 'limit': 7 });

describe('Hand Test', () => {
    it('Hand verif', () => {
        expect(Hand).toBeDefined();
    });
    it('Hand addCard', () => {
        expect(Hand.addCard(675)).toBe(true);
    });
    it('Hand removeCard', () => {
        expect(Hand.removeCard(6)).toEqual([675]);
    });
    it('Hand removeCard undefined', () => {
        expect(Hand.removeCard()).toBe(false);
    });
    it('Hand getAllCards', () => {
        expect(Hand.getAllCards()).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('Hand getCardsCount', () => {
        expect(Hand.getCardsCount()).toBe(6);
    });
});