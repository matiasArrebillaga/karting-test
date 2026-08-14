import { useState } from "react";
import api from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("BOTÓN LOGIN PRESIONADO");
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const response = await api.post("/auth/login", {
                email,
                password
            });

            const {token , user} = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user));
            console.log("Token guardado:", token);
            console.log("Usuario guardado:", user);
        } catch (error) {
            console.error("ERROR EN LOGIN:", error);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>

            <form onSubmit={handleLogin}>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Contraseña
                    </label>

                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Iniciar sesión
                </button>

            </form>
        </div>
    );
}

export default Login;