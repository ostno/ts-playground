import { Game } from "./index";

describe('game', () => {

    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    describe('test', () => {
        test('should be defined', () => {
		expect(game).toBeDefined();
        });
    });

});
