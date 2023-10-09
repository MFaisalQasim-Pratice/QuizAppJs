const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore')
const hightScore = JSON.parse(localStorage.getItem("highScore")) || [];
console.log(hightScore);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        // score: Math.floor(Math.random()*100),
        name: username.value
    };
    hightScore.push(score);
    hightScore.sort((a,b) => b.score - a.score);
    hightScore.splice(5);
    localStorage.setItem('highScore', JSON.stringify(hightScore));
    window.location.assign('/')
    console.log(hightScore);
}