import React, { useState } from "react";

export const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onChangeHandler = (e) => {
    setComment(e.target.value);

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ Text: comment }),
    // };

    // if (editIndex === null) {
    //   fetch("/Comments/AddComment", requestOptions)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.error("Error:", error));
    // } else {
    //   fetch("/Comments/UpdateComment", requestOptions)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.error("Error:", error));
    //   setEditIndex(null);
    // }
    // setComment("");
  };

  const onClickHandler = () => {
    if (comment.trim() === "") {
      return;
    }

    if (editIndex === null) {
      setComments((comments) => [...comments, comment]);
    } else {
      const updatedComments = [...comments];
      updatedComments[editIndex] = comment;
      setComments(updatedComments);
      setEditIndex(null);
    }
    setComment("");
  };

  const onDeleteHandler = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const onEditHandler = (index) => {
    setComment(comments[index]);
    setEditIndex(index);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-3/4 bg-gray-800 text-white border-2 p-4 rounded-lg">
        <div className="max-w-full bg-gray-700 p-4 rounded flex flex-col items-center">
          {comments.map((text, index) => (
            <div
              key={index}
              className="text-white p-2 rounded my-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>{text}</div>
              <div>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded "
                  onClick={() => onEditHandler(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2 "
                  onClick={() => onDeleteHandler(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl mt-4">Comment</h2>
        <textarea
          className="w-full h-40 p-2 my-2 border text-black rounded"
          value={comment}
          onChange={onChangeHandler}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ width: "100%" }}
          onClick={onClickHandler}
        >
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </div>
      <div>sd</div>
    </div>
  );
};
