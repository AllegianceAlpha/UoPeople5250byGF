document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("email-form");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errorMessage.textContent = "Please enter your email address.";
      emailInput.classList.add("error");
    } else if (!emailRegex.test(email)) {
      errorMessage.textContent = "Please provide a valid email address.";
      emailInput.classList.add("error");
    } else {
      errorMessage.textContent = "";
      emailInput.classList.remove("error");
      alert("Thanks! You’re subscribed.");
      emailInput.value = ""; // clear the input
    }
  });
});
