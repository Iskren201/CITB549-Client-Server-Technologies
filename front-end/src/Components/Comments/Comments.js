import React, { useEffect, useState } from "react";
import axios from "axios";
export const Comments = () => {
  // const [comment, setComment] = useState("");
  // const [comments, setComments] = useState([]);
  // const [editIndex, setEditIndex] = useState(null);

  // const onChangeHandler = (e) => {
  //   setComment(e.target.value);
  // };

  // const onClickHandler = () => {
  //   if (comment.trim() === "") {
  //     return;
  //   }

  //   if (editIndex === null) {
  //     setComments((comments) => [...comments, comment]);
  //   } else {
  //     const updatedComments = [...comments];
  //     updatedComments[editIndex] = comment;
  //     setComments(updatedComments);
  //     setEditIndex(null);
  //   }
  //   setComment("");
  // };

  // const onDeleteHandler = (index) => {
  //   const updatedComments = comments.filter((_, i) => i !== index);
  //   setComments(updatedComments);
  // };

  // const onEditHandler = (index) => {
  //   setComment(comments[index]);
  //   setEditIndex(index);
  // };
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
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

    axios.post("http://localhost:7132/api/comments", {
      comment: comment,
    });
  };

  const onDeleteHandler = (index) => {
    axios.delete(`http://localhost:7132/api/comments/${index}`);

    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const onEditHandler = (index) => {
    setComment(comments[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    axios
      .get("http://localhost:7132/api/comments")
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => {
        console.error("Error loading comments:", error);
      });
  }, []);

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
    </div>
  );
};
