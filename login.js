// 🔐 SI YA ESTÁ LOGUEADO → IR DIRECTO AL DASHBOARD
document.addEventListener("DOMContentLoaded", () => {
    const usuario = sessionStorage.getItem("usuario");

    if (usuario) {
        window.location.href = "index.html";
    }
});

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://inventario-backend-5qg3.onrender.com/api/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            const usuario = await response.json();

            localStorage.setItem("usuario", JSON.stringify(usuario));

            document.getElementById("mensaje").innerText =
                "Login correcto";

            window.location.href = "index.html";
        } else {
            document.getElementById("mensaje").innerText =
                "Credenciales incorrectas";
        }

    } catch (error) {
        document.getElementById("mensaje").innerText =
            "Error de conexión";
    }
}