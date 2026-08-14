import { useEffect, useState } from "react";
import { getKartings } from "../services/karting.service";

interface Karting {
    _id: string;
    categoria: string;
    modelo: string;
    estado: string;
    fechaAdqui: string;
}

function Kartings() {
    const [kartings, setKartings] = useState<Karting[]>([]);

    useEffect(() => {
        const cargarKartings = async () => {
            try {
                const data = await getKartings();
                setKartings(data);
            } catch (error) {
                console.error("Error al obtener los kartings:", error);
            }
        };

        cargarKartings();
    }, []);

    return (
        <div>
            <h1>Kartings</h1>

            {kartings.map((karting) => (
                <div key={karting._id}>
                    <h2>{karting.modelo}</h2>
                    <p>Categoría: {karting.categoria}</p>
                    <p>Estado: {karting.estado}</p>
                    <p>Fecha de adquisición: {karting.fechaAdqui}</p>
                </div>
            ))}
        </div>
    );
}

export default Kartings;