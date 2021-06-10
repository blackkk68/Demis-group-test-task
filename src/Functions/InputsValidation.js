export function textValidation(name) {
    if (name.trim().length) {
        return true;
    } else {
        return false;
    }
}

export function phoneValidation(phone) {
    const regExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g;
    if (regExp.test(String(phone).toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

export function emailValidation(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(String(email).toLowerCase())) {
        return true;
    } else {
        return false;
    }
}