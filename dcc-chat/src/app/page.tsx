"use client";
import ChatPage from "@/components/chat/ChatPage";
import { useConnection } from "@/context/connect";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [showSpinner, setShowSpinner] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [userName, setuserName] = useState("");
    
    const {connection} = useConnection()

    function handleJoin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // logica de login no chat -SocketIO
        if(userName !== ""){
            connection.emit("join_room", userName)
            setShowSpinner(true)
            setTimeout(() => {
                setShowChat(true)
                setShowSpinner(false)
            }, 1000)
        }
        setShowChat(false);  
    }

    return (
        <main className="flex w-full h-screen">
            <div
                className="flex flex-col w-full h-full justify-center items-center gap-2"
                style={{ display: showChat ? "none" : "" } /**/}
            >
                <div className="w-1/5">
                    <Image
                        src="/logo-dcc-01.png"
                        alt="Logo Chat-DCC"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full"
                        priority
                    />
                </div>
                <div>
                    <form onSubmit={handleJoin} className="flex gap-2">
                        <input
                            type="text"
                            className="rounded px-2 py-3 text-gray-700 border border-gray-400"
                            placeholder="Digite o seu usuário"
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 text-base front-medium leading-6 rounded text-white bg-slate-500 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {!showSpinner ? (
                                "Entrar"
                            ) : (
                                <div className="border-4 border-solid  border-t-4 border-[#2196f3] rounder-lg w-5 h-5 animate-spin"></div>
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full" style={{ display: showChat ? "" : "none" }}>
                <ChatPage userName={userName} />
            </div>
        </main>
    );
}
