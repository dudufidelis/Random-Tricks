const soloTricks = [
    "Kickflip",
    "Heelflip",
    "Ollie",
    "Backside 180",
    "Frontside 180",
    "Pop Shove-It",
    "Hardflip",
    "Varial Kickflip",
    "360 Flip",
    "Nollie Flip",
    "Switch Ollie",
    "Switch Heelflip",
    "Casper Flip",
    "Inward Heelflip",
    "Bigspin",
    "Frontside Flip",
    "Backside Flip",
    "Tre Flip",
    "Nollie Heelflip",
    "360 Ollie"
  ];

  const skateParkTricks = [
    "Nose Slide",
    "Tail Slide",
    "Crooked Grind",
    "Smith Grind",
    "50-50 Grind",
    "Blunt Slide",
    "Rock and Roll",
    "Frontside Grind",
    "Backside Grind",
    "Feeble Grind",
    "Lipslide",
    "Disaster",
    "Fakie 5-0",
    "Axle Stall",
    "Kickturn",
    "Boneless",
    "No Comply",
    "Stalefish",
    "Melon Grab",
    "Indy Grab"
  ];
  
let allTricks = soloTricks.concat(skateParkTricks);

document.querySelector('#btn').addEventListener('click', () =>{
    const gameMode = document.querySelector('#gameMode').value;
    if (gameMode === 'skateParkTricks') {
        getTrick(skateParkTricks);
    } else if (gameMode === 'soloTricks') {
        getTrick(soloTricks);
    } else {
        getTrick(allTricks);
    }
});

function getTrick(mode) {
    let number = Math.floor(Math.random() * mode.length);
    const randomTrick = mode[number];
    showTrick(randomTrick);
};

function showTrick(p) {
    const trick = document.querySelector('#trick');
    trick.innerHTML = p;
};





