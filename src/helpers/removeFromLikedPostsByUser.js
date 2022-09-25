import { getValueByKey, setItemByKeyValue } from "./localStorageOperations";

function removeFromLikedPostsByUser(postId, userName) {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  let likedPostsArr = appData.users[userName].likedPosts;
  likedPostsArr.splice(likedPostsArr.indexOf(postId), 1);
  setItemByKeyValue(storeKey, {
    ...appData,
    users: {
      ...appData.users,
      [userName]: {
        ...appData.users[userName],
        likedPosts: likedPostsArr,
      },
    },
  });
}

export default removeFromLikedPostsByUser;
