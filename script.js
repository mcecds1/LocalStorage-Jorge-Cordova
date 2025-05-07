document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#loginForm");
    const userField = document.querySelector("#username");
    const welcomeSection = document.querySelector("#welcomeMessage");
    const welcomeText = document.querySelector("#welcomeText");
    const logoutButton = document.querySelector("#logoutBtn");

    const displayWelcome = (user) => {
        welcomeText.innerText = `¡Bienvenido, ${user}!`;
        welcomeSection.classList.remove("hidden");
        form.classList.add("hidden");
    };

    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
        displayWelcome(storedUser);
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const user = userField.value.trim();

        if (user) {
            localStorage.setItem("currentUser", user);
            displayWelcome(user);
            console.log(`Usuario encontradoo :).`);
            console.log(`Bienvenido mi Querido ${user}`);
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    });

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("currentUser");
            document.getElementById("welcomeMessage").classList.add("hidden");
            document.getElementById("loginForm").classList.remove("hidden");
            console.log("Usuario desaparecido :(");
        });
    }
});


