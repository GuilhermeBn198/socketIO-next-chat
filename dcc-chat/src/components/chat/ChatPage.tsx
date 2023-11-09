"client component"

import Image from "next/image";
import { useState } from "react";

export default function ChatPage({ userName }: any) {

    const [currentMsg, setCurrentMsg] = useState("")

    return (
        <div className="flex ">
            {/* barra lateral */}
            <div className="flex flex-col w-96 h-screen bg-green-300 p-3 gap-6 border-green-600">
                <div className="w-1/5">
                    <Image
                        src="/images/logo-chat-dcc.png"
                        alt="logo Chat-DCC"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full"
                        priority
                    />
                </div>
                <div>
                    <span>USUÁRIOS ONLINE</span>
                    <span>...</span>
                    <span>{userName}</span>
                </div>
            </div>

            {/* Main Chat */}
            <div className="flex flex-col w-full h-screen px-10 py-5 bg-yellow-100 justify-between">
                <div>mensagens</div>

                <div>
                    <form className="flex gap-2 w-full justify-between">
                        <input
                            type="text"
                            className="rounded px-2 py-3 text-gray-700 border border-gray-400 w-2/3"
                            placeholder="Digite uma mensagem"
                            value={currentMsg}
                            onChange={(e) => setCurrentMsg(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 text-base front-medium leading-6 text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
