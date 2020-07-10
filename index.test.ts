import { Game } from "./game";

describe('game', () => {

    let game: Game;

    beforeEach(() => {
        game = new Game();
    });

    describe('rolls', () => {
        test('should return random integer between 0 and 10', () => {
            const rolls: number[] = [];
            for (let i = 0; i < 1000; i++) {
                rolls.push(game.rolls());
            }
            expect(Math.min(...rolls)).toBeGreaterThanOrEqual(0);
            expect(Math.max(...rolls)).toBeLessThanOrEqual(10);
        });
    });

    describe('play', () => {

        test('should rolls 22 times and compute score', () => {
            const spyRolls = jest.spyOn(game, 'rolls').mockImplementation(() => 1);
            const spyCompute = jest.spyOn(game, 'compute').mockImplementation(() => null);
            game.play();
            expect(spyRolls).toHaveBeenCalledTimes(22);
            expect(spyCompute).toHaveBeenCalled();
        });

    });

    describe('compute', () => {
        test('should sum up 20 values if no spares nor strikes', () => {
            jest.spyOn(game, 'rolls').mockImplementation(()=>3);
            game.play();
            expect(game.score).toEqual(20*3);
        });
        test('only strike should give 300', ()=> {
            jest.spyOn(game, 'rolls').mockImplementation(()=>10);
            game.play();
            expect(game.score).toEqual(300);
        })
    });

});