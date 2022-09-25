import addCommentObj from "helpers/addCommentObj";
import getAllComments from "helpers/getAllComments";
import getPostsDataForFeed from "helpers/getPostsDataForFeed";
import updatePostData from "helpers/updatePostData";
import "./style.css";

const { useState } = require("react");

function AddComment({
  postId,
  handleSetAllCommentObjs,
  handleSetPostData,
  inputElement,
}) {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    let allPostsData = getPostsDataForFeed();
    const timeStamp = new Date();
    const generatedCommentId = `cid_${timeStamp.getTime()}`;
    allPostsData[postId].comments = [
      ...allPostsData[postId].comments,
      generatedCommentId,
    ];
    const commentObjToInsert = {
      body: commentText,
      timeStamp: new Date(),
      likes: 0,
      isCommentLiked: false,
      childComments: [],
      userWhoCommented: "piyush",
    };
    addCommentObj(generatedCommentId, commentObjToInsert);

    updatePostData(allPostsData);
    setCommentText("");
    handleSetAllCommentObjs(getAllComments());
    handleSetPostData(getPostsDataForFeed());
  };

  return (
    <div className="AddComment">
      <input
        onChange={(event) => setCommentText(event.target.value)}
        placeholder="Add comment..."
        value={commentText}
        type="text"
        ref={inputElement}
      />
      <button className="AddComment__button" onClick={handleAddComment}>
        Add
      </button>
    </div>
  );
}

export default AddComment;
