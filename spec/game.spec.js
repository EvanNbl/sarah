import Config from '../src/models/game'

var Game = new Config({ "up": "player", "down": "player1" })

describe('Game Test', () => {
    it('Game verif', () => {
        expect(Game).toBeDefined();
    });
    it('Game getTurn', () => {
        expect(Game.getTurn()).toEqual("down");
    });
    it('Game changeTurn', () => {
        Game.changeTurn();
        expect(Game.getTurn()).toEqual('up');
    });
    it ('Game proxy', () => {
        expect(Game.proxy('up', 'getTurn')).toEqual('player');
    });
});