import EventManager from "../eventManager";

export default class Game extends EventManager {
    constructor(config) {
        super(config);
        this.up = config.up;
        this.down = config.down;
    }

    getTurn() {
        return this.turn === this.up ? "up" : "down";
    }

    changeTurn() {
        this.turn = this.turn === this.up ? this.down : this.up;
    }

    proxy(side, action, payload) {
        if (side === "up") {
            this.up
            return this.up;
        } else if (side === "down") {
            this.down
            return this.down;
        } else {
            return false;
        }
    }
}