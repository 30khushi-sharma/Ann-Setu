document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("settingBtn").addEventListener("click", function () {
      
      window.location.href = "settings.html";
  });
  document.getElementById("logoutBtn").addEventListener("click", function () {
      alert("Logging Out...");
      window.location.href = "login.html";
  });
});

document.getElementById("settingsBtn").addEventListener("click", function () {
  window.location.href = "setting.html";
});

