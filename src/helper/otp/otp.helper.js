
export const setTokenHelper = (value) => {
    sessionStorage.setItem('token', value);
}

export const setEmailHelper = (value) => {
    sessionStorage.setItem('email', value);
}

export const getToken = () => {
    return sessionStorage.getItem('token');
}

export const getEmail = () => {
    return sessionStorage.getItem('email');
}

export const removeToken = () => {
    sessionStorage.removeItem('token')
}

export const removeEmail = () => {
    sessionStorage.removeItem('email')
}
