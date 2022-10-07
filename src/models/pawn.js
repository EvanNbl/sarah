import eventmanager from '../eventManager.js';

export default class Pawn extends eventmanager {
    constructor(life, strength, def) {
        super(life, strength, def);
        this.life = life
        this.strength = strength
        this.def = def
    }

    getLife() {
        return this.life
    }

    getStrength() {
        return this.strength
    }

    getDef() {
        return this.def
    }

    attack(target) {
        target.receiveAttack(this)
        return target.getLife()
    }

    receiveAttack(opponent, strikeBack = false) {
        if (strikeBack === false) {
            this.life = this.life - opponent.getStrength()
            opponent.receiveAttack(this, true)
        } else {
            opponent.life = opponent.getLife() - this.def
            return true
        }
    }
}