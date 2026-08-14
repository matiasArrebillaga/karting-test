import api from "./api";

export const getKartings = async () => {
    const response = await api.get("/kartings");

    return response.data;
};