import getPostsDataForFeed from "helpers/getPostsDataForFeed";
import "./style.css";

function UserProfilePosts({ userData, userName }) {
  return (
    <div className="UserProfile__posts">
      {userData[userName].posts.map((postId) => {
        const postObj = getPostsDataForFeed()[postId];
        return (
          <div key={postId} className="UserProfile__postImage">
            <img src={postObj.imageUrl} alt="PostImage" />
          </div>
        );
      })}
    </div>
  );
}

export default UserProfilePosts;
