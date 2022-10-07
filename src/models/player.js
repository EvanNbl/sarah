// import ModelFactory from './factory';
// import Pawn from './pawn';

// export default class Player extends Pawn {

//     constructor(config) {
//         super(config);
//         this.deck = ModelFactory.get('deck');
//         this.board = ModelFactory.get('board');
//         this.hand = ModelFactory.get('hand');
//         this.cemetary = ModelFactory.get('cemetary');
//     }

//     shuffle(type = "deck") {
//         if (type === "deck") {
//             this.deck.shuffle();
//             return true;
//         } else if (type === "cemetary") {
//             this.cemetary.shuffle();
//             return true;
//         } else {
//             return false;
//         }
//     }

//     draw() {
//         return this.deck.draw();
//     }

//     playCard(position) {
//         const card = this.hand.removeCard(position);
//         if (card) {
//             this.board.addCard(card);
//             return true;
//         } else {
//             return false;
//         }
//     }

//     discardCard(position) {
//         const card = this.hand.removeCard(position);
//         if (card) {
//             this.cemetary.insertAt(card);
//             return true;
//         } else {
//             return false;
//         }
//     }

//     attack(position, target) {
//         const card = this.board.removeCard(position);
//         card.attack(target);
//     }
// }