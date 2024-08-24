import React from "react";
import { useState } from "react";


export default function CommentButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlePost = () => {
 
   
    }

return (
    <div className="comment-button">
            <div className="flex items-center bg-gray-800 rounded-lg p-3 shadow-md w-full max-w-xl mx-auto">
                <div 
                    placeholder="What's on your mind?" 
                    className="bg-transparent text-gray-400 focus:outline-none flex-grow"
                />
                <button 
                    className="btn btn_accent"
                    onClick={openModal}
                >
                    Post
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white rounded-lg p-6 w-full max-w-lg">
                        <h2 className="text-xl mb-4">Create Post</h2>
                        <textarea
                            className="w-full h-32 p-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none"
                            placeholder="What's on your mind?"
                        ></textarea>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg mr-2"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button className="btn_accent text-white px-4 py-2 rounded-lg">

                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}