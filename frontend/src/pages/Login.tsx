import { useState } from "react";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {
                email,
                password
            });

            console.log(response.data);

        } catch (error) {

            console.error("Error al iniciar sesión:", error);

        }
    };

    return (
        <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Iniciar sesión
            </button>

        </form>
    );
}

export default Login;