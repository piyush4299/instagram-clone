import { useRef, useState } from "react";
import getAllComments from "helpers/getAllComments";
import getUserData from "helpers/getUserData";
import updateCommentObj from "helpers/updateCommentObj";
import AddComment from "Components/AddComment";
import getTimeStampForSite from "helpers/getTimeStampForSite";
import { MdFavorite } from "react-icons/md";
import "./style.css";

function CommentsContainer({
  postId,
  postDetail,
  postedByUserInfo,
  postComments,
  handleSetPostData,
}) {
  const [allCommentObjs, setAllCommentObjs] = useState(getAllComments());
  const inputElement = useRef(null);
  const handleLikeBtnClick = (commentId) => {
    let commentObjToChange = allCommentObjs[commentId];
    if (!commentObjToChange.isCommentLiked) {
      commentObjToChange.likes += 1;
      commentObjToChange.isCommentLiked = true;
    } else {
      commentObjToChange.likes -= 1;
      commentObjToChange.isCommentLiked = false;
    }
    setAllCommentObjs({ ...allCommentObjs, commentId: commentObjToChange });

    updateCommentObj(commentId, commentObjToChange);
  };
  return (
    <div className="CommentsContainer">
      <div className="CommentsContainer__postCaptionDetails">
        <div className="CommentsContainer__postCaptionProfileImage">
          <img src={postedByUserInfo.profileImageUrl} alt="ProfileImage" />
        </div>
        <p className="CommentsContainer__postedByUserName">
          {postDetail.userWhoPosted}
        </p>
        <p className="CommentsContainer__postCaption">{postDetail.caption}</p>
      </div>
      <div className="CommentsContainer__commentList">
        {postComments.map((commentId) => {
          const commentObj = allCommentObjs[commentId];
          const userWhoCommented = getUserData()[commentObj.userWhoCommented];
          return (
            <div
              key={commentId}
              className="CommentsContainer__commentDetails"
              onClick={() => inputElement.current.focus()}
            >
              <div className="CommentsContainer__commentedByProfileImage">
                <img
                  src={userWhoCommented.profileImageUrl}
                  alt="ProfileImage"
                />
              </div>
              <div className="CommentsContainer__commentBody">
                <div className="CommentsContainer__commentDetails">
                  <p className="CommentsContainer__commentedByUserName">
                    {commentObj.userWhoCommented}
                  </p>
                  <p className="CommentsContainer__commentBody">
                    {commentObj.body}
                  </p>
                </div>
                <div className="CommentsContainer__commentFeatures">
                  <p className="CommentContainer__commentTimeStamp">
                    {getTimeStampForSite(commentObj.timeStamp)}
                  </p>
                  <p className="CommentContainer__totalLikes">
                    {commentObj.likes !== 0 ? `${commentObj.likes}like` : ``}
                  </p>
                </div>
              </div>
              <div
                className="CommentsContainer__likeCommentBtn"
                onClick={() => handleLikeBtnClick(commentId)}
              >
                <MdFavorite
                  size={30}
                  style={{
                    fill: allCommentObjs[commentId].isCommentLiked
                      ? "red"
                      : "#d9d9d9",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <AddComment
        postId={postId}
        handleSetAllCommentObjs={setAllCommentObjs}
        handleSetPostData={handleSetPostData}
        inputElement={inputElement}
      />
    </div>
  );
}

export default CommentsContainer;
