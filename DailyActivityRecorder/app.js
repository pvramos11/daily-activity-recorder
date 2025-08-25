const users = { "Patrick": "$P1d3r11", "Jake": "Tigno", "Fe": "Password" };
const activities = JSON.parse(localStorage.getItem("activities") || "{}");
const accountDetails = JSON.parse(localStorage.getItem("accountDetails") || "{}");

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (users[username] && users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    showMainContent(username);
  } else {
    document.getElementById("loginMessage").textContent = "Invalid username or password.";
  }
}

function showMainContent(username) {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("dashboardUser").textContent = username;
}

function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
  document.getElementById("loginUsername").value = "";
  document.getElementById("loginPassword").value = "";
}

function autoFillFields() {
  const name = document.getElementById("accountName").value.trim();
  if (accountDetails[name]) {
    document.getElementById("address").value = accountDetails[name].address || "";
    document.getElementById("contactPerson").value = accountDetails[name].contactPerson || "";
    document.getElementById("contactNumber").value = accountDetails[name].contactNumber || "";
  }
}

function addEntry() {
  const username = localStorage.getItem("loggedInUser");
  const entry = {
    userName: username,
    date: document.getElementById("date").value,
    timeIn: document.getElementById("timeIn").value,
    accountName: document.getElementById("accountName").value
