let soloTricks = ["flip", "varial", "heel-flip", "varial-flip", "impossible"];
let skateParkTricks = ["Nose Slide", " Tail Slide", "Croked", "Rock Slide", "Manual"];
let allTricks = soloTricks.concat(skateParkTricks);


document.querySelector('#btn').addEventListener('click', () =>{
    const gameMode = document.querySelector('#gameMode').value;
    if (gameMode === 'skateParkTricks') {
        let number = Math.floor(Math.random() * skateParkTricks.length);
        const randomTrick = skateParkTricks[number];
        showTrick(randomTrick);
    } else if (gameMode === 'soloTricks') {
        let number = Math.floor(Math.random() * soloTricks.length);
        const randomTrick = soloTricks[number];
        showTrick(randomTrick);
    } else {
        let number = Math.floor(Math.random() * allTricks.length);
        const randomTrick = allTricks[number];
        showTrick(randomTrick);
    }
});

function showTrick(p) {
    const trick = document.querySelector('#trick');
    trick.innerHTML = p;
}



