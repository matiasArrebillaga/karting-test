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

            console.log("Login exitoso:", response.data);

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div>
            <h1>Iniciar sesión</h1>

            <form onSubmit={handleLogin}>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
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