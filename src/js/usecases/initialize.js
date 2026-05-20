
/**
 * This function initializes the gameState for the Tic tac toe
 * Creates the score for both players, defines the initial turn
 * and creates an empty board with 9 spaces
 * @returns {array<number>} score  returns an array with two spaces
 * @returns {number} returns the score for both platers. Example [0,0]
 * @returns {array<string|null>} board returns an empty array with 9 spaces
 */

export const initialize = () => {
    const score = [ 0 , 0 ];
    const playerTurn = 0 ;
    const board =  Array(9).fill(0);

    return {score, playerTurn, board};
}