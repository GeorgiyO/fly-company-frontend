import React, {useEffect, useState} from "react";

export const sendRequest = async (method, url, data) => {

    const init = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include",
    };

    if (data !== undefined) {
        if (typeof data === "object") {
            init.body = JSON.stringify(data);
            init.headers["Content-Type"] = "application/json";
        } else {
            init.body = data;
            init.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
    }

    await sleep(100);

    console.log(serverUrl + url, init.headers, data);

    const response = await fetch(serverUrl + url, init);

    if (response.ok) return response;
    else throw await response.json();
}

export function useRequest(req, ...args) {

    const [response, setResponse] = useState(undefined);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        req(...args)
            .then((response) => {
                setResponse(response);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setPending(false);
            });

        return () => {};
    }, []);

    return [response, pending, error];
}

const sleep = async (time) => {
    await setTimeout(() => {
    }, time);
}
