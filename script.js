let soloTricks = ["flip", "varial", "heel-flip", "varial-flip", "impossible"];
let skateParkTricks = ["Nose Slide", " Tail Slide", "Croked", "Rock Slide", "Manual"];
let allTricks = soloTricks.concat(skateParkTricks);


console.log(gameMode)

document.querySelector('#btn').addEventListener('click', () =>{
    const gameMode = document.querySelector('#gameMode').value;
     
    let number = Math.floor(Math.random() * soloTricks.length);
    const randomTrick = soloTricks[number];
    const item = document.querySelector('#trick');
    item.innerHTML = randomTrick;
});



