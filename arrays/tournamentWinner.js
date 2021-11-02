// There's an algorithms tournament taking place in which teams of programmers compete against each other
// to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces
// off against all other teams. Only two teams compete against each other at a time, and for each competition,
// one team is designated the home team, while other team is the away team. In each competition there's always
// one winner and one loser; there are no ties. A team recieves 3 points if it wins and 0 points if it loses.
// The winner of the tournament is the team thta receives the most amout of points.
// Given an array of pairs representing the teams that have competed against each other and an array containing
// the results of each competition, write a function that returns the winner of the tournament. The input arrays 
// are named COMPETITIONS and RESULTS, respectively. The COMPETITIONS array has elements in the form of [homeTEAM, awayTEAM],
// where each team is a string of at most 30 characters representing the name of the team. The RESULTS array contains
// information about the winner of each corresponding competition in the COMPETITIONS array. Specifically, RESULTS[i] 
// denotes the winner of the COMPETITIONS[i], where 1 in the RESULTS array means that the home team in the corresponding
// competition won and a 0 means that the away team won.
// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams
// exactly once. It's also guaranteed that the tourmament will always have at least two teams.

// O(n) time | O(k) space n is a number of competitions and k is the number of teams

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
    let currentBestTeam = '';
    const scores = {[currentBestTeam] : 0};
    for(let idx = 0; idx < competitions.length; idx++) {
        const result = results[idx];
        const [homeTeam, awayTeam] = competitions[idx];
        
        const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        updateScores(winningTeam, 3, scores);
        if ( scores[winningTeam] > score[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }
    return currentBestTeam;
}

function updateScores(team, points, scores) {
    if (!(team in scores)) scores[team] = 0;
    scores[team] +=points;
}

