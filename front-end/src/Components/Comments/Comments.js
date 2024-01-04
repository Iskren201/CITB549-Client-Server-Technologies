import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Fetch existing comments when component mounts
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch("http://localhost:7244/api/comments");
      const data = await response.json();
      console.log(data); // Проверка на получените данни в конзолата
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const sendCommentToServer = async () => {
    try {
      const response = await fetch("http://localhost:7244/api/comments/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: comment }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      // Продължете с обработката на успешния отговор тук
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const onClickHandler = async () => {
    if (comment.trim() === "") {
      return;
    }

    try {
      // Send the comment to the server
      const newComment = await sendCommentToServer(comment);

      // Update the state with the new comment
      setComments([...comments, newComment]);
      setComment("");
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error("Failed to add comment:", error);
    }
  };

  const onDeleteHandler = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:7244/api/comments/delete/${index}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Remove the comment from state if deletion is successful
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
      } else {
        // Handle error, e.g., display an error message to the user
        console.error("Failed to delete comment:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const onEditHandler = (index) => {
    // Your logic for handling edit mode...
    // This might include updating the UI to allow editing the selected comment
    // You can setEditIndex(index) to indicate that the comment at 'index' is being edited
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
          // onChange={onChangeHandler}
          onChange={(e) => setComment(e.target.value)}
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
