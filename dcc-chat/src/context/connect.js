"use client";

import { useContext, createContext, useState, useEffect } from "react";
import io from "sockect.io-client";

const Context = createContext();

export const useConnection = () => useContext(Context);

export const Provider = ({ children }) => {
    const [connection, setConnection] = useState(null);

    const data = {
        connection,
    };

    useEffect(() => {
        const socket = io("http://localhost:3001");
        socket.connect();

        socket.on("connect", () => {
            setConnection(socket);
        });

        return () => {
            socket.off("connect");
        };
    }, []);

    return (
        <Context.Provider value={{ ...data }}> {children} </Context.Provider>
    );
};

export default Context