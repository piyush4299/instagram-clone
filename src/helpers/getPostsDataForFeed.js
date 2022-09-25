import { getValueByKey } from "./localStorageOperations";

function getPostsDataForFeed() {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  return appData.posts;
}

export default getPostsDataForFeed;
