let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); // Clear previous interval if it exists

  const targetDateInput = document.getElementById("target-date").value;
  const targetDate = new Date(targetDateInput);
  
  // Set target time to midnight (00:00) on the target date
  targetDate.setHours(0, 0, 0, 0);
  
  if (isNaN(targetDate.getTime())) {
    document.getElementById("countdown").innerText = "Please enter a valid date.";
    return;
  }

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerText = "🎉 Happy Birthday! 🎂\You are a true gem, and I’m so grateful to have you in my life. \nLove You..!💟";
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = 
      `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }, 1000);
}
