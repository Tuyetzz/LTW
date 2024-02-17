function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    
    let total = 0;

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }
    for(let i of values) {
        total += i;
    }
    if(total > 10) {
        diceResult.textContent = `Kết quả: ${values.join(', ')} - Tổng (${total}) - Tài`;
        diceImages.innerHTML = images.join('');
    }
    else {
        diceResult.textContent = `Kết quả: ${values.join(', ')} - Tổng (${total}) - Xỉu`;
        diceImages.innerHTML = images.join('');
    }
}
