let tricks = ["flip", "varial", "heel-flip", "varial-flip", "impossible"];

document.querySelector('#btn').addEventListener('click', () =>{ 
    let number = Math.floor(Math.random() * tricks.length);
    const randomTrick = tricks[number];
    const item = document.querySelector('#trick')
    item.innerHTML = randomTrick;
});



