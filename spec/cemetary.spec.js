import Config from '../src/models/cemetary';

var Cemetary = new Config({ 'cards': [1, 2, 3, 4, 5, 6] });

describe('Cemetary Test', () => {
    it('Cemetary verif', () => {
        expect(Cemetary).toBeDefined();
    });
    it('Cemetary Shuffle', () => {
        expect(Cemetary.shuffle()).toBe(true);
    });
    it('Cemetary Not Shuffle', () => {
        expect(Cemetary.shuffle()).not.toBe(false);
    });
    it('Cemetary Draw', () => {
        expect(Cemetary.draw()).toBeDefined();
    });
    it('Cemetary getCardsCount', () => {
        expect(Cemetary.getCardsCount()).toEqual(5);
    });
});