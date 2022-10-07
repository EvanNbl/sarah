export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {
        if (!Array.isArray(this.cards) || !this.cards.length) {
            return false;
        } else {
            for (let i = this.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
            }
            return true;
        }
    }

    insertAt(mixedcard, position) {
        if (position === undefined || isNaN(position)) {
            this.cards.push(mixedcard);
        } else {
            this.cards.splice(position, 0, mixedcard);
        }
    }

    draw() {
        if (!Array.isArray(this.cards) || !this.cards.length) {
            return false;
        } else {
            const card = this.cards.shift();
            return card;
        }
    }

    getCardsCount() {
        return this.cards.length;
    }
}
