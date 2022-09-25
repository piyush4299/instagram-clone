import CommentsContainer from "Components/CommentsContainer";
import { useEffect, useState } from "react";
import getUserData from "../../helpers/getUserData";
import { IoChevronBackSharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import addToLikedPostsByUser from "helpers/addToLikedPostsByUser";

import "./style.css";
import { Link } from "react-router-dom";
import removeFromLikedPostsByUser from "helpers/removeFromLikedPostsByUser";

const DEFAULT_USER_NAME = "piyush";

const PostInFeed = ({ postId, postsData, handleSetPostData }) => {
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [defaultUser, setDefaultUser] = useState(
    getUserData()[DEFAULT_USER_NAME]
  );

  useEffect(() => {
    if (postId && postsData) {
      const userData = getUserData();
      setUserInfo(userData[postsData[postId]?.userWhoPosted]);
    }
  }, [postId, postsData]);

  const handleOpenComments = (event) => {
    event.preventDefault();
    setShowCommentSection(!showCommentSection);
  };

  const handlePostLike = (event, postId, isPostLiked) => {
    event.preventDefault();

    if (isPostLiked) {
      removeFromLikedPostsByUser(postId, DEFAULT_USER_NAME);
    } else {
      addToLikedPostsByUser(postId, DEFAULT_USER_NAME);
    }
    setDefaultUser(getUserData()[DEFAULT_USER_NAME]);
  };
  return (
    <div className="PostInFeed">
      {!showCommentSection ? (
        <div className="PostInFeed__postContainer">
          <Link
            to={`/user/${postsData[postId].userWhoPosted}`}
            style={{ textDecoration: "none" }}
          >
            <div className="PostInFeed__userDetails">
              <div className="PostInFeed__profileImg">
                <img src={userInfo.profileImageUrl} alt="ProfileImage" />
              </div>
              <p className="PostInFeed__userName">
                {postsData[postId].userWhoPosted}
              </p>
            </div>
          </Link>
          <div className="PostInFeed__postImage">
            <img src={postsData[postId].imageUrl} alt="PostImage" />
          </div>
          <a
            className="PostInFeed__postLikeOption"
            onClick={(event) =>
              handlePostLike(
                event,
                postId,
                defaultUser.likedPosts.includes(postId)
              )
            }
            href="#like"
          >
            <MdFavorite
              size={30}
              style={{
                fill: defaultUser.likedPosts.includes(postId)
                  ? "red"
                  : "#d9d9d9",
              }}
            />
          </a>
          <div className="PostInFeed__postCaptionDetails">
            <p className="PostInFeed__postedBy">
              {postsData[postId].userWhoPosted}
            </p>
            <p className="PostInFeed__postCaption">
              {postsData[postId].caption}
            </p>
          </div>

          <a
            href="#comments"
            className="PostInFeed__postCommentsLink"
            onClick={handleOpenComments}
          >
            View{" "}
            {postsData[postId].comments.length !== 0
              ? `all ${postsData[postId].comments.length}`
              : ""}{" "}
            comments
          </a>
        </div>
      ) : (
        <div className="PostInFeed__commentContainer">
          <div className="PostInFeed__commentHeader">
            <div
              className="PostInFeed__backButton"
              onClick={() => setShowCommentSection(!showCommentSection)}
            >
              <IoChevronBackSharp />
            </div>
            <p>Comments</p>
          </div>
          <CommentsContainer
            postId={postId}
            postDetail={postsData[postId]}
            postedByUserInfo={userInfo}
            postComments={postsData[postId].comments}
            handleSetPostData={handleSetPostData}
          />
        </div>
      )}
    </div>
  );
};

export default PostInFeed;
