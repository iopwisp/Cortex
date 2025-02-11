function loginUser() {
    const users = {
        "admin": "1234",
        "user": "5678"
    };

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (users[username] === password) {
        localStorage.setItem("LoggedIn", "true");
        window.location.href = "index.html"; // Переход на сайт
    } else {
        errorMessage.textContent = "Неверный логин или пароль!";
        errorMessage.classList.add("shake");
        setTimeout(() => errorMessage.classList.remove("shake"), 300);
    }
}

function logout() {
    localStorage.removeItem("LoggedIn");
    window.location.href = "login.html";
}

window.onload = function() {
    if (window.location.pathname.includes("index.html") && localStorage.getItem("LoggedIn") !== "true") {
        window.location.href = "login.html";
    }
};

document.getElementById("file-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const scanBox = document.querySelector(".scan-box");
            scanBox.innerHTML = `<img src="${e.target.result}" alt="Uploaded Scan" style="max-width: 100%; max-height: 100%;">`;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("run-analysis").addEventListener("click", function() {
    alert("Analysis is running...");
    // Здесь можно добавить логику для анализа
});

document.getElementById("view-history").addEventListener("click", function() {
    alert("Viewing history...");
    // Здесь можно добавить логику для просмотра истории
});