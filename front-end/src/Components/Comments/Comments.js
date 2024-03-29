import React, { useEffect, useState } from "react";
import axios from "axios";

const formatDateTime = (dateTimeString) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  };

  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleDateString("en-US", options);
};

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

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    loadComments();
  }, [comment]);

  const loadComments = async () => {
    try {
      const response = await axios.get("http://localhost:7132/api/comments");
      setComments(response.data.comments);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onClickHandler = () => {
    if (comment.trim() === "") {
      return;
    }

    if (editIndex === null) {
      axios
        .post("http://localhost:7132/api/comments", {
          name: name,
          comment: comment,
        })
        .then(() => loadComments())
        .catch((error) => console.error("Error adding comment:", error));
    } else {
      axios
        .put(`http://localhost:7132/api/comments/${editIndex}`, {
          name: name,
          comment: comment,
        })
        .then(() => loadComments())
        .catch((error) => console.error("Error updating comment:", error));
    }

    setName("");
    setComment("");
    setEditIndex(null);
  };

  const onUpdateHandler = async () => {
    if (comment.trim() === "") {
      return;
    }

    try {
      await axios.put(`http://localhost:7132/api/comments/${editIndex}`, {
        name: name,
        comment: comment,
      });

      loadComments();

      setName("");
      setComment("");
      setEditIndex(null);
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const onDeleteHandler = async (index) => {
    await axios.delete(`http://localhost:7132/api/comments/${index}`);
    loadComments();
  };

  const onEditHandler = (index) => {
    setName(comments[index].name);
    setComment(comments[index].text);
    setEditIndex(index);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-3/4 bg-gray-800 text-white border-2 p-4 rounded-lg">
        <div className="max-w-full bg-gray-700 p-4 rounded flex flex-col items-center">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="text-white p-2 rounded my-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="mr-6">{comment.name}</div>
              <div>
                <p>{comment.text}</p>
                <small>{formatDateTime(comment.dateTime)}</small>
              </div>
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
        <div>
          <label className="text-white">Name</label>
          <input
            type="text"
            className="w-full p-2 my-2 border text-black rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <h2 className="text-2xl mt-4">Comments</h2>

        <textarea
          className="w-full h-40 p-2 my-2 border text-black rounded"
          value={comment}
          onChange={onChangeHandler}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style={{ width: "100%" }}
          onClick={editIndex === null ? onClickHandler : onUpdateHandler}
        >
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </div>
    </div>
  );
};
