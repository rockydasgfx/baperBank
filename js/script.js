const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  if (email.value == "cala@baba.com" && password.value == "hide") {
    window.location.href = "./app.html";
  }
});
