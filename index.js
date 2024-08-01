function rollDice() {
  const numofDice = document.getElementById("dicenum").value;
  const diceResult = document.getElementById("gameresult");
  const diceImage = document.getElementById("resultimage");
  const values = [];
  const images = [];
  for (let i = 0; i < numofDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="dice: ${value}">`);
  }
  diceResult.textContent = `The dices are:${values.join(",")}`;
  diceImage.innerHTML = images.join("     ");
}
