
/**
 * Updates the score for both players and draws it
 * @param {Array<string>} score Example: [ 0, 0 ]
 */

export const updateScore = (score) => {
    const scorePlayerOne = document.querySelector('#player-one-score');
    const scorePlayerTwo = document.querySelector('#player-two-score');
    
    scorePlayerOne.innerHTML = score[0];
    scorePlayerTwo.innerHTML = score[1];
}