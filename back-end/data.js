const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "data.json");

export const getComments = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data).comments || [];
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
};

export const saveComments = (comments) => {
  try {
    const data = JSON.stringify({ comments });
    fs.writeFileSync(dataFilePath, data, "utf-8");
    console.log("Comments saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export const addComment = (comment) => {
  const comments = getComments();
  comments.push({ text: comment.text, dateTime: comment.dateTime });
  saveComments(comments);
};

export const deleteComment = (index) => {
  const comments = getComments();
  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
    saveComments(comments);
  } else {
    console.error("Invalid index for deletion");
  }
};

module.exports = {
  getComments,
  addComment,
  deleteComment,
};
