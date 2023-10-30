import React, { useState } from "react";

export const Comments = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    }

    const onClickHandler = () => {
        setComments((comments) => [...comments, comment]);
        setComment('') // clear textare
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="w-3/4 bg-gray-800 text-white border-2 p-4 rounded-lg">
                <div className="max-w-full bg-gray-700 p-4 rounded flex flex-col items-center">
                    {comments.map((text, index) => (
                        <div key={index} className="text-white p-2 rounded my-1">{text}</div>
                    ))}
                </div>
                <h2 className="text-2xl mt-4">Comment</h2>
                <textarea className="w-full h-40 p-2 my-2 border text-black rounded" value={comment} onChange={onChangeHandler} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: "100%" }} onClick={onClickHandler}>Submit</button>
            </div>
        </div>
    );
};
