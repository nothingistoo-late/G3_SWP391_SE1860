import axios from 'axios';

// Base URL cho API Authentication
const BASE_URL = 'https://localhost:7191/api';

const postRegister = async (firstName, lastName, email, password, passwordConfirm, gender, studentId, relationship, isPrimaryContact, phoneNumber) => {
    return axios.post(`${BASE_URL}/Auth/register`, {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
        gender,
        studentId,
        relationship,
        phoneNumber
    });
};

const postLogin = async (email, password) => {
    return axios.post(`${BASE_URL}/Auth/login`, {
        email,
        password
    });
}

export { postRegister, postLogin };