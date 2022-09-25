import { getValueByKey, setItemByKeyValue } from "./localStorageOperations";

function addToLikedPostsByUser(postId, userName) {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  setItemByKeyValue(storeKey, {
    ...appData,
    users: {
      ...appData.users,
      [userName]: {
        ...appData.users[userName],
        likedPosts: [...appData.users[userName].likedPosts, postId],
      },
    },
  });
}

export default addToLikedPostsByUser;
