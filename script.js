const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById("submitGuess").addEventListener("click", function () {
  const userInput = document.getElementById("guess").value;
  const message = document.getElementById("message");

  // Validate input
  if (!userInput || isNaN(userInput) || userInput % 1 !== 0 || userInput < 1 || userInput > 100) {
    message.textContent = "Please enter a whole number between 1 and 100.";
    message.style.color = "red";
    return;
  }

  const userGuess = parseInt(userInput);

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Congrats! You guessed the number ${randomNumber} correctly!`;
    message.style.color = "green";
    document.getElementById("submitGuess").disabled = true;
    return;
  }

  attempts--;

  if (attempts === 0) {
    message.textContent = `❌ Game Over! The correct number was ${randomNumber}.`;
    message.style.color = "red";
    document.getElementById("submitGuess").disabled = true;
    return;
  }

  if (userGuess < randomNumber) {
    message.textContent = `Too low! You have ${attempts} attempts left.`;
  } else {
    message.textContent = `Too high! You have ${attempts} attempts left.`;
  }

  message.style.color = "blue";
});
