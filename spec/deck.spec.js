import Config from '../src/models/deck';

var Deck = new Config({ 'cards': [1, 2, 3, 4, 5, 6] });

describe('Deck Test', () => {
    it('Deck verif', () => {
        expect(Deck).toBeDefined();
    });
    it('Deck Shuffle', () => {
        expect(Deck.shuffle()).toBe(true);
    });
    it('Deck Not Shuffle', () => {
        expect(Deck.shuffle()).not.toBe(false);
    });
    it('Deck Draw', () => {
        expect(Deck.draw()).toBeDefined();
    });
    it('Deck getCardsCount', () => {
        expect(Deck.getCardsCount()).toEqual(5);
    });
});