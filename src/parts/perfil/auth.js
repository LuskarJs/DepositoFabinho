import {jwtDecode} from 'jwt-decode';

export const isTokenValid = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return false;
    }
};

export const getUsernameFromToken = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.username;
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return null;
    }
};

export const getIsAdminFromToken = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.isAdmin;
    } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return false;
    }
};
