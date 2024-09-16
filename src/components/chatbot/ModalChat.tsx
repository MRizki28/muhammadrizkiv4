'use client';

import Image from "next/image";
import Profile from "@/assets/profile.png";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";

export default function ModalChat() {
    const [openChat, setOpenChat] = useState(false);

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

    const closeChat = () => {
        setOpenChat(false);
    }

    return (
        <>
            <div
                id="modalChat"
                className={`fixed p-1 right-[6px] md:right-4 bottom-10 ${openChat ? 'fade-in h-[100%] top-[3px] md:top-auto md:h-fit' : 'hidden'}`}
            >
                <div className="bg-gray-100 rounded-lg shadow-lg flex flex-col max-h-full h-full ">
                    {/* Header */}
                    <div className="bg-black p-4 text-white flex justify-between items-center rounded-t-lg">
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
                            {/* Bot message */}
                            <div className="flex items-start space-x-2">
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
                                <div className="text-white p-2 rounded-lg max-w-xs bg-gray-600">
                                    <span>Hello, I'm Alice. I'm a system assistant. Can I help you?</span>
                                </div>
                            </div>

                            {/* User response */}
                            <div className="flex justify-end">
                                <div className="text-black p-2 rounded-lg max-w-xs bg-green-200">
                                    <span>Yes</span>
                                </div>
                            </div>

                            {/* Bot options */}
                            <div className="flex items-start space-x-2">
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
                                <div className="text-white p-2 rounded-lg max-w-xs bg-gray-600">
                                    <span>Please select an option:</span>
                                    <p>1. About Muhammad Rizki</p>
                                </div>
                            </div>

                            {/* User selects option */}
                            <div className="flex justify-end">
                                <div className="text-black p-2 rounded-lg max-w-xs bg-green-200">
                                    <span>1</span>
                                </div>
                            </div>

                            {/* Bot responds */}
                            <div className="flex items-start space-x-2">
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
                                <div className="text-white p-2 rounded-lg max-w-xs bg-gray-600">
                                    <span>Muhammad Rizki is a software engineer from Indonesia, with 2 years of experience in web development.</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Input Field */}
                    <div className="bg-white p-4 flex items-center rounded-b-lg">
                        <input
                            type="text"
                            id="messageInput"
                            placeholder="Maintenance"
                            className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
                            disabled
                        />
                        <button disabled className="bg-black text-white rounded-full p-2 ml-2 hover:bg-gray-800 focus:outline-none">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div>

            <div id="floatingButton" className={`fixed bottom-4 right-4 transition-transform duration-500 ${openChat ? 'hidden' : ''}`}>
                <button onClick={handleOpenChat} className="bg-white text-black border-2 shadow-2xl border-black rounded-full p-4 hover:bg-blue-600 focus:outline-none">
                    <TbMessageChatbot />
                </button>
            </div>
        </>
    );
}
