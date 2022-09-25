import { getValueByKey } from "./localStorageOperations";

function getCommentObj(commentId) {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  return appData.comments[commentId];
}

export default getCommentObj;
