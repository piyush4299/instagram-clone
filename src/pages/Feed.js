import { Fragment, useState } from "react";
import PostInFeed from "Components/PostInFeed";
import Header from "Components/Header";
import getPostsDataForFeed from "helpers/getPostsDataForFeed";

function Feed() {
  const [postsData, setPostsData] = useState(getPostsDataForFeed());
  return (
    <>
      <Header />
      <div className="Feed">
        {Object.keys(postsData).map((postId) => (
          <Fragment key={postId}>
            <PostInFeed
              postId={postId}
              postsData={postsData}
              handleSetPostData={setPostsData}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default Feed;
