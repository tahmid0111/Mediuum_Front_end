
export const setEmailHelper = (value) => {
    sessionStorage.setItem('email', value);
}

export const getEmail = () => {
    return sessionStorage.getItem('email');
}

export const removeEmail = () => {
    sessionStorage.removeItem('email')
}
