document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "saksham@gmail.com" && password === "@123") {
          alert("Login successful! Redirecting...");
          window.location.href = "main.html";
      } else {
          alert("Invalid email or password. Please try again.");
      }
    });
});