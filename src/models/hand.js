export default class Hand {
    constructor(config) {
        this.cards = config.cards;
        if (this.limit === undefined) {
            this.limit = 7;
        }
        this.limit = config.limit;
    }

    addCard(card) {
        if (this.cards.length < this.limit) {
            this.cards.push(card);
            return true;
        } return false;
    }

    removeCard(position) {
        if (position === undefined || isNaN(position)) {
            return false;
        } else {
            const card = this.cards.splice(position, 1);
            return card;
        }
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}
