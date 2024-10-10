'use client';

import Image from "next/image";
import Profile from "@/assets/alice.webp";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";

export default function ModalChat() {
    const [openChat, setOpenChat] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            message: 'Hello, Im Alice. How can I assist you today ?'
        },
        {
            id: 2,
            type: 'bot',
            message: 'You can type 1 for information about Muhammad Rizki or 2 for information about my projects'
        }

    ]);

    const handleOpenChat = () => {
        const floatingButton = document.getElementById('floatingButton')!;
        if (openChat) {
            setOpenChat(false);
        } else {
            floatingButton.classList.add('fade-out');
            setTimeout(() => {
                setOpenChat(true);
            }, 500);
        }
    }

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages(prevMessage => [
                ...prevMessage,
                {
                    id: prevMessage.length + 1,
                    type: 'user',
                    message: inputValue
                }
            ]);

            processInput(inputValue);
            setInputValue('');
            const messageInput = document.getElementById('messageInput') as HTMLInputElement | null;
            if (messageInput) {
                messageInput.value = '';
            }
        }
    }

    const processInput = (input: string) => {
        let response = '';
        switch (input.trim()) {
            case '1':
                response = 'You chose option 1, here is the information about Muhammad Rizki';
                break;
            case '2':
                response = 'You chose option 2, here is the information about my projects';
                break;
            default:
                response = 'Sorry, I dont understand that command';
                break;
        }

        setMessages(prevMessage => [
            ...prevMessage,
            {
                id: prevMessage.length + 1,
                type: 'bot',
                message: 'Alice is typing...'
            }
        ]);

        setTimeout(() => {
            setMessages(prevMessage => {
                const updatedMessages = prevMessage.slice(0, -1);
                return [
                    ...updatedMessages,
                    {
                        id: updatedMessages.length + 1,
                        type: 'bot',
                        message: response
                    }
                ];
            });
        }, 3000);
    }


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeChat = () => {
        setOpenChat(false);
    }

    return (
        <>
            <div
                id="modalChat"
                className={`fixed p-1 right-[6px] md:right-4 bottom-10 ${openChat ? 'fade-in h-[100%] top-[3px] md:top-auto md:h-fit' : 'hidden'}`}
            >
                <div className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-lg flex flex-col max-h-[600px] h-full ">
                    {/* Header */}
                    <div className="bg-black dark:bg-slate-700 p-4 text-white flex justify-between items-center rounded-t-lg">
                        <span className="text-start" id="receiver">Chat</span>
                        <div className="relative inline-block text-left">
                            <button className="hover:bg-gray-700 rounded-md p-1" onClick={closeChat}>
                                <IoMdClose className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Container */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="flex flex-col space-y-2" id="messageContainer">
                            {messages.map((message, index) => (
                                <div key={index} className={`flex space-x-3 ${message.type === 'bot' ? 'items-start' : 'justify-end'}`}>
                                    {message.type === 'bot' && !isMobile && (
                                        <div>
                                            <Image
                                                src={Profile}
                                                alt="profile"
                                                width={50}
                                                height={50}
                                                className="w-12 h-12 object-cover rounded-full"
                                                placeholder="blur"
                                                blurDataURL={Profile.blurDataURL}
                                            />
                                        </div>
                                    )}
                                    <div className={`text-white p-2 rounded-lg max-w-xs ${message.type === 'bot' ? 'bg-gray-600' : 'bg-green-600' }`}>
                                        <span>{message.message}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Input Field */}
                    <div className="bg-white dark:bg-slate-700 p-4 flex items-center rounded-b-lg">
                        <input
                            type="text"
                            id="messageInput"
                            placeholder="Maintenance"
                            className="flex-1 border rounded-full px-4 py-2 focus:outline-none dark:bg-slate-700"
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleSendMessage} className="bg-black text-white rounded-full p-2 ml-2 hover:bg-gray-800 focus:outline-none">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div >

            <div id="floatingButton" className={`fixed bottom-4 right-4 transition-transform duration-500 ${openChat ? 'hidden' : ''}`}>
                <button onClick={handleOpenChat} className="bg-white text-black border-2 shadow-2xl border-black rounded-full p-4 hover:bg-blue-600 focus:outline-none">
                    <TbMessageChatbot />
                </button>
            </div>
        </>
    );
}
