const API_DOMAIN = "http://localhost:8000/";

export const get = async (path) => {
    const response = await fetch(API_DOMAIN + path, {credentials: "include"});
    const result = await response.json();
    return result;
}


export const post = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        credentials: "include", // added this part
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options)
    });

    const result = await response.json();
    return result;     
}

export const patch = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "PATCH",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options)
    });

    const result = await response.json();
    return result;     
}


export const deletePatch = async (path) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "PATCH",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });

    const result = await response.json();
    return result;     
}

